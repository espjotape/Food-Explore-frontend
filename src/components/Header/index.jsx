import { Container, Box, Identidade, Notification, Orders } from "./styles";
import { List, Receipt } from "@phosphor-icons/react"; // Ícone de hambúrguer e recibo
import { SideMenu } from "../SideMenu"; // Importando o SideMenu
import { useState } from "react";

import logoAdmin from "../../assets/logo-admin.svg"
import logo from "../../assets/logo.svg"

import { useAuth } from "../../hooks/auth";

export function Header({ isAdmin }) {
  const [numeroPedidos, setNumeroPedidos] = useState(1);
  const [menuIsOpen, setMenuIsOpen] = useState(false); 
  const { user } = useAuth()

  return (
    <Container>
      <Box>
        <List size={32} color="#fff" onClick={() => setMenuIsOpen(true)} style={{ cursor: 'pointer' }} />
        

        <SideMenu 
          menuIsOpen={menuIsOpen} 
          onCloseMenu={() => setMenuIsOpen(false)} 
        />

        <Identidade>
          {
          user.isAdmin ? (
            <img src={logoAdmin} alt="Logo Admin" />
          ) : (
            <img src={logo} alt="Logo" style={{ width: 150 }}/>  
          )}     
        </Identidade>

        {
          !user.isAdmin && (
          <Orders>
            <Receipt color="#fff" size={24} />
            {numeroPedidos > 0 && <Notification>{numeroPedidos}</Notification>}
          </Orders>
          )
        }
      </Box>
    </Container>
  );
}
