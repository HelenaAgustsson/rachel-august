import { type SchemaTypeDefinition } from 'sanity'
import { creditType } from './creditType'
import { infoType } from './infoType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [creditType, infoType],
}
