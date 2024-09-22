import './IconButton.css'
import '../common.css'
import type { JSX } from 'solid-js'

export type IconButtonProps = {
  children?: JSX.Element
}

export function IconButton(props: IconButtonProps) {
  return (
    <button class="solid-general-components-IconButton_root" type="button">
      {props.children}
    </button>
  )
}
