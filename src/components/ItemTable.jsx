import React from "react";
import ItemRow from "./ItemRow";

const ItemTable = ({ items, expandedRow, setExpandedRow, isMobile }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full table-auto bg-gray-100 border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-700 border-b">
            <th className="p-3 text-center">Nome do Item</th>
            <th className="p-3 text-center">Tempo de Leilão</th>
            <th className="p-3 text-center">Vendedor</th>
            <th className="p-3 text-center">Preço</th>
            <th className="p-3 text-center">Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              expandedRow={expandedRow}
              setExpandedRow={setExpandedRow}
              isMobile={isMobile}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
