/*
 * InkMatch - Conectando Arte e Pele
 * Desenvolvido por xjhowx (https://github.com/xjhowx)
 */

import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';

interface HomeProps {
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const Home: React.FC<HomeProps> = ({ features }) => {
  return (
    <>
      <Hero />
      <Features features={features} />
    </>
  );
};

export default Home;