export function SectionTitle(props: { children: string }) {
  return (
    <h2
      style={{
        color: 'oklch(40% 0 0)',
      }}
    >
      {props.children}
    </h2>
  )
}
