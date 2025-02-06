import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { List, Receipt, SignOut } from "@phosphor-icons/react";

import logoAdminMobile from "../../assets/logo-admin.svg";
import logoAdminDesktop from "../../assets/logo-desktop-admin.svg";
import logo from "../../assets/logo.svg";

import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cartContext";
import { Search } from "../Search";
import { SideMenu } from "../SideMenu";
import { Container, Box, Identidade, Notification, Orders, ButtonsDesktop, OrdersButton } from "./styles";

export function Header({ isAdmin, search }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [numeroPedidos, setNumeroPedidos] = useState(0);
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { cart } = useCart();

  useEffect(() => {
    setNumeroPedidos(cart.length);
  }, [cart]);

  const handleCartClick = () => navigate("/cart");

  const handleGoToFavorites = () => navigate('/favorites');

  const handleGoToNewDish = () => navigate('/new');

  function handleSignOut() {
    signOut();
    navigate("/");
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
          search={search}
          onCloseMenu={() => setMenuIsOpen(false)}
        />

        <Identidade>
          {isAdmin ? (
            <>
              <img src={logoAdminMobile} alt="Logo Admin" className="logo-mobile" />
              <img src={logoAdminDesktop} alt="Logo Admin Desktop" className="logo-desktop" />
            </>
          ) : (
            <img src={logo} alt="Logo" className="logo-mobile-desktop" />
          )}
        </Identidade>

        <ButtonsDesktop>
          <Search className="desktop" search={search}/>
          {!isAdmin && (
            <button id="btn-fav" type="button" onClick={handleGoToFavorites}>
              Meus Favoritos
            </button>
          )}

          <OrdersButton onClick={isAdmin ? handleGoToNewDish : handleCartClick}>
            {isAdmin ? "Novo prato" : `Meu pedido (${numeroPedidos})`}
          </OrdersButton>

          <button type="button" className="SignOut" onClick={handleSignOut}>
            <SignOut />
          </button>
        </ButtonsDesktop>

        {!isAdmin && (
          <Orders className="mobile-icon" onClick={handleCartClick}>
            <Receipt color="#fff" size={24} />
            {numeroPedidos > 0 && <Notification>{numeroPedidos}</Notification>}
          </Orders>
        )}
      </Box>
    </Container>
  );
}
