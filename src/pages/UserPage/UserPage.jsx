import React, { useState, useEffect } from "react";
import UserPageHeader from "./UserPageHeader";
import AsideMenu from "./AsideMenu";
import SearchInput from "../../components/SearchInput";
import ItemTable from "../../components/ItemTable";

// Dados mock, podem ser substituídos por uma API
import { MockData } from "../../mock/MockData";

const UserPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [items, setItems] = useState(MockData);
  const [expandedRow, setExpandedRow] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);

    window.addEventListener("resize", handleResize);
    handleResize(); // Checa a largura da tela ao carregar o componente

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredItems = items.filter((item) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return (
      item.nomeItem.toLowerCase().includes(lowercasedSearchTerm) ||
      item.tipo.toLowerCase().includes(lowercasedSearchTerm) ||
      item.vendedor.toLowerCase().includes(lowercasedSearchTerm) ||
      item.servidor.toLowerCase().includes(lowercasedSearchTerm)
    );
  });

  return (
    <div className="min-h-screen flex flex-col">
      <UserPageHeader toggleMenu={toggleMenu} />
      <AsideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <main
        className={`flex-1 p-8 transition-all duration-300 ${isMenuOpen ? "ml-64" : "ml-0"}`}
      >
        <h1 className="text-2xl font-bold text-center">Itens à Venda</h1>
        <p className="mt-4 text-center">Aqui você pode gerenciar os itens que está vendendo no leilão.</p>

        <SearchInput value={searchTerm} onChange={handleSearchChange} />

        <ItemTable
          items={filteredItems}
          expandedRow={expandedRow}
          setExpandedRow={setExpandedRow}
          isMobile={isMobile}
        />
      </main>
    </div>
  );
};

export default UserPage;
