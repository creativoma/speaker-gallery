export interface TeamMember {
  id: string
  name: string
  role: string
  image?: string
  socialLinks?: {
    twitter?: string
    linkedin?: string
  }
}
