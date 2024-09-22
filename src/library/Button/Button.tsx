import type { JSX } from 'solid-js'
import './Button.css'
import '../common.css'

export type ButtonProps = {
  color?: 'primary' | 'achromatic' | 'error'
  disabled?: boolean
  onClick?: (event: MouseEvent) => unknown
  children?: JSX.Element
}

export function Button(props: ButtonProps) {
  return (
    <button
      class="solid-general-components-Button_root"
      type="button"
      disabled={props.disabled}
      data-solid-general-components-color={props.color ?? 'primary'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
