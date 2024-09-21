import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { GlobalLayout } from '~/page-parts/GlobalLayout'

export default function App() {
  return (
    <Router root={GlobalLayout}>
      <FileRoutes />
    </Router>
  )
}
