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

 .next {
  display: flex;
  align-items: center;
  justify-content: center; 
  max-width: 21.6rem;
  margin-bottom: 4.0rem;

  button {
  align-items: flex-end;
  }
}

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

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
  section {
    margin: 3.0rem 0 0 10rem;
    overflow: hidden;

    .next {
    display: none;
    }
    

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

export const Payment = styled.div`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
  display: block;
  grid-area: content;

  width: 100%;
  width: clamp(50.0rem, 35vw, 50vw);
  margin: 0 auto;
  margin-right: 19rem;
  padding: 3.4rem 4rem;

  h2 {
    font-size: 1.8rem;
    font-weight: 400;
  }
  
  >.methodPayment{
    width: 100%;
    
    height: clamp(24rem, 42vh, 70vh);

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${({ theme }) => theme.COLORS.WHITE_600};
    padding: 5rem clamp(4rem, 5rem + 5.5vw, 6.1rem) 6.8rem;
    
    p {
      font-weight: 400;
      font-size: clamp(10px ,1.4rem, 1.8rem);
      text-align: center;
    }

    > .qrcode {
      text-align: center;
      img {
       margin-top: 20px;
       width: clamp(2rem, 4rem + 10vw, 21rem);
       height: clamp(2rem, 4rem + 10vw, 21rem);

       margin-bottom:1rem;
      }
      
      > button {
      font-size: 1.2rem;
      
      }
    }
  
    > .credit {
      width: 34.8rem;

      p {
       text-align: left;
      }
      .input {
       width: 100%;

       input {
        color: ${({theme}) => theme.COLORS.WHITE_100};
        border-radius: .5rem;
        border: 1px solid ${({theme}) => theme.COLORS.WHITE_100};
        background: transparent;
        width: 100%;
        padding: 1.2rem 1.6rem;
       }
        input:placeholder{
        color: ${({theme}) => theme.COLORS.WHITE_100};
       }
      
       }
      }
       .dados {
        width: 100%;
        display: flex;
        gap: 1.7rem;
        margin: 1rem 0 2rem;

        .valid {

        > input {
          width: 16.6rem;
          color: ${({theme}) => theme.COLORS.WHITE_100};
          border-radius: .5rem;
          border: 1px solid ${({theme}) => theme.COLORS.WHITE_100};
          background: transparent;
          width: 100%;
          padding: 1.2rem 1.6rem;
        }
        }
      }
    }

  > .paymentHeader {
    nav {
      display: flex;
      height: 7.1rem;
      margin-top: 2.0rem;

      button {
        border: none;
        background-color: transparent;

        color: ${({theme}) => theme.COLORS.WHITE_100};
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE_600};

        font-size: 1.6rem;
        width: 100%;
      }

      button.active {
        top: 2px;
        left: 1px;
        box-shadow: none;
        background-color: ${({ theme }) => theme.COLORS.WHITE_600};
      } 

      button img {
       margin-right: 1.4rem;
       vertical-align: middle;
      }
  }}
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