import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Cadastro = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");

  // Função que verifica o tamanho da tela
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1000);
  };

  // Hook para acessar os parâmetros da URL
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const emailParam = queryParams.get('email');
    if (emailParam) {
      setEmail(emailParam); // Preenche o campo de e-mail com o parâmetro da URL
    }

    handleResize(); // Verifica a largura da tela ao carregar a página
    window.addEventListener('resize', handleResize); // Adiciona o event listener

    // Remove o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div
        className="w-full lg:w-1/2 bg-cover bg-center p-8 flex justify-center relative transition-all duration-300"
        style={{
          backgroundImage: 'url(src/assets/images/fundo_wow.png)',
          height: isMobile ? '50vh' : '100vh',
        }}
      >
        {isMobile && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            <a href="/login" className="underline">Já tem conta? Logar-se</a>
          </div>
        )}

        <div className={`absolute ${isMobile ? 'top-8' : 'top-12'} w-full text-center text-white space-y-4`}>
          <h1 className={`font-extrabold leading-tight ${isMobile ? 'text-2xl' : 'text-5xl'}`}>Crie sua Conta Gratuíta</h1>
          <p className={`text-lg ${isMobile ? 'text-sm' : ''}`}>Explore as melhores ofertas dos melhores vendedores de Azeroth.</p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1/2">
          <img
            src="src/assets/images/corrida_ouro.png"
            alt="Imagem Corrida de Ouro"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-white p-8 lg:ml-16 rounded-lg shadow-lg flex items-center justify-center lg:relative z-10">
        {!isMobile && (
          <div className="absolute top-4 right-8 text-sm text-blue-600">
            <a href="/login" className="underline">Já tem conta? Logar-se</a>
          </div>
        )}

        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastre-se</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email} // Preenche o e-mail automaticamente com o valor do estado
                onChange={(e) => setEmail(e.target.value)} // Permite editar o e-mail
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Seu e-mail"
                required
              />
            </div>
            <div>
              <label htmlFor="senha" className="block text-sm font-semibold text-gray-700">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Crie uma senha"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmarSenha" className="block text-sm font-semibold text-gray-700">
                Confirmar Senha
              </label>
              <input
                type="password"
                id="confirmarSenha"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Confirme sua senha"
                required
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
                Nome de Usuário
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Escolha seu nome de usuário"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
              >
                Criar Conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
