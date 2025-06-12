import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 bg-gradient-to-b from-indigo-950 to-gray-900 text-white px-6 flex items-center">
      <motion.div
        className="w-full max-w-md mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold leading-tight mb-4">
          Hola, soy Vinicio Valdez y <span className="text-indigo-400">puedo ayudarte a impulsar tu negocio</span>
        </h1>
        <p className="text-base text-gray-300 mb-8">
          Creo sitios web y sistemas sencillos de usar, que automatizan procesos y ahorran tiempo. Tú solo cuéntame tu idea, y la convertimos en realidad.
        </p>

        {/* CTA grande */}
        <a
          href="#servicios"
          className="inline-block w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition mb-10"
        >
          Quiero soluciones digitales
        </a>

        {/* En lugar de estadísticas, algo más emocional */}
        <div className="bg-indigo-600 px-6 py-4 rounded-xl text-white shadow-lg">
          <p className="text-base font-semibold">Comprometido con crear soluciones que sí ayudan</p>
          <p className="text-sm text-white/80">Estoy listo para escuchar tu idea y hacerla posible</p>
        </div>
      </motion.div>
    </section>
  );
}