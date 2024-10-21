import { Container, Box, Identidade, Logo, Notification, Orders } from "./styles";
import { List, Receipt } from "@phosphor-icons/react"; // Ícone de hambúrguer e recibo
import { SideMenu } from "../SideMenu"; // Importando o SideMenu
import { useState } from "react";

export function Header() {
  const [numeroPedidos, setNumeroPedidos] = useState(1);
  const [menuIsOpen, setMenuIsOpen] = useState(false); 

  return (
    <Container>
      <Box>

        <List size={32} color="#fff" onClick={() => setMenuIsOpen(true)} style={{ cursor: 'pointer' }} />
        

        <SideMenu 
          menuIsOpen={menuIsOpen} 
          onCloseMenu={() => setMenuIsOpen(false)} 
        />

        <Identidade>
          <Logo />
          <h1>food explorer</h1>
        </Identidade>

        <Orders>
          <Receipt color="#fff" size={24} />
          {numeroPedidos > 0 && <Notification>{numeroPedidos}</Notification>}
        </Orders>
      </Box>
    </Container>
  );
}
