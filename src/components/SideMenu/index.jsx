import { Footer } from "../Footer";
import { Search } from "../Search";
import { Container, CloseButton, MenuItem, Menu } from "./styles";

import { X } from "@phosphor-icons/react";

import { useAuth } from "../../hooks/auth"
import { useNavigate } from 'react-router-dom'

export function SideMenu({ menuIsOpen, onCloseMenu, isAdmin }) {
const navigate = useNavigate()

const handleFavorites = () => {
  onCloseMenu(); // Fecha o menu lateral
  navigate('/favorites'); // Navega para a página de favoritos
};
  
  return (
    <Container isOpen={menuIsOpen}>
      <header>
        <CloseButton onClick={onCloseMenu}><X size={18} /> Menu</CloseButton>
      </header>
      <section>
        <Search />
        <Menu>
          {isAdmin && <MenuItem>Novo Prato</MenuItem>}
          <MenuItem onClick={handleFavorites}>Meus Favoritos</MenuItem>
          <MenuItem>Sair</MenuItem>
        </Menu>
      </section>
      <Footer />
    </Container>
  );
}
