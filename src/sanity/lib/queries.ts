import {defineQuery} from 'next-sanity'

export const CREDITS_QUERY = defineQuery(`*[_type == "credit"]{
  title,
  role,
  date
}`)

export const PROFILE_QUERY = defineQuery(`*[_type == "summary" && description=="Profile"][0]{
  title,
  description,
  body
}`)