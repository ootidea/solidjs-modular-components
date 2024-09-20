import './Button.css'

export type ButtonProps = {
  color?: 'primary' | 'achromatic' | 'error'
}

export function Button(props: ButtonProps) {
  return (
    <button
      class="solid-general-components-Button_root"
      type="button"
      data-solid-general-components-color={props.color ?? 'primary'}
    >
      Button
    </button>
  )
}
