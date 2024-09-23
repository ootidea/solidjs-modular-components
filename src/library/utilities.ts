import type { Equals, MakeOptionalPropertiesAcceptUndefined, OverwriteProperties } from 'advanced-type-utilities'
import type { ComponentProps, ValidComponent } from 'solid-js'

export type Props<T, B extends ValidComponent = never> = Equals<B, never> extends true
  ? MakeOptionalPropertiesAcceptUndefined<T>
  : OverwriteProperties<ComponentProps<B>, MakeOptionalPropertiesAcceptUndefined<T>>

export function mergeClass(baseClass: string, props: { class?: string | undefined }): string {
  if (props.class === undefined) return baseClass
  return `${baseClass} ${props.class}`
}
