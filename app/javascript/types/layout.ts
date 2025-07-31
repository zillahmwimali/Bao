import type { ComponentType } from 'react'

export type PageComponent = ComponentType<any> & {
  layout?: ComponentType<any>
}

// Define the type for a page module
type PageModule = {
  default: PageComponent
}

// Define the type for pages object
export type Pages = Record<string, () => Promise<PageModule>>
