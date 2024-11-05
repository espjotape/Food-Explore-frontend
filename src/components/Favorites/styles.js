import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
 position: fixed;
 display: grid;

 grid-template-rows: 114px  1fr 77px;
 grid-template-areas: 
   "header"
   "content"
   "footer";
 top: 0;
 left: ${({ isOpen }) => (isOpen ? '-100%' : '0')}; // Aplica a prop isOpen para o deslocamento do menu
 width: 100%;
 height: 100vh;
 background-color: ${({ theme }) => theme.COLORS.DARK_400};
 color: white;
 z-index: 100;
 transition: left 0.3s ease-in-out;

 section {
  grid-area: content;
  margin: 36px 0px 0 20px;
  overflow: auto;
  
  .cart {
    display: flex;
    width: 100%;
    margin: 20px 0;
    align-items: center;

    h3{
      font-size: 16px;
      font-weight: 500;
    }
    p {
      color: ${({theme}) => theme.COLORS.TOMATO_400};
      font-size: 12px;
    }

    .info {
      margin-left: 10px;
      align-items: flex-start;

      button {
        border: none;
        background: transparent;
      }
    }
    
  }
 }

 @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
  section {
    margin: 3.0rem 0 0 10rem;
    overflow: hidden;
  
    .nothing{
      margin-top: 1.0rem;
      font-size: 1.8rem;
      font-weight: 300;
    }
  }
 }
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  
  display: flex;
  align-items: center;
  gap: 4px;

  .icon {
    width: 1.6rem; 
    height: 1.6rem;
    transition: background-color 0.3s ease, transform 0.3s ease; /* Ajustado para suavizar a transição */
  
    &:hover {
    transform: translateX(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
  font-size: clamp(10px, 2rem, 4rem);

    .icon {
    width: 3rem; 
    height: 3rem;
    }
  }
`;