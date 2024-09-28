import './Icon.css'
import '../common.css'
import type { CssColor, Props } from '~/library/utilities'

export type IconProps = Props<{
  url: string
  size?: string
  color?: CssColor
}>

export function Icon(props: IconProps) {
  return (
    <div
      class="solid-general-components-Icon_root"
      style={{
        '--solid-general-components-Icon_url': `url('${props.url.replaceAll("'", '"')}')`,
        '--solid-general-components-Icon_size': props.size ?? '1lh',
        '--solid-general-components-Icon_color': props.color ?? 'currentColor',
      }}
      role="img"
    />
  )
}
