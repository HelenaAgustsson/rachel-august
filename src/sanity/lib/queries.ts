import {defineQuery} from 'next-sanity'

export const CREDITS_QUERY = defineQuery(`*[_type == "credit"]{
  title,
}`)