import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-indigo-600">VinicioDev</a>
        <div className="space-x-6 hidden md:block">
          <a href="#hero" className="text-gray-700 hover:text-indigo-600 transition">Inicio</a>
          <a href="#servicios" className="text-gray-700 hover:text-indigo-600 transition">Servicios</a>
          <a href="#contacto" className="text-gray-700 hover:text-indigo-600 transition">Contacto</a>
        </div>
      </nav>
    </header>
  );
}