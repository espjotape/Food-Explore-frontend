import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  max-width: 21.0rem;
  height: 34.2rem;
  padding: 15px;
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
    max-width: 70px;
    height: 70px;
    margin-top: 20px;
    object-fit: cover;
   
  }

  > span {
    font-size: 14px;
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
 
  p {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width:400px;
    height: 46.2rem;


    > svg {
      right: 1.8rem;
    }

    > img {
      max-width: 16.0rem;
      height: 15.0rem;
      margin-top: 20px;
      object-fit: cover;
    }

    > p {
      font-size: 1.4rem;
      line-height: 160%;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* Limita a duas linhas */
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      margin-top: 8px;
    }

    > span {
      font-size: 3.5rem;
      line-height: 160%;
    }
  }

`;


export const Title = styled.div`
  margin-top: 10px;
  
  h3 {
    font-size: 15px;
    font-weight: 400;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    h3 {
    font-size: 2.5rem;
    font-weight: 500;
  }
  }
`;

export const OrderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;

  }
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
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-bottom: 0;
  }
  
`;
