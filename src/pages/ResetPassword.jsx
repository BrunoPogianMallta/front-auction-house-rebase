import React, { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o e-mail de redefinição de senha
    // Exemplo com fetch:
    fetch('/api/v1/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Link de redefinição de senha enviado!');
        } else {
          alert('Erro ao enviar link de redefinição.');
        }
      })
      .catch((error) => {
        console.error('Erro ao enviar e-mail:', error);
        alert('Ocorreu um erro. Tente novamente.');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        
        <div className="text-center mb-8">
          <img
            src="src/assets/images/goblin_avatar.png" 
            alt="Logo"
            className="mx-auto h-16"
          />
        </div>

     
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Redefinir sua senha
        </h2>
      
        <p className="text-center text-sm text-gray-600 mb-6">
          Digite o endereço de e-mail verificado da sua conta e enviaremos um link para redefinir sua senha.
        </p>

       
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Endereço de e-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Digite seu e-mail"
              required
            />
          </div>

         
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
            >
              Enviar link de redefinição
            </button>
          </div>
        </form>

        
        <div className="mt-6 border-t pt-4">
          <p className="text-center text-sm text-gray-700 mt-2">
            Lembrou a senha?{' '}
            <a
              href="/login"
              className="text-blue-600 hover:underline font-semibold"
            >
              Faça login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
