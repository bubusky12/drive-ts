import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10); // Ganti dengan password yang aman

  // Membuat user baru
  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      password: hashedPassword,
      name: 'John Doe',
    },
  });

  console.log('User berhasil dibuat:', user);
}

// Menjalankan fungsi main dan menutup koneksi prisma
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
