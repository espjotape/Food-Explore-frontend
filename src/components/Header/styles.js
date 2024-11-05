import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  height: 10.4rem;
  width: 100%;
  display: flex;
  padding: 0 3.0rem 0 3.0rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
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

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
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
  gap: .4rem;
  width: 100%;

  .logo-mobile {
    display: flex; 
    margin: 0 auto; 
  }

  .logo-desktop {
    display: none; 
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    justify-content: center;
    width: 20%;
    .logo-mobile {
      display: none; 
    }

    .logo-desktop {
      display: flex; 
      
    }
  }
`;



export const ButtonsDesktop = styled.div`
  display:none;
    
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 2.0rem;
   
    #btn-fav {
      border: none;
      background-color: transparent;
      color: ${({theme}) => theme.COLORS.WHITE_100};

      padding: .8rem 1.6rem;
      border-radius: .8rem;

      cursor: pointer;
      white-space: nowrap;
    }
    
    .SignOut {
      display: flex;
      align-items: center;
     
      font-size: 3.0rem;
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
  padding: .4rem .8rem;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrdersButton = styled.button`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: inline-block;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    padding: 1.2rem 5.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    white-space: nowrap;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
    }
  }
`;
