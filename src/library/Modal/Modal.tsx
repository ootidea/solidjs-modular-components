import type { JSX } from 'solid-js'
import '../common.css'
import './Modal.css'

export type ModalProps = {
  trigger?: (open: () => void) => JSX.Element
  children?: JSX.Element | ((close: () => void) => JSX.Element)
}
export default function Modal(props: ModalProps) {
  let dialogElement: HTMLDialogElement | undefined

  return (
    <>
      {props?.trigger?.(() => dialogElement?.showModal())}

      <dialog class="solid-general-components-Modal_root" ref={dialogElement}>
        {typeof props.children === 'function' ? props.children(() => dialogElement?.close()) : props.children}
      </dialog>
    </>
  )
}
