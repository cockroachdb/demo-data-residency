import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import TwitterProvider from 'next-auth/providers/twitter'

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
      version: '2.0'
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
          id: token.sub,
          user_name: token.login || token.data.username,
          provider: token.plan ? 'GitHub' : 'Twitter'
        }
      }
    }
  }
}

export default (req, res) => {
  req.headers['x-forwarded-host'] = process.env.NEXTAUTH_URL
  return NextAuth(req, res, authOptions)
}
