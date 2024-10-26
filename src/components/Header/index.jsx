import { Container, Box, Identidade, Notification, Orders } from "./styles";
import { List, Receipt } from "@phosphor-icons/react";
import { SideMenu } from "../SideMenu"; 
import { Cart } from "../Cart";
import { useState } from "react";

import logoAdmin from "../../assets/logo-admin.svg";
import logo from "../../assets/logo.svg";

export function Header({ isAdmin ,numeroPedidos, cartIsOpen, setCartIsOpen, cartItems}) {
  const [menuIsOpen, setMenuIsOpen] = useState(false); 

  return (
    <Container>
      <Box>
        <List 
          size={32} 
          color="#fff" 
          onClick={() => setMenuIsOpen(true)} 
          style={{ cursor: 'pointer' }} 
        />

        <SideMenu 
          isAdmin={isAdmin}
          menuIsOpen={menuIsOpen} 
          onCloseMenu={() => setMenuIsOpen(false)} 
        />

        <Identidade>
          {isAdmin ? (
            <img src={logoAdmin} alt="Logo Admin" />
          ) : (
            <img src={logo} alt="Logo" style={{ width: 150 }}/>  
          )}     
        </Identidade>

        {
          !isAdmin && (
            <Orders onClick={() => setCartIsOpen(true)}
            >
              <Receipt color="#fff" size={24} />
              {numeroPedidos > 0 && <Notification>{numeroPedidos}</Notification>}
            </Orders>
          )
        }

        {
        cartIsOpen && (
          <Cart 
          cartItems={cartItems} 
          onCloseCart={() => setCartIsOpen(false)} 
          />
          )
        }
      </Box>
    </Container>
  );
}
