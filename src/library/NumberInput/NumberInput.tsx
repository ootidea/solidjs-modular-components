import './NumberInput.css'
import '../common.css'
import type { Props } from '~/library/utilities'

export type NumberInputProps = Props<{
  value?: number
  placeholder?: string
  maxLength?: number
  onChange?: (value: number) => void
}>

export function NumberInput(props: NumberInputProps) {
  return (
    <input
      class="solid-general-components-NumberInput_root"
      type="text"
      inputmode="numeric"
      value={props.value ?? ''}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
      onChange={({ target }) => props.onChange?.(Number(target.value))}
      onInput={({ target }) => {
        if (target.selectionStart === null) return
        const originalLength = target.value.length
        const originalCursorPosition = target.selectionStart
        target.value = target.value.replaceAll(/[^0-9.-]/g, '')
        const newCursorPosition = originalCursorPosition - (originalLength - target.value.length)
        target.setSelectionRange(newCursorPosition, newCursorPosition)
      }}
    />
  )
}
