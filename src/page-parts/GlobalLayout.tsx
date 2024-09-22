import { MetaProvider, Title } from '@solidjs/meta'
import { type RouteSectionProps, useLocation } from '@solidjs/router'
import { Suspense } from 'solid-js'
import { SidebarMenu } from '~/page-parts/SidebarMenu'
import classes from './GlobalLayout.module.css'

export function GlobalLayout(props: RouteSectionProps<unknown>) {
  const location = useLocation()
  return (
    <MetaProvider>
      <Title>{location.pathname.split('/').pop()} | solid-general-components</Title>
      <div class={classes.root}>
        <nav class={classes.sidebar}>
          <SidebarMenu>Button</SidebarMenu>
          <SidebarMenu>Modal</SidebarMenu>
          <SidebarMenu>NumberInput</SidebarMenu>
          <SidebarMenu>Icon</SidebarMenu>
          <SidebarMenu>IconButton</SidebarMenu>
        </nav>
        <main class={classes.main}>
          <Suspense>{props.children}</Suspense>
        </main>
      </div>
    </MetaProvider>
  )
}
