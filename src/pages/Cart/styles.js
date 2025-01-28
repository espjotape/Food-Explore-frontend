import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;

  grid-template-rows: 10.4rem 1fr 7.7rem;
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

  
  > #content {
    grid-area: content;
    padding: 1rem 1.5rem;

    h2 {
    font-size: 2rem;
    font-weight: 400;
  }

    .total {
      margin-bottom: 2.0rem;
      font-weight: 300;
    }

    #next {
      border: none;
      border-radius: 4px;
      width: 21.0rem;
      min-height: 4.1rem;
      
      background: ${({theme}) => theme.COLORS.TOMATO_100};
      color: ${({theme}) => theme.COLORS.WHITE_100};
    }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {

    section {
      > div{  
        display: flex;
        width: 100%;

      }
    }
  
    #next {
     display: none;
     }
   }  

   @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > #content {
       padding: 0 10rem;

      > div:nth-child(2) {
          gap: 15rem;
        }
    }
`

export const CloseButton = styled.div`
  display: flex;
  align-items: center;

  background: none;
  border: none;
  color: white;
  font-size: 2.0rem;
  cursor: pointer;

  gap: 4px;
  margin-top: 25px;
  grid-area: content;

  .icon {
    width: 1.6rem; 
    height: 1.6rem;
    transition: background-color 0.3s ease, transform 0.3s ease; /* Ajustado para suavizar a transição */
  
    &:hover {
    transform: translateX(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
    }
`

export const CartSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  max-height: clamp(100px, 70vh, 85.0rem);
  width: clamp(300px, 90%, 800px);
  overflow-y: hidden;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-height: clamp(200px, 60vh, 85.0rem);
   }

  .order-list {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding-right: 1rem;
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
  
  .cart {
    display: flex;
    width: 100%;
    margin: 1.0rem 0;
    align-items: center;

    .info {
      width: 100%;
      margin-left: 1.0rem;
      align-items: flex-start;
      button {
        border: none;
        background: transparent;
      }
      
      .firstLine {
        justify-content: space-between;;
      }

      .price {
        color: ${({theme}) => theme.COLORS.WHITE_500};
        font-size: 1rem;
      }

    h3 {
      font-size: 1.3rem;
      font-weight: 500;

      &::before {
        content: attr(data-quantity);
        font-weight: 600;
      }
    }

    > button {
      border: none;
      background: none;
        p {
        color: ${({theme}) => theme.COLORS.TOMATO_400};
        font-size: 1.1rem;
        }
    }
  }
}

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .firstLine {
        display: flex;
        gap: 20px;
        align-items: center;
      }

    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`


export const PaymentCard = styled.div`
  width: 100%;
  margin: 0 auto 2.0rem;
  padding: 1rem 0 0 0;

  h2 {
    font-size: 1.8rem;
    font-weight: 400;
    margin-left: 1rem;
  }

  > .paymentHeader {
      nav {
      display: flex;
      height: 7.1rem;
      margin-top: 2.0rem;

      button:first-child {
        border-radius: 1rem 0 0 0;
      }
      button:nth-child(2) {
        border-radius: 0rem 1rem 0 0;
      }

      button {
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

   >.methodPayment{
    height: clamp(25rem, 24vh, 70vh);


    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${({ theme }) => theme.COLORS.WHITE_600};
    border-radius: 5px;
   
    
    .box {
      display:flex;
      gap: 1.7rem;
      margin-top: 20px;
      margin-bottom: 20px;
    }

     p {
      font-weight: 400;
      font-size: clamp(10px ,1.4rem, 1.8rem);
      text-align: center;
    }

    > .qrcode {
      text-align: center;
      display: flex;
      flex-direction: column;

        img {
        width: 15.0rem;
        height: 15.0rem;

        margin-bottom:1rem;
        }

      #pixButton {
        background: none;
        border: none;
        border-radius: 5px;
        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        width: 15.0rem;
        height: 4.1rem;
    
        p {
          color: ${({theme}) => theme.COLORS.WHITE_100}
        }
        }
      }

     > #credit {
      width: 90%;

      p {
       text-align: left;
      }

      input {
        width: 100%;
        color: ${({theme}) => theme.COLORS.WHITE_100};
        border-radius: .5rem;
        border: 1px solid ${({theme}) => theme.COLORS.WHITE_100};
        background: ${({theme}) => theme.COLORS.DARK_400};
        padding: 1.2rem 1.6rem;
       }
      }

       .dados {
        width: 100%;
        display: flex;
        gap: 1.7rem;
        margin: 1rem 0 2rem;

        .valid {
          > input {
          color: ${({theme}) => theme.COLORS.WHITE_100};
          border-radius: .5rem;
          border: 1px solid ${({theme}) => theme.COLORS.WHITE_100};
          background: transparent;
         
          padding: 1.2rem 1.6rem;
        }
        }
      }
    }
      
    .clock,
    .approved {
      text-align: center;
    }

     @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
      width: 50%;
      padding: 0 0 0 0;
     }
}
`