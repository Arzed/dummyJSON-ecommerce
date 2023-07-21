import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/auth/signin"
  }
});

export { handler as GET, handler as POST };
