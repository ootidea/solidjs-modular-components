import { type CssColor, type Props, mergeClass, setDefaultProps } from '../utilities'
import './Spinner.css'
import '../common.css'
import { createMemo } from 'solid-js'

export type SpinnerProps = Props<
  {
    size?: string
    thickness?: number
    rpm?: number
    color?: CssColor
  },
  'div'
>

export function Spinner(rawProps: SpinnerProps) {
  const props = setDefaultProps(rawProps, {
    size: '1lh',
    thickness: 25,
    rpm: 84,
    color: 'currentColor',
  })

  const svgUrl = createMemo(
    () =>
      `url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="${
        100 - props.thickness / 2
      }" fill="none" stroke="black" stroke-width="${props.thickness}" /></svg>')`,
  )

  return (
    <div
      {...props}
      class={mergeClass('solidjs-modular-components-Spinner_root', props)}
      style={{
        '--solidjs-modular-components-Spinner_size': props.size,
        '--solidjs-modular-components-Spinner_svg-url': svgUrl(),
        '--solidjs-modular-components-Spinner_period': `${60 / props.rpm}s`,
        '--solidjs-modular-components-Spinner_color': props.color,
      }}
      role="img"
    />
  )
}
