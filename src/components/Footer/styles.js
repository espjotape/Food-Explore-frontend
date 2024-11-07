import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.footer`
  grid-area: footer;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .8rem;

  height: 7.7rem;
  width: 100%;
  padding: 2.7rem 2.6rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 2.3rem 12.2rem;  

  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 10.2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > img {
      width: 18.6rem;
    }
  }
`;

export const Royalties = styled.div`
  font-size: .8rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 1.4rem;
  }
`;
