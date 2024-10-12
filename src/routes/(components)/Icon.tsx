import starOutlineIcon from '~/assets/star-outline.svg'
import { PageTitle } from '~/components/PageTitle'
import { PreviewArea } from '~/components/PreviewArea'
import { Icon } from '~/library/Icon/Icon'

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
