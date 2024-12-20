import React from "react";

const ItemDetails = ({ item }) => {
  return (
    <tr>
      <td colSpan="5" className="p-4 bg-gray-50">
        <div className="p-3 border border-gray-300 rounded-lg shadow-lg bg-white w-[16rem] mx-auto">
          <h3 className="font-semibold text-lg mb-3">Detalhes do Item</h3>
          <div className="grid grid-cols-2 gap-4">
            <p><strong>Nome do Item:</strong></p><p>{item.nomeItem}</p>
            <p><strong>Servidor:</strong></p><p>{item.servidor}</p>
            <p><strong>Tipo:</strong></p><p>{item.tipo}</p>
            <p><strong>Tempo de Leilão:</strong></p><p>{item.tempoLeilao}</p>
            <p><strong>Quantidade:</strong></p><p>{item.quantidade}</p>
            <p><strong>Vendedor:</strong></p><p>{item.vendedor}</p>
            <p><strong>Preço:</strong></p><p>{item.preco}</p>
          </div>
          <div className="flex justify-between mt-4">
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300">Dar Lance</button>
            <button className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300">Arrematar</button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ItemDetails;
