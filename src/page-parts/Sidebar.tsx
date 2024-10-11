import { SidebarMenu } from '~/page-parts/SidebarMenu'

export function Sidebar() {
  return (
    <nav
      style={{
        display: 'flex',
        position: 'sticky',
        top: 0,
        'box-sizing': 'border-box',
        'flex-direction': 'column',
        width: 'max-content',
        'min-width': '10em',
        height: '100vh',
        padding: '2em 0',
        'border-right': '1px solid oklch(90% 0 0)',
      }}
    >
      <SidebarMenu>Button</SidebarMenu>
      <SidebarMenu>Modal</SidebarMenu>
      <SidebarMenu>NumberInput</SidebarMenu>
      <SidebarMenu>Icon</SidebarMenu>
      <SidebarMenu>IconButton</SidebarMenu>
      <SidebarMenu>Spinner</SidebarMenu>
    </nav>
  )
}
