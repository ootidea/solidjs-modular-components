import './Icon.css'
import '../common.css'
import type { CssColor, Props } from '../utilities'

export type IconProps = Props<{
  url: string
  size?: string
  color?: CssColor
}>

export function Icon(props: IconProps) {
  return (
    <div
      class="solidjs-modular-components-Icon_root"
      style={{
        '--solidjs-modular-components-Icon_url': `url('${props.url.replaceAll("'", '"')}')`,
        '--solidjs-modular-components-Icon_size': props.size ?? '1lh',
        '--solidjs-modular-components-Icon_color': props.color ?? 'currentColor',
      }}
      role="img"
    />
  )
}
