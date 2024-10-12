import starOutlineIcon from '~/assets/star-outline.svg'
import { Icon } from '~/library/Icon/Icon'
import { PageTitle } from '~/page-parts/PageTitle'
import { PreviewArea } from '~/page-parts/PreviewArea'

export default function Page() {
  return (
    <>
      <PageTitle />
      <PreviewArea>
        <Icon url={starOutlineIcon} />
        <Icon url={starOutlineIcon} color="var(--solid-general-components-primary-color)" />
      </PreviewArea>
    </>
  )
}
