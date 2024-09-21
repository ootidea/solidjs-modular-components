import { Button } from '~/library/Button/Button'
import { PreviewArea } from '~/page-parts/PreviewArea'

export default function ButtonPage() {
  return (
    <>
      <h1>Button</h1>

      <h2>Colors</h2>
      <PreviewArea>
        <Button>Primary</Button>
        <Button color="achromatic">Achromatic</Button>
        <Button color="error">Error</Button>
      </PreviewArea>
    </>
  )
}
