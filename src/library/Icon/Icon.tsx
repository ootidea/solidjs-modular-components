import './Icon.css'
import '../common.css'
import { type CssColor, type Props, mergeClass } from '../utilities'

export type IconProps = Props<
  {
    src: string
    size?: string
    color?: CssColor
  },
  'div'
>

export function Icon(props: IconProps) {
  return (
    <div
      {...props}
      class={mergeClass('solidjs-modular-components-Icon_root', props)}
      style={{
        '--solidjs-modular-components-Icon_image': `url('${props.src.replaceAll("'", '"')}')`,
        '--solidjs-modular-components-Icon_size': props.size ?? '1lh',
        '--solidjs-modular-components-Icon_color': props.color ?? 'currentColor',
      }}
      role="img"
    />
  )
}
