import type { JSX } from 'solid-js'
import './Modal.css'
import '../common.css'
import { Icon } from '~/library'
import { IconButton } from '~/library/IconButton/IconButton'
import closeIcon from '../icons/close.svg'

export type ModalProps = {
  title?: JSX.Element
  showCloseButton?: boolean
  trigger?: (open: () => void) => JSX.Element
  children?: JSX.Element | ((close: () => void) => JSX.Element)
}
export function Modal(props: ModalProps) {
  let dialogElement: HTMLDialogElement | undefined
  const closeModal = () => dialogElement?.close()
  return (
    <>
      {props?.trigger?.(() => dialogElement?.showModal())}

      <dialog
        class="solid-general-components-Modal_root"
        ref={dialogElement}
        onClick={(event) => {
          const { left, right, top, bottom } = event.target.getBoundingClientRect()
          if (event.clientX < left || right < event.clientX || event.clientY < top || bottom < event.clientY) {
            closeModal()
          }
        }}
      >
        <div class="solid-general-components-Modal_titleBar">
          <div aria-hidden="true" />
          {props.title ? (
            <h2 class="solid-general-components-Modal_title">{props.title}</h2>
          ) : (
            <div aria-hidden="true" />
          )}
          {props.showCloseButton ? (
            <IconButton class="solid-general-components-Modal_closeButton" onClick={closeModal}>
              <Icon url={closeIcon} />
            </IconButton>
          ) : (
            <div aria-hidden="true" />
          )}
        </div>
        {typeof props.children === 'function' ? props.children(closeModal) : props.children}
      </dialog>
    </>
  )
}
