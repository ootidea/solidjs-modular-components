import type {
  Equals,
  LiteralAutoComplete,
  MakeOptionalPropertiesAcceptUndefined,
  OverwriteProperties,
} from 'advanced-type-utilities'
import type { ComponentProps, ValidComponent } from 'solid-js'

export type Props<T, B extends ValidComponent = never> = Equals<B, never> extends true
  ? MakeOptionalPropertiesAcceptUndefined<T>
  : OverwriteProperties<ComponentProps<B>, MakeOptionalPropertiesAcceptUndefined<T>>

export type CssColor = LiteralAutoComplete<'currentColor' | 'transparent'>

export function setDefaultProps<T extends object, U extends object>(
  rawProps: T,
  defaultValues: U,
): OverwriteProperties<T, U> {
  const result = {}
  const keys = new Set(Reflect.ownKeys(defaultValues)).union(new Set(Reflect.ownKeys(rawProps)))
  for (const key of keys) {
    Object.defineProperty(result, key, {
      get: () => (rawProps as any)[key] ?? (defaultValues as any)[key],
    })
  }
  return result as any
}

export function mergeClass(baseClass: string, props: { class?: string | undefined }): string {
  if (props.class === undefined) return baseClass
  return `${baseClass} ${props.class}`
}
