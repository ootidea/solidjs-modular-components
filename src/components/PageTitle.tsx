import { useLocation } from '@solidjs/router'

export function PageTitle() {
  const location = useLocation()
  return (
    <h1
      style={{
        color: 'oklch(50% 0 0)',
      }}
    >
      {/* TODO: use takeLastWhileString function */}
      {location.pathname.split('/').pop()}
    </h1>
  )
}
