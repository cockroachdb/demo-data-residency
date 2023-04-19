import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import LinkedInProvider from 'next-auth/providers/linkedin'

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_ID,
      clientSecret: process.env.LINKEDIN_SECRET
    })
  ],
  callbacks: {
    async jwt({ token, profile }) {
      return { ...token, ...profile }
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          admin: process.env.ADMINS.split(',').some((email) => email === session.user.email),
          id: token.sub,
          provider: token.plan ? 'GitHub' : 'LinkedIn'
        }
      }
    }
  }
}

export default (req, res) => {
  req.headers['x-forwarded-host'] = process.env.NEXTAUTH_URL
  return NextAuth(req, res, authOptions)
}
