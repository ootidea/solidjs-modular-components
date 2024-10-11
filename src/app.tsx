import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { GlobalLayout } from '~/page-parts/GlobalLayout'
import './app.css'

export default function App() {
  return (
    <Router root={GlobalLayout}>
      <FileRoutes />
    </Router>
  )
}
