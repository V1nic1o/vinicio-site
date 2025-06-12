import React from 'react';
import { Code, Smartphone, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const servicios = [
  {
    icon: <Code size={48} />,
    titulo: 'Desarrollo Web',
    descripcion: 'Tu sitio web hecho a la medida, funcional, moderno y listo para convertir visitas en clientes.',
  },
  {
    icon: <Smartphone size={48} />,
    titulo: 'Apps Móviles',
    descripcion: 'Aplicaciones intuitivas y prácticas para que tus usuarios te lleven en el bolsillo.',
  },
  {
    icon: <Database size={48} />,
    titulo: 'Sistemas a Medida',
    descripcion: 'Digitaliza tus procesos con sistemas inteligentes diseñados solo para tu negocio.',
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-gray-50 text-gray-900 py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Lo que puedo hacer por ti</h2>
        <p className="text-gray-600 mb-10 text-base">
          No necesitas saber de tecnología. Yo traduzco tus ideas en soluciones que funcionan.
        </p>

        <div className="flex flex-col gap-8">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-indigo-100 transition text-left"
            >
              <div className="text-indigo-600 mb-3">{servicio.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{servicio.titulo}</h3>
              <p className="text-gray-700 text-sm">{servicio.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}