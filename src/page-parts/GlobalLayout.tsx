import { MetaProvider, Title } from '@solidjs/meta'
import type { RouteSectionProps } from '@solidjs/router'
import { Suspense } from 'solid-js'
import classes from './GlobalLayout.module.css'

export function GlobalLayout(props: RouteSectionProps<unknown>) {
  return (
    <MetaProvider>
      <Title>solid-general-components</Title>
      <div class={classes.root}>
        <aside class={classes.sidebar}>
          <a href="/">solid-general-components</a>
          <a href="/components/Button">Button</a>
          <a href="/components/Modal">Modal</a>
        </aside>
        <main>
          <Suspense>{props.children}</Suspense>
        </main>
      </div>
    </MetaProvider>
  )
}
