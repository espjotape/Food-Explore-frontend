import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { List, Receipt } from "@phosphor-icons/react";

import logoAdmin from "../../assets/logo-admin.svg";
import logo from "../../assets/logo.svg";

import { SideMenu } from "../SideMenu"; 
import { Container, Box, Identidade, Notification, Orders } from "./styles";

export function Header({ isAdmin ,numeroPedidos, cartIsOpen, setCartIsOpen, cartItems}) {
  const [menuIsOpen, setMenuIsOpen] = useState(false); 
  const navigate = useNavigate()

  const handleOrdersClick = () => {
    navigate("/orders"); 
  };

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
            <Orders onClick={handleOrdersClick}
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
