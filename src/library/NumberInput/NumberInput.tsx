import './NumberInput.css'
import '../common.css'
import type { Props } from '../utilities'

export type NumberInputProps = Props<
  {
    value?: number
    placeholder?: string
    integer?: boolean
    nonNegative?: boolean
    maxLength?: number
    'aria-invalid'?: boolean | 'true' | 'false'
    onInputNumber?: (value: number) => void
    onChangeNumber?: (value: number) => void
  },
  'input'
>

export function NumberInput(props: NumberInputProps) {
  const onInput = ({ target }: { target: HTMLInputElement }) => {
    if (target.selectionStart === null) return
    const originalLength = target.value.length
    const originalCursorPosition = target.selectionStart
    if (props.integer) {
      if (props.nonNegative) {
        target.value = target.value.replaceAll(/[^0-9]/g, '')
      } else {
        target.value = target.value.replaceAll(/(?!^)-|[^0-9-]/g, '')
      }
    } else {
      if (props.nonNegative) {
        target.value = target.value.replaceAll(/(?<=\..*)\.|[^0-9.]/g, '')
      } else {
        target.value = target.value.replaceAll(/(?!^)-|(?<=\..*)\.|[^0-9.-]/g, '')
      }
    }
    const newCursorPosition = originalCursorPosition - (originalLength - target.value.length)
    target.setSelectionRange(newCursorPosition, newCursorPosition)

    const number = Number(target.value)
    if (Number.isNaN(number)) {
      props.onInputNumber?.(number)
    }
  }

  return (
    <input
      {...props}
      class="solidjs-modular-components-NumberInput_root"
      type="text"
      inputmode="numeric"
      value={props.value ?? ''}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
      aria-invalid={props['aria-invalid']}
      onChange={({ target }) => {
        const number = Number(target.value)
        if (Number.isNaN(number)) return
        props.onChangeNumber?.(number)
      }}
      onInput={onInput}
    />
  )
}
