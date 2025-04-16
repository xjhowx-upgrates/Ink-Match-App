/*
 * InkMatch - Conectando Arte e Pele
 * Desenvolvido por xjhowx (https://github.com/xjhowx)
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, MessageSquare, Shield, Map, Star } from 'lucide-react';

const Client = () => {
  const benefits = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Busca Inteligente",
      description: "Encontre o artista perfeito para seu estilo"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Inspiração",
      description: "Explore milhares de designs e estilos"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Chat Direto",
      description: "Converse com artistas e tire suas dúvidas"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança",
      description: "Artistas verificados e avaliados pela comunidade"
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Localização",
      description: "Encontre tatuadores próximos a você"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Avaliações",
      description: "Feedback real de outros clientes"
    }
  ];

  const featuredArtists = [
    {
      name: "Ana Silva",
      style: "Realismo",
      image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Pedro Santos",
      style: "Old School",
      image: "https://images.unsplash.com/photo-1598371839765-c53ff835b8c7?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Maria Costa",
      style: "Minimalista",
      image: "https://images.unsplash.com/photo-1598371839726-5e2b08e8d159?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598371839726-5e2b08e8d159?auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-10 dark:opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Encontre o Artista</span>
              <span className="block text-purple-600">Perfeito para Você</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-600 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Descubra talentos incríveis, inspire-se com diferentes estilos e realize 
              o sonho da sua tatuagem com segurança e confiança.
            </p>
          </motion.div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    {benefit.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Artistas em Destaque
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredArtists.map((artist, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <img src={artist.image} alt={artist.name} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-semibold">{artist.name}</h3>
                    <p className="text-sm opacity-90">{artist.style}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 text-center"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              Encontrar Artista
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Client;