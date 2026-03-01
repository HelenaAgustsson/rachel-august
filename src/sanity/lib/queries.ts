import {defineQuery} from 'next-sanity'

export const ACTING_QUERY = defineQuery(`*[_type == "credit" && acting==true]{
  title,
  format,
  role,
  date,
  thumbnail
}`)

export const VOICEOVER_QUERY = defineQuery(`*[_type == "credit" && voiceover==true]{
  title,
  format,
  role,
  date,
  thumbnail
}`)

export const PROFILE_QUERY = defineQuery(`*[_type == "summary" && description=="Profile"][0]{
  title,
  description,
  body
}`)

export const PAGE_QUERY =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  ...,
  content[]{
    ...,
  }
}`);