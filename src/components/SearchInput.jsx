import React from "react";

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="mt-6">
      <input
        type="text"
        placeholder="Pesquise por Nome, Tipo, Vendedor ou Servidor"
        value={value}
        onChange={onChange}
        className="px-4 py-2 border rounded-lg w-full"
      />
    </div>
  );
};

export default SearchInput;
