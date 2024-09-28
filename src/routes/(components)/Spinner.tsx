import { Spinner } from '~/library/Spinner/Spinner'
import { PageTitle } from '~/page-parts/PageTitle'
import { PreviewArea } from '~/page-parts/PreviewArea'
import { SectionTitle } from '~/page-parts/SectionTitle'

export default function Page() {
  return (
    <>
      <PageTitle />
      <PreviewArea>
        <Spinner />
        <Spinner color="var(--solid-general-components-primary-color)" />
      </PreviewArea>
      <SectionTitle>Size</SectionTitle>
      <PreviewArea>
        <Spinner size="1em" />
        <Spinner size="25px" />
        <Spinner size="1.5lh" />
      </PreviewArea>
      <SectionTitle>Rotational speed</SectionTitle>
      <PreviewArea>
        <Spinner rpm={30} />
        <Spinner rpm={180} />
      </PreviewArea>
      <SectionTitle>Thickness</SectionTitle>
      <PreviewArea>
        <Spinner thickness={7} />
        <Spinner thickness={50} />
        <Spinner thickness={100} />
      </PreviewArea>
    </>
  )
}
