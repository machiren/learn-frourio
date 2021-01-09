export const Provider = {
  Email: 'email',
  Google: 'google'
} as const

type ProviderType = typeof Provider[keyof typeof Provider]

export type User = {
  id: number
  email: string
  password?: string
  name?: string
  pictureUrl?: string
  provider: ProviderType
  providerId?: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}
