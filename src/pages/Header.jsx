import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/rah-logo.png";

function Header() {
  const buttons = [
    { label: "Cadastro", path: "/cadastro" },
    { label: "Login", path: "/login", additionalStyles: "hidden lg:block" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full py-4 px-6 bg-gray-200 flex justify-between items-center z-50 shadow-md transition-shadow duration-300">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo da Real Action House" className="h-16" />
        </Link>
      </div>

      {/* Botões */}
      <div className="flex space-x-6">
        {buttons.map((button, index) => (
          <Link
            key={index}
            to={button.path}
            className={`text-gray-800 hover:text-gray-600 font-medium text-sm md:text-base transition duration-300 ease-in-out ${button.additionalStyles || ""}`}
            aria-label={`Botão de ${button.label}`}
          >
            {button.label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
