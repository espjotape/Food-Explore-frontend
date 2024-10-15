import styled from "styled-components";

export const Container = styled.button`
 border: none;
 background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
 border-radius: 5px;

 width: 100%;
 height: 48px; 

 > h2 {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE_100}
  }
`