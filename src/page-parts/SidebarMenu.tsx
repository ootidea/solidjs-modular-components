export function SidebarMenu(props: { children: string }) {
  return <a href={`/${props.children}`}>{props.children}</a>
}
