import { Button } from '~/library/Button/Button'
import { Modal } from '~/library/Modal/Modal'
import { PageTitle } from '~/page-parts/PageTitle'
import { PreviewArea } from '~/page-parts/PreviewArea'

export default function Page() {
  return (
    <>
      <PageTitle />
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
