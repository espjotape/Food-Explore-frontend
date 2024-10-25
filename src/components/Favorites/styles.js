import styled from "styled-components";

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
`;