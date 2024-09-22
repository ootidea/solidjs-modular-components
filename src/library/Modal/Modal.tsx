import type { JSX } from 'solid-js'
import './Modal.css'
import '../common.css'
import { Icon } from '../Icon/Icon'
import closeIcon from '../icons/close.svg'

export type ModalProps = {
  trigger?: (open: () => void) => JSX.Element
  children?: JSX.Element | ((close: () => void) => JSX.Element)
}
export function Modal(props: ModalProps) {
  let dialogElement: HTMLDialogElement | undefined

  return (
    <>
      {props?.trigger?.(() => dialogElement?.showModal())}

      <dialog
        class="solid-general-components-Modal_root"
        ref={dialogElement}
        onClick={(event) => {
          const { left, right, top, bottom } = event.target.getBoundingClientRect()
          if (event.clientX < left || right < event.clientX || event.clientY < top || bottom < event.clientY) {
            dialogElement?.close()
          }
        }}
      >
        <Icon url={closeIcon} />
        {typeof props.children === 'function' ? props.children(() => dialogElement?.close()) : props.children}
      </dialog>
    </>
  )
}
