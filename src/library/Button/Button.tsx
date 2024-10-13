import './Button.css'
import '../common.css'
import { type Props, RESERVED_COLOR_MAP, mergeClass, setDefaultProps } from '../utilities'

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
      {...props}
      class={mergeClass('solidjs-modular-components-Button_root', props)}
      type={props.type ?? 'button'}
      style={{
        '--solidjs-modular-components-Button-button-color': RESERVED_COLOR_MAP[props.color],
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
