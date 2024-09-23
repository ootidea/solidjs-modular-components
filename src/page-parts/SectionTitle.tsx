export function SectionTitle(props: { children: string }) {
  return (
    <h2
      style={{
        color: 'oklch(40% 0 0)',
        'margin-top': '2lh',
        'margin-bottom': '0.7lh',
      }}
    >
      {props.children}
    </h2>
  )
}
