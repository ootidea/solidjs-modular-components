import { Button } from '~/library/Button/Button'
import { PreviewArea } from '~/page-parts/PreviewArea'
import { SectionTitle } from '~/page-parts/SectionTitle'

export default function Page() {
  return (
    <>
      <h1>Button</h1>

      <SectionTitle>Colors</SectionTitle>
      <PreviewArea>
        <Button>Primary</Button>
        <Button color="achromatic">Achromatic</Button>
        <Button color="error">Error</Button>
      </PreviewArea>
    </>
  )
}
