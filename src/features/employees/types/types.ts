export type Shift = "A" | "B"

export type Employee = {
  id: number
  firstName: string
  lastName: string
  email: string
  avatarUrl: string
  shift: Shift
  employmentDate: string
  billingDate: string
}

export type RawUser = {
  id: number
  firstName: string
  lastName: string
  email: string
  image: string
  birthDate: string
  bloodGroup: string
}

export type UsersJson = {
  users: RawUser[]
}
