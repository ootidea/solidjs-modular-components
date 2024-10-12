import { PageTitle } from '~/components/PageTitle'
import { PreviewArea } from '~/components/PreviewArea'
import { SectionTitle } from '~/components/SectionTitle'
import { Button } from '~/library/Button/Button'
import { Modal } from '~/library/Modal/Modal'

export default function Page() {
  return (
    <>
      <PageTitle />
      <SectionTitle>Bare-bones Modal</SectionTitle>
      <PreviewArea>
        <Modal trigger={(open) => <Button onClick={open}>open</Button>}>
          <p style={{ margin: '1em 2em' }}>You can close the modal by clicking outside it or pressing the ESC key</p>
        </Modal>
      </PreviewArea>

      <SectionTitle>Built-in close button</SectionTitle>
      <PreviewArea>
        <Modal showCloseButton trigger={(open) => <Button onClick={open}>open</Button>}>
          <p style={{ margin: '0.5em 1em' }}>The showCloseButton option allows you to display a close button</p>
        </Modal>
      </PreviewArea>

      <SectionTitle>Close function</SectionTitle>
      <PreviewArea>
        <Modal trigger={(open) => <Button onClick={open}>open</Button>}>
          {(close) => (
            <div style={{ margin: '1em' }}>
              <p>children prop can receive a close function</p>
              <div style={{ display: 'flex', 'justify-content': 'end' }}>
                <Button onClick={close}>close</Button>
              </div>
            </div>
          )}
        </Modal>
      </PreviewArea>

      <SectionTitle>Modal title</SectionTitle>
      <PreviewArea>
        <Modal title="Title" showCloseButton trigger={(open) => <Button onClick={open}>open</Button>}>
          <p style={{ margin: '0.5em 1em' }}>The title is centered</p>
        </Modal>
      </PreviewArea>
    </>
  )
}
