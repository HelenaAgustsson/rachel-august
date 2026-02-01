import { type SchemaTypeDefinition } from 'sanity'
import { creditType } from './creditType'
import { summaryType } from './summaryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [creditType, summaryType],
}
