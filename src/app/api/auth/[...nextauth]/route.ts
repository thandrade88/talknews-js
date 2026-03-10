import NextAuth, { AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { compare } from "bcrypt";
import { findUserByEmail } from "@/lib/db/mock-users";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: {label: "Email", type: "email"},
            password: {label: "Password", type: "password"},
          },
          async authorize(credentials: any) {
           if(!credentials?.email || !credentials?.password) return null;

           const user = await findUserByEmail(credentials.email);

           if(!user) return null;

           const isValidPassword = credentials.password === user.password;

           if(!isValidPassword) return null;

           return {
            id: user.id,
            email: user.email,
            role: user.role,
           }           
          }           
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            if(user) {
                token.id = user.id;
                token.role = (user as any).role;
            }
            return token;
        },
        async session({ session, token }) {
            (session.user as any).role = token.role;
            return session;
        }
    },
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    }    
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };