/*
 * InkMatch - Conectando Arte e Pele
 * Desenvolvido por xjhowx (https://github.com/xjhowx)
 */

import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Link } from 'react-router-dom';
import { Brush } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 transition-colors duration-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <Brush className="w-6 h-6 text-white" />
            </div>
            <span className="ml-2 text-2xl font-['Permanent_Marker'] text-gray-900 dark:text-white">InkMatch</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-4">
              <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Início</Link>
              <Link to="/artista" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Artistas</Link>
              <Link to="/cliente" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Clientes</Link>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                Criar Conta
              </button>
            </div>
            <DarkModeSwitch
              checked={darkMode}
              onChange={setDarkMode}
              size={24}
              sunColor="#FCD34D"
              moonColor="#F3F4F6"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;