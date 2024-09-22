import classes from './SectionTitle.module.css'

export function SectionTitle({ children }: { children: string }) {
  return <h2 class={classes.root}>{children}</h2>
}
