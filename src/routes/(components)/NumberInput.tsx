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

      <SectionTitle>Number Input Restrictions</SectionTitle>
      <PreviewArea vertical>
        <NumberInput placeholder="only integer" allowOnlyInteger />
        <NumberInput placeholder="only positive number" allowOnlyPositive />
        <NumberInput placeholder="only positive integer" allowOnlyInteger allowOnlyPositive />
      </PreviewArea>
    </>
  )
}
