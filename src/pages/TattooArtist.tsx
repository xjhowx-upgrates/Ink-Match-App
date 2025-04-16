/*
 * InkMatch - Conectando Arte e Pele
 * Desenvolvido por xjhowx (https://github.com/xjhowx)
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Calendar, MessageSquare, Trophy, Wallet, Users } from 'lucide-react';

const TattooArtist = () => {
  const benefits = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Portfólio Profissional",
      description: "Mostre seu trabalho com uma galeria moderna e responsiva"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Agenda Inteligente",
      description: "Gerencie seus horários e compromissos com facilidade"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Chat Integrado",
      description: "Comunicação direta e segura com seus clientes"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Destaque-se",
      description: "Ganhe visibilidade com nosso sistema de ranking"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Gestão Financeira",
      description: "Controle seus ganhos e agendamentos"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunidade",
      description: "Conecte-se com outros artistas e compartilhe experiências"
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598371839765-c53ff835b8c7?auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-10 dark:opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Transforme sua Arte</span>
              <span className="block text-purple-600">em Negócio</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-600 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Junte-se a uma comunidade de artistas talentosos e eleve sua carreira ao próximo nível. 
              Tenha todas as ferramentas necessárias para gerenciar seu trabalho em um só lugar.
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
              Comece Agora
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TattooArtist;