import { Footer } from "../Footer";
import { Search } from "../Search";
import { Container, CloseButton, MenuItem, Menu } from "./styles";

import { X } from "@phosphor-icons/react";

import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../hooks/auth"

export function SideMenu({ menuIsOpen, onCloseMenu, isAdmin }) {
const { signOut, user } = useAuth()
const navigate = useNavigate()

function handleSignOut(){
  navigate("/")
  signOut()
}

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
          <MenuItem onClick={handleSignOut}>Sair</MenuItem>
        </Menu>
      </section>
      <Footer />
    </Container>
  );
}
