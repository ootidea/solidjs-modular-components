import './TextInput.css'
import '../common.css'
import { type Props, mergeClass } from '../utilities'

export type TextInputProps = Props<
  {
    value?: string
    placeholder?: string
    'aria-invalid'?: boolean | 'true' | 'false'
    onChange?: (value: string) => void
  },
  'input'
>

export function TextInput(props: TextInputProps) {
  const onInput = ({ target }: { target: HTMLInputElement }) => {
    if (target.selectionStart === null) return
    const originalLength = target.value.length
    const originalCursorPosition = target.selectionStart
    // TODO: implement character restriction by RegExp

    const newCursorPosition = originalCursorPosition - (originalLength - target.value.length)
    target.setSelectionRange(newCursorPosition, newCursorPosition)
  }

  return (
    <input
      {...props}
      class={mergeClass('solidjs-modular-components-TextInput_root', props)}
      value={props.value ?? ''}
      placeholder={props.placeholder}
      aria-invalid={props['aria-invalid']}
      onChange={({ target }) => props.onChange?.(target.value)}
      onInput={onInput}
    />
  )
}
