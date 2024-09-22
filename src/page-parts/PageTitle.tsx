export function PageTitle({ children }: { children: string }) {
  return (
    <h1
      style={{
        color: 'oklch(50% 0 0)',
      }}
    >
      {children}
    </h1>
  )
}
