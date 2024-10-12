import './IconButton.css'
import '../common.css'
import { type Props, mergeClass } from '~/library/utilities'

export type IconButtonProps = Props<{}, 'button'>

export function IconButton(props: IconButtonProps) {
  return (
    <button
      {...props}
      class={mergeClass('solidjs-modular-components-IconButton_root', props)}
      type={props.type ?? 'button'}
    >
      {props.children}
    </button>
  )
}
