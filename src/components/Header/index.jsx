import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { List, Receipt, SignOut  } from "@phosphor-icons/react";

import logoAdminMobile from "../../assets/logo-admin.svg";
import logoAdminDesktop from "../../assets/logo-desktop-admin.svg"
import logo from "../../assets/logo.svg"

import { useAuth } from "../../hooks/auth"

import { Search } from "../Search";
import { SideMenu } from "../SideMenu"; 
import { Container, Box, Identidade, Notification, Orders ,ButtonsDesktop ,OrdersButton   } from "./styles";

export function Header({ isAdmin, numeroPedidos, cartIsOpen, setCartIsOpen, cartItems = [] }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false); 
  const navigate = useNavigate();
  const { signOut, user } = useAuth()

  const handleOrdersClick = () => {
    navigate("/orders"); 
  };

  const handleGoToNewDish = () => {
    navigate('/new');
  };

  function handleSignOut(){
    navigate("/")
    signOut()
  }

  return (
    <Container>
      <Box>
        <List 
          size={32} 
          color="#fff" 
          onClick={() => setMenuIsOpen(true)} 
          style={{ cursor: 'pointer' }} 
          className="mobile-icon"
        />

        <SideMenu 
          isAdmin={isAdmin}
          menuIsOpen={menuIsOpen} 
          onCloseMenu={() => setMenuIsOpen(false)} 
        />

        <Identidade>
          {isAdmin ? (
            <>
              <img src={logoAdminMobile} alt="Logo Admin" className="logo-mobile" />
              <img src={logoAdminDesktop} alt="Logo Admin Desktop" className="logo-desktop" />
            </>
          ) : (
            <>
            
              <img src={logo} alt="Logo" className="logo-mobile-desktop" />
            </>
          )}     
        </Identidade>

       <ButtonsDesktop>
        <Search className="desktop"/>
        {!isAdmin && <p>Meus Favoritos</p>}
        {isAdmin ? (
            <OrdersButton onClick={handleGoToNewDish}>
              Novo prato
            </OrdersButton>
          ) : (
            <OrdersButton onClick={handleOrdersClick}>
              Meu pedido ({cartItems.length || 0})
            </OrdersButton>
          )
        }
      
        <button type="button" className="SignOut">
          <SignOut onClick={handleSignOut} />  
        </button>
       </ButtonsDesktop>

       {!isAdmin && (
        <Orders className="mobile-icon" onClick={handleOrdersClick}>
          <Receipt color="#fff" size={24} />
          {numeroPedidos > 0 && <Notification>{numeroPedidos}</Notification>}
        </Orders>
        )}

        {cartIsOpen && (
          <Cart 
            cartItems={cartItems} 
            onCloseCart={() => setCartIsOpen(false)} 
          />
        )}
      </Box>
    </Container>
  );
}
