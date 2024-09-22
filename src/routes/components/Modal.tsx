import { Button } from '~/library/Button/Button'
import { Modal } from '~/library/Modal/Modal'
import { PageTitle } from '~/page-parts/PageTitle'
import { PreviewArea } from '~/page-parts/PreviewArea'
import { SectionTitle } from '~/page-parts/SectionTitle'

export default function Page() {
  return (
    <>
      <PageTitle />
      <SectionTitle>Open/Close Modal by triggers</SectionTitle>
      <PreviewArea>
        <Modal trigger={(open) => <Button onClick={open}>open</Button>}>
          {(close) => (
            <div>
              <Button onClick={close}>close</Button>
            </div>
          )}
        </Modal>
      </PreviewArea>
    </>
  )
}
