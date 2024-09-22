import './Icon.css'
import '../common.css'

export type IconProps = {
  url: string
  size?: string
}

export function Icon(props: IconProps) {
  return (
    <div
      class="solid-general-components-Icon_root"
      style={{
        '--solid-general-components-Icon_url': `url('${props.url}')`,
        '--solid-general-components-Icon_size': props.size ?? '1.5em',
      }}
      role="img"
    />
  )
}
