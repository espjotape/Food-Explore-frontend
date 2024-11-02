import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
 width: 100%;
 height: 100vh;
 display: grid;
 grid-template-rows: 114px auto 47px;
 grid-template-areas:
 "header"
 "content"
 "footer";
 
 > .button {
  grid-area: content;
  position: absolute;
  top: 13.0rem;
  left: 3.9rem;
  z-index: 1;

  >button {
   border: none;   
   background: transparent;
   gap: 1px;
   font-size: 1.8rem; 
   display: flex;
   align-items: center;
   
  p {
    color: ${({ theme }) => theme.COLORS.WHITE_100}
  }
  }
}

.btnEdit {
  width: 100%;
  margin-top: 40px;
  padding: 10px 20px;

  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.WHITE_100};
  border-radius: 5px;

  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
  .btnEdit {
  width: 13.1rem;
  font-size: 24px;
  }

  > .button {
  grid-area: content;
  position: absolute;
  top: 14.0rem;
  left: 14rem;

  >button {
   border: none;   
   background: transparent;
   gap: 1px;
   font-size: 3rem; 
   display: flex;
   align-items: center;
   
  p {
    color: ${({ theme }) => theme.COLORS.WHITE_100}
  }
  }
 }
}
`

export const Content = styled.div`
 height: 100%;
 display: flex;
 flex-direction: column;
 grid-area: content;
 padding: 15px 36px 30px;
 position: relative;

 .info {
  > h1 {
  font-size: 2.0rem;
  font-weight: 500;
  margin-bottom: 8px; 
  margin-top: 8px;
  text-align: center;
 }

 > p {
  font-size: 12px;
  text-align: center;
  font-weight:300;
  margin-bottom: 10px;
 }
 }
 

 @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
  display: flex;
  flex-direction: row;
  padding: 55px 80px 0px;
  align-items: center;
  gap: 7.0rem;
  
  .info {
    margin-top: -50px;
    align-items: flex-start;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 4.6rem
    }

    p {
      font-size: 2rem;
      text-align: left

    }
  }
 }
`

export const SaladImage = styled.img`
  width: 100%;
  max-width: 26.4rem;
  margin: 3.0rem auto 0;
  border-radius: 10px;
 
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 39rem;
    margin: 0 0 0 6rem;
 }
`;

export const Ingredients = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 gap: 10px;
 margin-top: 10px;
`

export const IngredientButton = styled.button`
  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  color: ${({theme}) => theme.COLORS.WHITE_100};
  padding: 4px 8px;
  border: none;
  border-radius: 5px;
  font-size: 10px;
  cursor: pointer;
`;

export const OrderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 25rem;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;

  button {
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.WHITE_100};
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 18px;
  }

  span {
    margin: 0 10px;
  }
`;

export const OrderButton = styled.button`
  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.WHITE_100};
  border: none;
  padding: 10px 20px;
  font-size: 9px;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;
  margin-left: 10px;
`;
