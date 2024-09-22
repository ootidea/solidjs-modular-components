import './NumberInput.css'
import '../common.css'
import type { MakeOptionalPropertiesAcceptUndefined } from 'advanced-type-utilities'

export type NumberInputProps = MakeOptionalPropertiesAcceptUndefined<{
  value?: number
  onChange?: (value: number) => void
}>

export function NumberInput(props: NumberInputProps) {
  return (
    <input
      class="solid-general-components-NumberInput_root"
      type="number"
      value={props.value}
      onChange={(event) => props.onChange?.(Number(event.target.value))}
    />
  )
}
