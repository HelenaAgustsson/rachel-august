import { type SchemaTypeDefinition } from 'sanity'
import { creditType } from './creditType'
import { textblockType } from './textblockType'
import { profileType } from './profileType'
import { pageBuilderType } from './pageBuilderType'
import { pageType } from './pageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [creditType, textblockType, profileType, pageBuilderType, pageType],
}
