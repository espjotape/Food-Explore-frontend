import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 height: 100vh;
 display: grid;
 grid-template-rows: 114px auto 47px;
 grid-template-areas:
 "header"
 "content"
 "footer";
`

export const Content = styled.div`
 height: 100%;
 display: flex;
 flex-direction: column;
 grid-area: content;
 padding: 15px 36px 30px;

 > button {
   border: none;
   background: none;
   gap: 1px;
   font-size: 16px; 
   display: flex;
   align-items: center;
   
  p {
    color: ${({ theme }) => theme.COLORS.WHITE_100}
  }
 }
  

 > h1 {
  font-size: 20px;
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
`

export const SaladImage = styled.img`
  max-width: 180px;
  margin: 0 auto;
  border-radius: 10px;
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
