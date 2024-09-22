import starOutlineIcon from '~/icons/star-outline.svg'
import { Icon } from '~/library/Icon/Icon'
import { PageTitle } from '~/page-parts/PageTitle'
import { PreviewArea } from '~/page-parts/PreviewArea'

export default function Page() {
  return (
    <>
      <PageTitle />
      <PreviewArea>
        <Icon url={starOutlineIcon} />
      </PreviewArea>
    </>
  )
}
