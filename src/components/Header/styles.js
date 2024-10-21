import styled from "styled-components";
import logo from "../../assets/logo.svg";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  height: 114px;
  width: 100%;
  display: flex;
  padding: 0 30px 0 30px;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  > button { 
    border: none;
    background: transparent;
  }
`;

export const Identidade = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  > h1 {
    font-size: 20px;
    font-weight: bold;
  }

  > img {
    width: 197px;
  }

`;


export const Orders = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

// Estilo para a bolinha de notificações
export const Notification = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
