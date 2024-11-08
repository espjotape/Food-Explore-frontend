import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;


  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
  
    gap: 10.0rem;
  }
`;

export const Brand = styled.div`
  margin-bottom: 40px;

  img {
   max-width: 27.8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-bottom: 0;
    img {
     min-width: 36.0rem;

    }
  }
`;

export const Form = styled.form`
  width: 100%; 
  max-width: 32.0rem;
  padding: 2.0rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  border-radius: .8rem;
  box-shadow: 0 .4rem .8rem rgba(0, 0, 0, 0.1);

  > button {
    width: 100%;
    height: 48px;
    border-radius: 5px;
    margin-top: 18px;
    margin-bottom: 32px;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-size: 1.6rem;
    font-weight: 500;
  }

  > h2 {
   display: none;
  }

  > a {
    display: flex;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
   display: flex;
   flex-direction: column;

   background-color: ${({ theme }) => theme.COLORS.DARK_700};
   padding: 6.4rem;
   max-width: 47.6rem;
   border-radius: 1.6rem;

   > h2 {
    display: flex;
    font-weight: 500;
    font-size: 3.2rem;
    
    margin: 0 auto 3.2rem;
   }

   > button {
    font-size: 1.7rem;
   }

   > a {
     font-size: 1.8rem;
   }

   > section h2 {
    font-size: 1.6rem
   }
   
   input::placeholder {
    font-size: 1.6rem
   }
   
  }
`;

