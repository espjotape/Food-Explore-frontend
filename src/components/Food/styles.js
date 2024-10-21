import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  position: relative;
  cursor: pointer;

  > img {
    width: 100px;
    height: 100px;
    margin-top: 20px;
    object-fit: cover;
    border-radius: 8px;
  }

  > span {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.CYAN};
  }

  > svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    position: absolute;
    top: 16px;
    right: 18px;
  }
`;

export const Title = styled.div`
  margin-top: 12px;
  font-size: 18px;
  font-weight: 500;
`;

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
    color: ${({ theme }) => theme.COLORS.WHITE_100};
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
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`;
