import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

/* You shouldn't export authOptions in API route.ts / route.js file.
 This is the cause of error!! */

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
    ],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}
