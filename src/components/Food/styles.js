import styled from "styled-components";

export const Container = styled.div`
  max-width: 210px;
  height: 292px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  position: relative;
  cursor: pointer;

  > img {
    max-width: 100px;
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
    right: 16px;
  }
`;

export const Title = styled.div`
  margin-top: 10px;
  
  h2 {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const OrderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
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
    font-size: 16px;
  }

  span {
    margin: 0 10px;
  }
`;

export const OrderButton = styled.button`
  border: none;
  width: 100%;
  height: 32px;
  
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  font-size: 12px;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 15px;
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`;
