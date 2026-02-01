import {defineQuery} from 'next-sanity'

export const CREDITS_QUERY = defineQuery(`*[_type == "credit"]{
  title,
  role,
  date
}`)

export const INFO_QUERY = defineQuery(`*[_type == "info"]{
  title,
  blurb
}`)