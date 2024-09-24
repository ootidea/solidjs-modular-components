import { NumberInput } from '~/library/NumberInput/NumberInput'
import { PageTitle } from '~/page-parts/PageTitle'
import { PreviewArea } from '~/page-parts/PreviewArea'
import { SectionTitle } from '~/page-parts/SectionTitle'

export default function Page() {
  return (
    <>
      <PageTitle />
      <PreviewArea vertical>
        <NumberInput />
        <NumberInput value={42.5} />
        <NumberInput placeholder="placeholder" />
      </PreviewArea>

      <SectionTitle>Restrict symbol input</SectionTitle>
      <PreviewArea vertical>
        <NumberInput placeholder="Integers only" integer />
        <NumberInput placeholder="Non-negative numbers only" nonNegative />
        <NumberInput placeholder="Natural numbers only" integer nonNegative />
      </PreviewArea>
    </>
  )
}
