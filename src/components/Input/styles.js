import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center; 
  justify-content: center;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding: 0 16px; 

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE_500}; 
    font-size: 20px; 
    margin-right: 8px;
  }

  > input {
    height: 48px;
    width: 100%;
    padding: 12px 0;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE_500};
      font-size: 13px;
    }

    &:focus {
      border: none;
      outline: none;
    }
  }
`;
