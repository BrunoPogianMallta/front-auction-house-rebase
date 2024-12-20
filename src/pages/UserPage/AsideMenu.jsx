// src/pages/UserPage/AsideMenu.jsx
import React, { useEffect } from 'react';

const AsideMenu = ({ isMenuOpen, toggleMenu }) => {
  // Função para fechar o menu ao pressionar "Esc"
  const handleEscKey = (event) => {
    if (event.key === 'Escape') {
      toggleMenu();
    }
  };

  // Adiciona o event listener para a tecla "Esc" quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      window.addEventListener('keydown', handleEscKey);
    } else {
      window.removeEventListener('keydown', handleEscKey);
    }

    // Limpeza do event listener
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-10 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Menu com botão de fechar (X) dentro do menu */}
      <div className="flex flex-col py-6 relative">
        <button
          className="text-white text-2xl hover:text-gray-400 absolute top-4 right-4"
          onClick={toggleMenu}
        >
          X
        </button>

        <ul className="space-y-6 text-gray-100 px-4">
          <li>
            <a href="/" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="/profile" className="hover:text-gray-400">Profile</a>
          </li>
          <li>
            <a href="/settings" className="hover:text-gray-400">Settings</a>
          </li>
          <li>
            <a href="/logout" className="hover:text-gray-400">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AsideMenu;
