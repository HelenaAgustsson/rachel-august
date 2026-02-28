import { type SchemaTypeDefinition } from 'sanity'
import { creditType } from './creditType'
import { summaryType } from './summaryType'
import { pageBuilderType } from './pageBuilderType'
import { pageType } from './pageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [creditType, summaryType, pageBuilderType, pageType],
}
