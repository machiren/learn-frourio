export interface GoogleOAuth2Response {
  access_token: string
  expires_in: number
  scope: string
  token_type: string
  id_token: string
}

export interface Id_Token_Decode_Content {
  iss: string
  azp: string
  aud: string
  sub: string
  email: string
  email_verified: boolean
  at_hash: string
  name: string
  picture: string
  given_name: string
  family_name: string
  locale: string
  iat: string
  exp: string
}
