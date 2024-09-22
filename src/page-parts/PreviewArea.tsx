import type { JSX } from 'solid-js'
import classes from './PreviewArea.module.css'

type PreviewAreaProps = {
  vertical?: boolean
  children: JSX.Element
}

export function PreviewArea(props: PreviewAreaProps) {
  return (
    <div class={classes.root} data-direction={props.vertical ? 'vertical' : 'horizontal'}>
      {props.children}
    </div>
  )
}
