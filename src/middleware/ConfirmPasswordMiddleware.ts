import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DateTime } from 'luxon'

export class ConfirmPasswordMiddleware {
  public async handle(
    { session, request, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    const confirmAt = session.get('password_confirm_at', 0)

    if (DateTime.now().toSeconds() - confirmAt > 60) {
      session.put('intended_url', request.url())

      return response.redirect('/confirm-password')
    }
    await next()
  }
}
