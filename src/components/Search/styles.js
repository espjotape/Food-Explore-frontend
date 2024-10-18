import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 5px;
  padding: 0 16px; 
  width: 100%;
  height: 50px;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE_100};
  }

  svg {
    margin-right: 8px; 
    color: ${({ theme }) => theme.COLORS.WHITE_500};
    font-size: 24px;
  }


  input {
    flex: 1; 
    height: 100%; 
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE_100}; 
    padding-left: 10px; 

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE_500}; 
    }

    &:focus {
      outline: none; 
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`;
