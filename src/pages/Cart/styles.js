import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
 display: grid;

 grid-template-rows: 10.4rem auto 7.7rem;
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
  margin: 3.0rem 0 0 2.0rem;
  overflow: auto;
  justify-content: space-between;

  .cart {
    display: flex;
    width: 100%;
    margin: 2.0rem 0;
    align-items: center;

    h3{
      font-size: 1.6rem;
      font-weight: 500;
      
      &::before {
        content: attr(data-quantity);
        font-weight: 600;
      }
    }

    p {
      color: ${({theme}) => theme.COLORS.TOMATO_400};
      font-size: 1.2rem;
    }

    .info {
      margin-left: 1.0rem;
      align-items: flex-start;
      width: 100%;
      button {
        border: none;
        background: transparent;
      }

      .price {
      color: ${({theme}) => theme.COLORS.WHITE_500};
      font-size: 1.2rem;

      display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      .price {
        display: flex;
      }
    }
    }
    
  }

  .total {
      margin-bottom: 2.0rem;
    }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin: 4.6rem 0px 0 8.0rem;
 }
 }

 @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
  section {
    margin: 3.0rem 0 0 10rem;
    overflow: hidden;
    

    .dish-container {
        margin-bottom: 20px;
        max-height: clamp(250px, 50vh, 85.0rem);
        width: clamp(300px, 40%, 800px);
        overflow-y: auto;
        padding: 1rem;
      }
    ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.COLORS.DARK_400};
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.CYAN};
        border-radius: 5px;
        border: 2px solid ${({ theme }) => theme.COLORS.DARK_400};
      }
  }
  .firstLine {
    display: flex;
    align-items: center;
    gap: 1rem
  }
 }
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2.0rem;
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