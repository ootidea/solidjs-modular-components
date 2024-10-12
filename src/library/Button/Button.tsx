import type { JSX } from 'solid-js'
import './Button.css'
import '../common.css'
import { RESERVED_COLOR_MAP, setDefaultProps } from '~/library/utilities'

export type ButtonProps = {
  color?: 'primary' | 'achromatic' | 'error'
  disabled?: boolean
  onClick?: (event: MouseEvent) => unknown
  children?: JSX.Element
}

export function Button(rawProps: ButtonProps) {
  const props = setDefaultProps(rawProps, {
    color: 'primary',
  })
  return (
    <button
      class="solidjs-modular-components-Button_root"
      type="button"
      disabled={props.disabled}
      style={{
        '--solidjs-modular-components-Button-button-color': RESERVED_COLOR_MAP[props.color],
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
