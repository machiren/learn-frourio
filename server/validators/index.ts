import { MinLength, IsEmail, MaxLength } from 'class-validator'

export class LoginBody {
  @MinLength(2)
  id: string

  @MinLength(4)
  pass: string
}

export class SignUpBody {
  @IsEmail()
  email: string

  @MinLength(6)
  @MaxLength(24)
  password: string
}
