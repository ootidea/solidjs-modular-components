import { Button } from '~/library/Button/Button'
import Modal from '~/library/Modal/Modal'
import { PreviewArea } from '~/page-parts/PreviewArea'

export default function ModalPage() {
  return (
    <>
      <PreviewArea>
        <Modal trigger={(open) => <Button onClick={open}>open</Button>}>
          {(close) => (
            <div>
              <Button onClick={close}>close</Button>
            </div>
          )}
        </Modal>
      </PreviewArea>
      <PreviewArea>
        <Modal trigger={(open) => <Button onClick={open}>open</Button>}>Sample</Modal>
      </PreviewArea>
    </>
  )
}
