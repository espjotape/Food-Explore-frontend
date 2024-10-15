import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  height: 77px;
  width: 100%;
  padding: 10px 17px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  > h2 {
   color: ${({theme}) => theme.COLORS.WHITE_700};
   font-size: 13px;
  }

  .logo {
    filter: grayscale(100%);
    width: 12px;
    height: 12px;
  }
  .logo:hover {
  filter: none;
}
`;

export const Royalties = styled.div`
font-size: 10px;
`;
