import { Navigate } from '@solidjs/router'

export default function RootPage() {
  // TODO: Temporary redirect in place. Implement proper root page and remove this redirect.
  return <Navigate href="/components/Button" />
}
