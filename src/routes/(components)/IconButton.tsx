import starOutlineIcon from '~/assets/star-outline.svg'
import starIcon from '~/assets/star.svg'
import { PageTitle } from '~/components/PageTitle'
import { PreviewArea } from '~/components/PreviewArea'
import { Icon } from '~/library'
import { IconButton } from '~/library/IconButton/IconButton'

export default function Page() {
  return (
    <>
      <PageTitle />
      <PreviewArea>
        <IconButton>
          <Icon src={starOutlineIcon} />
        </IconButton>
        <IconButton>
          <Icon src={starIcon} />
        </IconButton>
      </PreviewArea>
    </>
  )
}
