import {defineQuery} from 'next-sanity'

export const CREDITS_QUERY = defineQuery(`*[_type == "credit"]{
  title,
  acting,
  voiceover,
  format,
  role,
  date,
  thumbnail
}`)

export const ACTING_QUERY = defineQuery(`*[_type == "credit" && acting==true]{
  title,
  type,
  role,
  date,
  thumbnail
}`)

export const VOICEOVER_QUERY = defineQuery(`*[_type == "credit" && voiceover==true]{
  title,
  type,
  role,
  date,
  thumbnail
}`)

export const PROFILE_QUERY = defineQuery(`*[_type == "summary" && description=="Profile"][0]{
  title,
  description,
  body
}`)