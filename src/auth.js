import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/mongoose";
import { doDoctorLogin, doPatientLogin } from "./app/actions";
import { authConfig } from "./auth.config";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone", type: "text" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" }, // patient or doctor
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const { phone, password, role } = credentials;

        await dbConnect();

        try {
          if (role === "patient") {
            const user = await doPatientLogin(
              new Map(Object.entries({ phone, password }))
            );
            return user;
          }
          if (role === "doctor") {
            const user = await doDoctorLogin(
              new Map(Object.entries({ phone, password }))
            );
            return user;
          }
        } catch (error) {
          console.error("Login error:", error);
          return null;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.phone = user.phone;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.phone = token.phone;
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.AUTH_SECRET,
});
