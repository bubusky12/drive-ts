// pages/index.js

import React from 'react';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-xl font-bold text-blue-500">Indranug Drive</div>
          <ul className="flex space-x-6 text-gray-700">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Selamat datang di indranug drive</h1>
        <p className="text-lg mb-6">Solusi penyimpanan murah untuk kalian kontol</p>
        <Link href="/login">
          <button className="bg-white text-blue-500 px-6 py-2 rounded shadow-md hover:bg-gray-200">Daftar Segera</button>
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-500">Tentang Kami</h2>
        <p className="text-gray-700">Kami akan memberikan kualitas yang terbaik untuk client kami anjay.</p>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-10 text-blue-700">Plan Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded p-6 text-center">
              <img 
                src="http://agtest.agakcw.my.id/gdrive.png" 
                alt="Drive Service"   
                className="mx-auto mb-4 w-20 h-20"
              />
              <h4 className="text-lg font-bold mb-2 text-red-400">10 GB</h4>
              <p className="text-red-400">Simpan dan akses file Anda dari mana saja dengan aman.</p>
            </div>
            <div className="bg-white shadow rounded p-6 text-center">
            <img 
                src="http://agtest.agakcw.my.id/gdrive.png" 
                alt="Drive Service"   
                className="mx-auto mb-4 w-20 h-20"
              />
              <h4 className="text-lg font-bold mb-2 text-red-400">100 GB</h4>
              <p className="text-red-400">Simpan dan akses file Anda dari mana saja dengan aman.</p>
            </div>
            <div className="bg-white shadow rounded p-6 text-center">
            <img 
                src="http://agtest.agakcw.my.id/gdrive.png" 
                alt="Drive Service"   
                className="mx-auto mb-4 w-20 h-20"
              />
              <h4 className="text-lg font-bold mb-2 text-red-400">1000 GB</h4>
              <p className="text-red-400">Simpan dan akses file Anda dari mana saja dengan aman.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700">Feel free to reach out to us for any queries.</p>
        <form className="mt-6 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 border rounded"></textarea>
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Send</button>
        </form>
      </section>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 IndranugDrive. All rights reserved.</p>
      </footer>
    </div>
  );
}
