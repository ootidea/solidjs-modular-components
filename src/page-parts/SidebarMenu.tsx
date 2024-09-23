import classes from './SidebarMenu.module.css'

export function SidebarMenu(props: { children: string }) {
  return (
    <a class={classes.root} href={`/${props.children}`}>
      {props.children}
    </a>
  )
}
