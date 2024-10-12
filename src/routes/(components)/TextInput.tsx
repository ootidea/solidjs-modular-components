import { PageTitle } from '~/components/PageTitle'
import { PreviewArea } from '~/components/PreviewArea'
import { SectionTitle } from '~/components/SectionTitle'
import { TextInput } from '~/library/TextInput/TextInput'

export default function Page() {
  return (
    <>
      <PageTitle />
      <PreviewArea vertical>
        <TextInput />
        <TextInput value="Default value" />
        <TextInput placeholder="placeholder" />
      </PreviewArea>

      <SectionTitle>Error state</SectionTitle>
      <PreviewArea vertical>
        <TextInput aria-invalid="true" />
        <TextInput aria-invalid value="Default value" />
      </PreviewArea>
    </>
  )
}
