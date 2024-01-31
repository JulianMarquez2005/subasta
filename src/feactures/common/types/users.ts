import { Roles } from '@/feactures/common/const'
import { AuthUserSchema, UserSchema } from '@/feactures/common/schema/userSchema'
import { z } from 'zod'

export type RoleValues = (typeof Roles)[keyof typeof Roles]

export type User = z.infer<typeof UserSchema>
export type AuthUser = z.infer<typeof AuthUserSchema>

export interface AuthValues {
  username: string
  password: string
}
