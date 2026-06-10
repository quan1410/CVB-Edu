import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mật khẩu", type: "password" },
      },
      async authorize(credentials) {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
          throw new Error("Thiếu ADMIN_EMAIL hoặc ADMIN_PASSWORD trong biến môi trường");
        }

        if (
          credentials?.email === adminEmail &&
          credentials?.password === adminPassword
        ) {
          return {
            id: "admin",
            email: adminEmail,
            name: process.env.ADMIN_NAME ?? "CVB EDU Admin",
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name ?? session.user.name;
        session.user.email = token.email ?? session.user.email;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
