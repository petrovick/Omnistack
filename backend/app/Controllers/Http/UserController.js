'use strict'
const User = use('App/Models/User')
const Invite = use('App/Models/Invite')

class UserController {
  async store ({ request, response, auth }) {
    const data = request.only(['name', 'email', 'password'])

    // Monta a query
    const teamsQuery = Invite.query().where('email', data.email)

    // pluck = transforma em array [3, 4, 5, 6, 7]
    const teams = await teamsQuery.pluck('team_id')

    if (teams.length === 0) {
      return response
        .status(401)
        .send({ message: "You're not invited to any team." })
    }

    const user = await User.create(data)
    await user.teams().attach(teams)
    await teamsQuery.delete()

    const token = await auth.attempt(data.email, data.password)
    return token
  }
}

module.exports = UserController
