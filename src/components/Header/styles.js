import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  height: 114px;
  width: 100%;
  display: flex;
  padding: 0 30px 0 30px;

  @media (min-width: 1024px) {
    padding: 0 85px 0 85px;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  > button { 
    border: none;
    background: transparent;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .mobile-icon, .desktop {
      display: none;
    }
  }
`;

export const Identidade = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;

  .logo-mobile {
    display: flex; /* Sempre exibe logo mobile */
    margin: 0 auto; /* Centraliza a imagem */
  }

  .logo-desktop {
    display: none; /* Oculta logo desktop por padrão */
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center; /* Centraliza também na versão desktop */
    width: 20%;
    .logo-mobile {
      display: none; /* Oculta logo mobile em telas grandes */
    }

    .logo-desktop {
      display: flex; /* Exibe logo desktop em telas grandes */
      
    }
  }
`;



export const ButtonsDesktop = styled.div`
  display:none;
    
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 20px;
   
    #btn-fav {
      border: none;
      background-color: transparent;
      color: ${({theme}) => theme.COLORS.WHITE_100};

      padding: 8px 16px;
      border-radius: 8px;

      cursor: pointer;
      white-space: nowrap;
    }
    
    .SignOut {
      display: flex;
      align-items: center;
     
      font-size: 30px;
      border: none;
      background: transparent;
      color: ${({theme}) => theme.COLORS.WHITE_100}
    }
  }
`

export const Orders = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Notification = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrdersButton = styled.button`
  display: none;

  @media (min-width: 1024px) {
    display: inline-block;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    padding: 12px 52px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    white-space: nowrap;
    transition: background-color 0.3s ease, transform 0.3s ease; /* Ajustado para suavizar a transição */

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
    }
  }
`;
