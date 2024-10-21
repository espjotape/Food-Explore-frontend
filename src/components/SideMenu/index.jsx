import { Footer } from "../Footer";
import { Search } from "../Search";
import { Container, CloseButton, MenuItem, Menu } from "./styles";

import { X } from "@phosphor-icons/react";

import { useAuth } from "../../hooks/auth"

export function SideMenu({ menuIsOpen, onCloseMenu, isAdmin }) {
  return (
    <Container isOpen={menuIsOpen}>
      <header>
        <CloseButton onClick={onCloseMenu}><X size={18} /> Menu</CloseButton>
      </header>
      <section>
        <Search />
        <Menu>
          {isAdmin && <MenuItem>Novo Prato</MenuItem>}
          <MenuItem>Sair</MenuItem>
        </Menu>
      </section>
      <Footer />
    </Container>
  );
}
