import { Footer } from "../Footer";
import { Search } from "../Search";
import { Container, CloseButton, MenuItem, Menu } from "./styles";

import { X } from "@phosphor-icons/react";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  return (
    <Container isOpen={menuIsOpen}>
      <header>
        <CloseButton onClick={onCloseMenu}><X size={18} /> Menu</CloseButton>
      </header>
      <section>
        <Search />
        <Menu>
          <MenuItem>Sair</MenuItem>
          <MenuItem>Novo Prato</MenuItem>
        </Menu>
      </section>
      <Footer />
    </Container>
  );
}
