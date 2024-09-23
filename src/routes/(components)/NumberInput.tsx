import { NumberInput } from '~/library/NumberInput/NumberInput'
import { PageTitle } from '~/page-parts/PageTitle'
import { PreviewArea } from '~/page-parts/PreviewArea'

export default function Page() {
  return (
    <>
      <PageTitle />
      <PreviewArea vertical>
        <NumberInput />
        <NumberInput value={42.5} />
        <NumberInput placeholder="placeholder" />
      </PreviewArea>
    </>
  )
}
