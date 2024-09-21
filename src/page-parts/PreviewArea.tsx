import type { JSX } from 'solid-js'
import classes from './PreviewArea.module.css'

type PreviewAreaProps = {
  children: JSX.Element
}

export function PreviewArea(props: PreviewAreaProps) {
  return <div class={classes.root}>{props.children}</div>
}
