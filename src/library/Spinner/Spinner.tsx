import { createMemoObject } from 'solid-signal-object'
import { type CssColor, type Props, setDefaultProps } from '~/library/utilities'
import './Spinner.css'
import '../common.css'

export type SpinnerProps = Props<{
  size?: string
  thickness?: number
  rpm?: number
  color?: CssColor
}>

export function Spinner(rawProps: SpinnerProps) {
  const props = setDefaultProps(rawProps, {
    size: '1lh',
    thickness: 25,
    rpm: 84,
    color: 'currentColor',
  })

  const svgUrl = createMemoObject(
    () =>
      `url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="${
        100 - props.thickness / 2
      }" fill="none" stroke="black" stroke-width="${props.thickness}" /></svg>')`,
  )

  return (
    <div
      class="solid-general-components-Spinner_root"
      style={{
        '--solid-general-components-Spinner_size': props.size,
        '--solid-general-components-Spinner_svg-url': svgUrl.value,
        '--solid-general-components-Spinner_period': `${60 / props.rpm}s`,
        '--solid-general-components-Spinner_color': props.color,
      }}
      role="img"
    />
  )
}
