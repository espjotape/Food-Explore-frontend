import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 114px auto 47px;
  grid-template-areas:
    "header"
    "content"
    "footer";
  > main {
    grid-area: content;
    justify-content: center;
    width: 100vw;

    > div {
      width: calc(100% - 24px);
      margin: 38px 0 25px 15px;
    }
  }
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto 30px;
  height: 120px;

  background: linear-gradient( 180deg, 
  ${({ theme }) => theme.COLORS.GRADIENT_1} 0%, 
  ${({ theme }) => theme.COLORS.GRADIENT_2} 100%
);
  border-radius: 3px;
  max-width: 90%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  img {
    width: 191px;
    position: absolute;
    left: -30px;
    bottom: 0px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 90px;
    position: absolute;
    top: 35px;
    right: 15px;

    h2 {
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      margin-bottom: 3px;
    }

    p {
      font-size: 10px;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
  }
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
margin-top: 50px;

.swiper-background {
  width: 100%;
  max-width: 1200px; /* Ajuste o valor conforme necessário */
}

swiper-container {
  display: flex;
  flex-wrap: nowrap; /* Mantém os slides na mesma linha */
  overflow-x: auto;
}

swiper-slide {
  width: 100%;
  margin: 0 5px;
  flex-shrink: 0; /* Evita que os slides sejam esticados */

}
`
