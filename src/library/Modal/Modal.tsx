import type { JSX } from 'solid-js'
import './Modal.css'
import '../common.css'
import { Icon } from '~/library'
import { IconButton } from '~/library/IconButton/IconButton'
import closeIcon from '../icons/close.svg'

export type ModalProps = {
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
          {props.showCloseButton && (
            <IconButton class="solid-general-components-Modal_closeButton" onClick={closeModal}>
              <Icon url={closeIcon} />
            </IconButton>
          )}
        </div>
        {typeof props.children === 'function' ? props.children(closeModal) : props.children}
      </dialog>
    </>
  )
}
