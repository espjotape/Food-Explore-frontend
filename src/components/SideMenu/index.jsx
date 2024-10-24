import { Footer } from "../Footer";
import { Search } from "../Search";
import { Container, CloseButton, MenuItem, Menu } from "./styles";

import { X } from "@phosphor-icons/react";

import { useNavigate } from 'react-router-dom'


export function SideMenu({ menuIsOpen, onCloseMenu, isAdmin }) {
const navigate = useNavigate()

const handleGoToFavorites = () => {
  navigate('/favorites'); 
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
          <MenuItem onClick={handleGoToFavorites}>Meus Favoritos</MenuItem>
          <MenuItem>Sair</MenuItem>
        </Menu>
      </section>
      <Footer />
    </Container>
  );
}
