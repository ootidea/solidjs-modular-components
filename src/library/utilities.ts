export function mergeClass(baseClass: string, props: { class?: string | undefined }): string {
  if (props.class === undefined) return baseClass
  return `${baseClass} ${props.class}`
}
