import styled from "styled-components";

// Controla a visibilidade do SideMenu com base no estado `isOpen`
export const Container = styled.div`
  position: fixed;
  display: grid;
  grid-template-rows: 114px  1fr 77px;
  grid-template-areas: 
    "header"
    "content"
    "footer";
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; // Aplica a prop isOpen para o deslocamento do menu
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  color: white;
  z-index: 100;
  transition: left 0.3s ease-in-out; // Transição suave ao abrir e fechar o menu

  header {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
  }

  > section {
    grid-area: content;
    width: 90%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

export const Menu = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  background: none;
  border: none;
  border-bottom: 0.5px solid ${({theme}) => theme.COLORS.DARK_1000}; /* Linha inferior */
  padding: 15px 5px;
  color: ${({theme}) => theme.COLORS.WHITE_100};
  font-size: 18px;
  cursor: pointer;
`;
