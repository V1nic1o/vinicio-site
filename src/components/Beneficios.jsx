import React from 'react';
import { CheckCircle, Timer, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const beneficios = [
  {
    icono: <CheckCircle size={48} />,
    titulo: 'Automatiza tus tareas',
    descripcion: 'Deja que el sistema trabaje por ti. Elimina procesos repetitivos y gana tiempo.',
  },
  {
    icono: <Timer size={48} />,
    titulo: 'Ahorra tiempo',
    descripcion: 'Organiza mejor tus procesos y realiza más con menos esfuerzo.',
  },
  {
    icono: <TrendingUp size={48} />,
    titulo: 'Haz crecer tu negocio',
    descripcion: 'Digitaliza lo que haces y amplía tu alcance con herramientas que venden por ti.',
  },
];

export default function Beneficios() {
  return (
    <section className="bg-white py-20 px-6 text-center text-gray-900">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">¿Por qué trabajar conmigo?</h2>
        <p className="text-gray-600 mb-10 text-base">
          Te ofrezco resultados reales: más tiempo, menos estrés y un negocio más eficiente.
        </p>

        <div className="flex flex-col gap-8">
          {beneficios.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-indigo-100 transition"
            >
              <div className="text-indigo-600 mb-3">{item.icono}</div>
              <h3 className="text-lg font-semibold mb-1">{item.titulo}</h3>
              <p className="text-gray-700 text-sm">{item.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}