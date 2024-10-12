import starOutlineIcon from '~/assets/star-outline.svg'
import { PageTitle } from '~/components/PageTitle'
import { PreviewArea } from '~/components/PreviewArea'
import { Icon } from '~/library/Icon/Icon'

export default function Page() {
  return (
    <>
      <PageTitle />
      <PreviewArea>
        <Icon src={starOutlineIcon} />
        <Icon src={starOutlineIcon} color="var(--solidjs-modular-components-primary-color)" />
      </PreviewArea>
    </>
  )
}
