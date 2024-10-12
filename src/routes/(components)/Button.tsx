import { PageTitle } from '~/components/PageTitle'
import { PreviewArea } from '~/components/PreviewArea'
import { SectionTitle } from '~/components/SectionTitle'
import { Button } from '~/library/Button/Button'

export default function Page() {
  return (
    <>
      <PageTitle />
      <SectionTitle>Colors</SectionTitle>
      <PreviewArea>
        <Button>Primary</Button>
        <Button color="achromatic">Achromatic</Button>
        <Button color="error">Error</Button>
      </PreviewArea>

      <SectionTitle>Disabled</SectionTitle>
      <PreviewArea>
        <Button disabled>Primary</Button>
        <Button color="achromatic" disabled>
          Achromatic
        </Button>
        <Button color="error" disabled>
          Error
        </Button>
      </PreviewArea>
    </>
  )
}
