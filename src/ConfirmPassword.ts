import { AuthContract } from '@ioc:Adonis/Addons/Auth'
import { SessionContract } from '@ioc:Adonis/Addons/Session'
import { DateTime } from 'luxon'

export class ConfirmPassword {
  public async confirm(
    auth: AuthContract,
    email: string,
    password: string,
    session: SessionContract
  ) {
    await auth.verifyCredentials(email, password)
    session.put('password_confirm_at', DateTime.now().toSeconds())
  }
}
