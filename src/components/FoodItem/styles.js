import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.COLORS.WHITE_600};
  outline: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.WHITE_600}` : "none"};

  border-radius: 4px;
  padding-right: 16px;
  
  > button {
    border: none;
    background: none;

    display: flex;
    align-items: center;
    
    color: ${({ theme, $isnew }) =>
    $isnew ? theme.COLORS.WHITE_600 : theme.COLORS.WHITE_100};
  }
  
  > input {
    height: 32px;
    width: 100%;
    
    padding: 8px 8px 8px 16px;
    border: none;
    outline: none;
    
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE_600};
    }
  }
  

  @media (min-width: 1024px) {
    input {
      width: 120px;
    }
  }
`;