import './NumberInput.css'
import '../common.css'
import type { Props } from '~/library/utilities'

export type NumberInputProps = Props<{
  value?: number
  placeholder?: string
  step?: number
  onChange?: (value: number) => void
}>

export function NumberInput(props: NumberInputProps) {
  return (
    <input
      class="solid-general-components-NumberInput_root"
      type="number"
      value={props.value}
      placeholder={props.placeholder}
      step={props.step}
      onChange={(event) => props.onChange?.(Number(event.target.value))}
    />
  )
}
