import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 display: grid;
 grid-template-rows: 114px auto 47px;
 grid-template-areas:
 "header"
 "content"
 "footer"; 
 background-color: ${({ theme }) => theme.COLORS.DARK_700};
`;

export const Content = styled.main`
  grid-area: content;
  justify-self: center;
  width: 100vw;
  padding-left: 10px;
`;

export const Banner = styled.div`
  display: flex;
  margin: 0 auto 30px;
  height: 120px;
  justify-content: space-between;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_400}; /* Ajuste a cor de fundo conforme o tema */
 
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
    top: 30px;
    right: 15px;

    h2 {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      margin-bottom: 3px;
    }

    p {
      font-size: 10px;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
  }
`;
