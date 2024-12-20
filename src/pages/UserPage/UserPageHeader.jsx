import React from "react";

const UserPageHeader = ({ toggleMenu }) => {
  return (
    <header className="bg-gray-600 text-white p-4 flex justify-between items-center">
      {/* Botão Hamburguer à esquerda */}
      <button
        className="text-gray-300 hover:text-gray-100 focus:outline-none"
        onClick={toggleMenu}
      >
        {/* Ícone do menu hambúrguer */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Título à direita */}
      <h1 className="text-xl font-bold">Painel do Usuário</h1>
    </header>
  );
};

export default UserPageHeader;
