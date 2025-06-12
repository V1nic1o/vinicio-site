import React from 'react';

export default function Contacto() {
  return (
    <section id="contacto" className="bg-white py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Hablemos</h2>
        <p className="text-gray-600 mb-10 text-base">
          Cuéntame qué necesitas. Juntos podemos hacer que tu idea funcione de verdad.
        </p>

        <form
          action="https://formsubmit.co/desarrolloenproceso786@gmail.com"
          method="POST"
          className="bg-gray-50 rounded-xl shadow-lg p-6 space-y-5 text-left"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            rows="5"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}