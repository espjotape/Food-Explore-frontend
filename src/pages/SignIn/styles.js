import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 margin-top: 130px;
`
export const Form = styled.form`
 width: 260px;
 > button {
  width: 100%;
  height: 48px;
  border-radius: 5px;

  margin-top: 18px;
  margin-bottom: 32px;

  border: none;
  background: transparent;
  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
 
  color: ${({theme}) => theme.COLORS.WHITE_100}
 }
 > a {
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 300;
  color: ${({theme}) => theme.COLORS.WHITE_100};
 }

`
export const Brand = styled.div`
 margin-bottom: 40px;
`
