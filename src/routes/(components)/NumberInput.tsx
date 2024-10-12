import { PageTitle } from '~/components/PageTitle'
import { PreviewArea } from '~/components/PreviewArea'
import { SectionTitle } from '~/components/SectionTitle'
import { NumberInput } from '~/library/NumberInput/NumberInput'

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

      <SectionTitle>Error state</SectionTitle>
      <PreviewArea vertical>
        <NumberInput aria-invalid="true" />
        <NumberInput aria-invalid value={999} />
      </PreviewArea>
    </>
  )
}
