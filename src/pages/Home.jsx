import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Beneficios from '../components/Beneficios';
import Servicios from '../components/Servicios';
import Contacto from '../components/Contacto';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Beneficios />
      <Servicios />
      <Contacto />
      <FloatingWhatsApp />
    </>
  );
}