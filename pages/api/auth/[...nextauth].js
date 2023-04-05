import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {
    async jwt({ token, profile }) {
      return { ...token, ...profile }
    },
    async session({ session, token }) {
      return { ...session, user: { ...session.user, id: token.sub, user_name: token.login } }
    }
  }
}

export default (req, res) => {
  req.headers['x-forwarded-host'] = process.env.NEXTAUTH_URL
  return NextAuth(req, res, authOptions)
}
