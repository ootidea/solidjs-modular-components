import './IconButton.css'
import '../common.css'
import type { ComponentProps } from 'solid-js'
import { mergeClass } from '~/library/utilities'

export type IconButtonProps = ComponentProps<'button'>

export function IconButton(props: IconButtonProps) {
  return (
    <button
      {...props}
      class={mergeClass('solid-general-components-IconButton_root', props)}
      type={props.type ?? 'button'}
    >
      {props.children}
    </button>
  )
}
