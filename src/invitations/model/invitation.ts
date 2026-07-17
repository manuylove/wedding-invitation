export type Guest = {
  id: string
  firstName: string
  isAdult: boolean
}

export type Invitation = {
  slug: string
  greeting: string
  guests: Guest[]
}
