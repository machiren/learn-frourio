import { IsEmail, MaxLength, MinLength } from 'class-validator'

export class SignUpBody {
  @IsEmail()
  email: string

  @MinLength(6)
  @MaxLength(24)
  password: string
}
