import { Footer } from "../Footer";
import { Container, CloseButton, SearchInput, MenuItem } from "./styles";

import { X } from "@phosphor-icons/react";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  return (
    <Container isOpen={menuIsOpen}>
      <header>
        <CloseButton onClick={onCloseMenu}><X size={18} /> Menu</CloseButton>
      </header>
        <MenuItem>Sair</MenuItem>
      <Footer />
    </Container>
  );
}
