export function PageTitle() {
  const lastPathSegment = location.pathname.split('/').pop()
  return (
    <h1
      style={{
        color: 'oklch(50% 0 0)',
      }}
    >
      {lastPathSegment}
    </h1>
  )
}
