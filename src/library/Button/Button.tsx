import './Button.css'
import type { JSX } from 'solid-js'

export type ButtonProps = {
  color?: 'primary' | 'achromatic' | 'error'
  children?: JSX.Element
}

export function Button(props: ButtonProps) {
  return (
    <button
      class="solid-general-components-Button_root"
      type="button"
      data-solid-general-components-color={props.color ?? 'primary'}
    >
      {props.children}
    </button>
  )
}
