import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
   
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      
        <div className="text-center mb-8">
            <Link to={'/'}>
            <img
                src="src/assets/images/time-is-money.png" 
                alt="Logo"
                className="mx-auto h-21"
            />
            </Link>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Entrar no Leilão
        </h2>

        <form className="space-y-4">
         
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-700"
            >
              Endereço de e-mail
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Digite seu  e-mail"
            />
          </div>

         
          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700"
              >
                Senha
              </label>
              <a
                href="/reset-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Esqueceu a senha?
              </a>
            </div>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Digite sua senha"
            />
          </div>

          
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
            >
              Entrar
            </button>
          </div>
        </form>

        
        <div className="mt-6 border-t pt-4">
          
          <p className="text-center text-sm text-gray-700 mt-2">
            Novo na Auction House?{' '}
            <a
              href="/cadastro"
              className="text-blue-600 hover:underline font-semibold"
            >
              Crie uma conta
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
