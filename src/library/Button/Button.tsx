import './Button.css'
import '../common.css'
import { type Props, RESERVED_COLOR_MAP, setDefaultProps } from '../utilities'

export type ButtonProps = Props<
  {
    color?: 'primary' | 'achromatic' | 'error'
    onClick?: (event: MouseEvent) => unknown
  },
  'button'
>

export function Button(rawProps: ButtonProps) {
  const props = setDefaultProps(rawProps, {
    color: 'primary',
  })
  return (
    <button
      class="solidjs-modular-components-Button_root"
      type={props.type ?? 'button'}
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
