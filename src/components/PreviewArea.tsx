import { For, type JSX, children } from 'solid-js'
import classes from './PreviewArea.module.css'

type PreviewAreaProps = {
  vertical?: boolean
  children: JSX.Element
}

export function PreviewArea(props: PreviewAreaProps) {
  const resolved = children(() => props.children)
  return (
    <div class={classes.root} data-direction={props.vertical ? 'vertical' : 'horizontal'}>
      <For each={resolved.toArray()}>{(child) => <div>{child}</div>}</For>
    </div>
  )
}
