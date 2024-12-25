import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma"; // Sesuaikan dengan path prisma Anda
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Kredensial tidak valid");
        }

        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Email dan password harus diisi");
        }

        // Cari user berdasarkan email
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          throw new Error("Email tidak ditemukan");
        }

        // Verifikasi password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          throw new Error("Password salah");
        }

        // Return user data dengan `id` sebagai string
        return {
          id: user.id.toString(), // Konversi `id` menjadi string
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Pastikan `id` sudah berupa string
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string, // Tipe data `id` sebagai string
          email: token.email as string,
          name: token.name as string,
        };
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET, // Pastikan variable ini terdefinisi di file .env
  pages: {
    signIn: "/login", // Halaman custom login jika ada
  },
});

export { handler as GET, handler as POST };
