import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.WHITE_600};
  outline: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.WHITE_600}` : "none"};
  
  border-radius: 4px;
  padding-right: 16px;
  
  > button {
    border: none;
    background: none;

    display: flex;
    align-items: center;
    
    color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.WHITE_600 : theme.COLORS.WHITE_100};
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
`;