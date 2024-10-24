import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 32px;
  h2 {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-weight: 400;
    font-size: 14px;
  }
`;
