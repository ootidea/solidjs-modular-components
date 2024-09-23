import type { MakeOptionalPropertiesAcceptUndefined } from 'advanced-type-utilities'

export type Props<T> = MakeOptionalPropertiesAcceptUndefined<T>

export function mergeClass(baseClass: string, props: { class?: string | undefined }): string {
  if (props.class === undefined) return baseClass
  return `${baseClass} ${props.class}`
}
