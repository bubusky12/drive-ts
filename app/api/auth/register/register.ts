import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Sesuaikan path prisma Anda
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();
    console.log("Data yang diterima:", { email, password, name });  // Cek apakah data diterima dengan benar

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Email, password, dan nama harus diisi" },
        { status: 400 }
      );
    }

    // Cek apakah email sudah terdaftar
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email sudah terdaftar" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru ke database
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    // Cek jika user berhasil dibuat
    console.log("User berhasil dibuat:", user);

    return NextResponse.json(
      { message: "User berhasil dibuat", user: { id: user.id, email: user.email, name: user.name } },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registrasi:", error);  // Log kesalahan untuk debugging
    return NextResponse.json({ error: "Terjadi kesalahan pada server" }, { status: 500 });
  }
}
