import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ]
}

export default (req, res) => {
  req.headers['x-forwarded-host'] = process.env.NEXTAUTH_URL
  return NextAuth(req, res, authOptions) // eslint-disable-line new-cap
}
