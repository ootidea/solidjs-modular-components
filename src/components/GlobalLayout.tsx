import { MetaProvider, Title } from '@solidjs/meta'
import { type RouteSectionProps, useLocation } from '@solidjs/router'
import { Suspense } from 'solid-js'
import { Sidebar } from '~/components/Sidebar'

export function GlobalLayout(props: RouteSectionProps) {
  const location = useLocation()
  return (
    <MetaProvider>
      <Title>{location.pathname.split('/').pop()} | solidjs-modular-components</Title>
      <div
        style={{
          display: 'grid',
          'grid-template-columns': 'auto 1fr',
        }}
      >
        <Sidebar />
        <main
          style={{
            padding: '2em 6em',
          }}
        >
          <Suspense>{props.children}</Suspense>
        </main>
      </div>
    </MetaProvider>
  )
}
