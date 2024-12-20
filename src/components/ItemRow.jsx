import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ItemDetails from "./ItemDetails";

const ItemRow = ({ item, expandedRow, setExpandedRow, isMobile }) => {
  const toggleRowExpansion = () => {
    setExpandedRow(expandedRow === item.id ? null : item.id);
  };

  return (
    <>
      <tr
        onClick={toggleRowExpansion}
        className={`cursor-pointer text-center hover:bg-gray-50 ${expandedRow === item.id ? "bg-blue-100" : ""}`}
      >
        <td className="p-3 border-b">{item.nomeItem}</td>
        <td className="p-3 border-b">{isMobile ? item.tempoLeilao.split("h")[0] + "h" : item.tempoLeilao}</td>
        <td className="p-3 border-b">{item.vendedor}</td>
        <td className="p-3 border-b">{item.preco}</td>
        <td className="p-3 border-b">
          <div className="flex justify-center items-center space-x-2">
            {expandedRow === item.id ? (
              <FaEyeSlash className="text-gray-600" />
            ) : (
              <FaEye className="text-gray-600" />
            )}
          </div>
        </td>
      </tr>

      {expandedRow === item.id && <ItemDetails item={item} />}
    </>
  );
};

export default ItemRow;
