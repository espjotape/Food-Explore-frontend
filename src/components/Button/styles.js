import styled from "styled-components";

export const Container = styled.button`
 border: none;
 color: ${({ theme }) => theme.COLORS.WHITE_100};
 background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
 border-radius: 5px;

 display: flex;
 gap: 0.8rem;
 align-items: center;
 justify-content: center;

 width: 100%;
 height: 48px; 
 &:disabled{
    opacity: 0.5;
  }
 > h2 {
    display: flex;
    align-items: center;
    font-size: 16px;
    
  }
`