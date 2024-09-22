import { MetaProvider, Title } from '@solidjs/meta'
import { type RouteSectionProps, useLocation } from '@solidjs/router'
import { Suspense } from 'solid-js'
import classes from './GlobalLayout.module.css'

export function GlobalLayout(props: RouteSectionProps<unknown>) {
  const location = useLocation()
  return (
    <MetaProvider>
      <Title>{location.pathname.split('/').pop()} | solid-general-components</Title>
      <div class={classes.root}>
        <aside class={classes.sidebar}>
          <a href="/components/Button">Button</a>
          <a href="/components/Modal">Modal</a>
          <a href="/components/NumberInput">NumberInput</a>
          <a href="/components/Icon">Icon</a>
        </aside>
        <main class={classes.main}>
          <Suspense>{props.children}</Suspense>
        </main>
      </div>
    </MetaProvider>
  )
}
