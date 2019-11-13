'use strict'

class SessionController {
  async store ({ request, auth }) {
    console.log('Entrou no Sessions')
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)
    return token
  }
}

module.exports = SessionController
