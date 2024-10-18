import styled from "styled-components";

export const Container = styled.div``



export const OrderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;

  button {
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.WHITE_100};
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 18px;
  }

  span {
    margin: 0 10px;
  }
`;

export const OrderButton = styled.button`
  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.WHITE_100};
  border: none;
  padding: 10px 20px;
  font-size: 9px;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;
  margin-left: 10px;
`;
