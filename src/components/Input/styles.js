import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center; // Centraliza verticalmente o conteúdo
  justify-content: center;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding: 0 16px; // Adiciona espaço interno para o conteúdo não tocar as bordas

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE_500}; // Estiliza a cor do ícone
    font-size: 20px; // Ajusta o tamanho do ícone
    margin-right: 8px; // Espaçamento entre o ícone e o input
  }

  > input {
    height: 48px;
    width: 100%;
    padding: 12px 14px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE_500};
      font-size: 14px;
    }

    &:focus {
      border: none;
      outline: none;
    }
  }
`;
