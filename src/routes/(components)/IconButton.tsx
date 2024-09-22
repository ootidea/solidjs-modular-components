import starOutlineIcon from '~/icons/star-outline.svg'
import starIcon from '~/icons/star.svg'
import { Icon } from '~/library'
import { IconButton } from '~/library/IconButton/IconButton'
import { PageTitle } from '~/page-parts/PageTitle'
import { PreviewArea } from '~/page-parts/PreviewArea'

export default function Page() {
  return (
    <>
      <PageTitle />
      <PreviewArea>
        <IconButton>
          <Icon url={starOutlineIcon} />
        </IconButton>
        <IconButton>
          <Icon url={starIcon} />
        </IconButton>
      </PreviewArea>
    </>
  )
}
