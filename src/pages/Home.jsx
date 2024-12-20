import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate do React Router

function Home() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Instancia o hook navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redireciona para a página de cadastro e envia o email como parâmetro de URL
    navigate(`/cadastro?email=${encodeURIComponent(email)}`);
  };

  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: 'url("src/assets/images/fundo_wow.png")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 container mx-auto p-4 flex flex-col items-center justify-center min-h-screen text-center text-white">
        <h1 className="text-4xl font-extrabold mb-3 opacity-90 transition-opacity duration-1000 ease-in-out">
          A Melhor Casa de Leilões de Itens Reais de World of Warcraft!
        </h1>

        <p className="text-xl mb-4 opacity-90 transition-opacity duration-1000 ease-in-out">
          Tempo é dinheiro, use seu tempo com o que realmente é necessário! Junte-se a nós.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex justify-center w-full max-w-md mb-8 transition-opacity duration-1000 ease-in-out opacity-90"
        >
          <input
            type="email"
            id="email"
            value={email} // Preenche o e-mail automaticamente com o valor do estado
            onChange={(e) => setEmail(e.target.value)} // Permite editar o e-mail
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            placeholder="Seu e-mail"
            required
          />
          <button
            type="submit"
            className="p-3 bg-blue-600  rounded-r-md hover:bg-blue-700 transition"
          >
            Junte-se a Nós!
          </button>
        </form>
      </div>

      {/* Seção 1: Diminuição do Tempo de Farm */}
      <div className="flex flex-col lg:flex-row items-center justify-between py-13 bg-gray-900 text-white opacity-90 transition-opacity duration-1000 ease-in-out">
        <div className="lg:w-1/2 text-center lg:text-left p-6 lg:pl-16">
          <h2 className="text-6xl font-semibold mb-4">Diminuição do Tempo de Farm</h2>
          <p className="text-2xl font-semibold mb-4">
            Economize seu tempo valioso ao adquirir itens desejados diretamente, sem
            precisar passar horas farmando. Com a Real Action House, você pode focar
            no que realmente importa: aproveitar o jogo.
          </p>
        </div>
        <div className="lg:w-1/3 lg:mr-16 mt-6 lg:mt-0">
          <img
            src="src/assets/images/time-is-money.png"
            alt="Diminuição do Tempo de Farm"
            className="h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
      </div>

      {/* Seção 2: Preços Acessíveis */}
      <div className="flex flex-col lg:flex-row items-center justify-center py-12 bg-gray-100 text-black opacity-90 transition-opacity duration-1000 ease-in-out">
        <div className="lg:w-1/2 text-center lg:text-left p-6">
          <h2 className="text-6xl font-semibold mb-4 text-center">Preços Acessíveis</h2>
          <div className="flex justify-center mb-6">
            <img
              src="src/assets/images/corrida_ouro.png"
              alt="Segurança na Compra"
              className="max-w-full lg:max-w-4xl rounded-lg transition-transform transform hover:scale-110"
            />
          </div>
          <p className="text-3xl font-semibold mt-6">
            Oferecemos preços competitivos para garantir que você obtenha o melhor valor pelo
            seu dinheiro. Com diversas opções e promoções, você encontrará o que procura a
            preços que se encaixam no seu orçamento.
          </p>
        </div>
      </div>

      {/* Seção 3: Segurança na Compra */}
      <div className="flex flex-col lg:flex-row items-center justify-center py-12 bg-gray-900 text-white opacity-90 transition-opacity duration-1000 ease-in-out">
        <div className="lg:w-1/2">
          <img
            src="src/assets/images/goblin-gordo.png"
            alt="Segurança na Compra"
            className="h-auto rounded-lg shadow-lg transition-transform transform hover:scale-110"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left p-6">
          <h2 className="text-6xl font-semibold mb-4">Segurança na Compra</h2>
          <p className="text-3xl font-semibold mb-4">
            Na Real Action House, a segurança das suas transações é nossa prioridade.
            Implementamos medidas rigorosas para proteger suas informações e garantir uma
            experiência de compra segura e confiável.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Real Action House. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
