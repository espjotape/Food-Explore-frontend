import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

import bannerMb from "../../assets/banner-mobile.png";
import bannerDesktop from "../../assets/bannerDesktop.png";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 10.4rem auto 4.7rem;
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

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 9.6rem;
  
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      width: 100%;
      max-width: 112.2rem;
    }
  }
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto 30px;
  height: 120px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.COLORS.GRADIENT_1} 0%,
    ${({ theme }) => theme.COLORS.GRADIENT_2} 100%
  );
  border-radius: 3px;
  max-width: 90%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  img {
    width: 19.1rem;
    position: absolute;
    left: -30px;
    bottom: 0px;
    content: url(${bannerMb});

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      content: url(${bannerDesktop});
    }
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
      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      margin-bottom: 3px;
    }

    p {
      font-size: 10px;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 26.0rem;
    margin: 8.0rem auto 0;
    max-width: 100%;
    > div {
      top: 65px;
      right: 60px;
      
      h2 {
        font-size: 4.5rem;
      }
      p {
        font-size: 1.6rem;
      }
    }

    > img {
    width: 49rem;
    left: -80px;
    bottom: -10px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 50px;

  .swiper-container {
    display: flex;
    overflow-x: auto; 
    scrollbar-width: thin;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none; 
    }
  }

  .dish-slide {
    max-width: 21.5rem; 
    flex-shrink: 0; 
    margin-right: 10px; 
  }

  .custom-prev-meals, .custom-next-meals,
  .custom-prev-desserts, .custom-next-desserts,
  .custom-prev-drinks, .custom-next-drinks{
    display: none;
  }
  
  @media (min-width: 1024px) {
    align-items: center;

    .dish-slide {
      max-width: 30.0rem; 
      margin-right: 2.7rem; 

    }

    .swiper-container {
      height: 8.0rem;
    }

    section > h2 {
      font-size: 3.2rem;
    }

    .swiper-background {
      position: relative;
    }

    .gradient-overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      pointer-events: none;
    }

    .gradient-overlay::before,
    .gradient-overlay::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 10%;
      z-index: 1;
    }

    .gradient-overlay::before {
      left: 0;
      background: linear-gradient(to left, rgba(0, 10, 15, 0.04), rgba(0, 10, 15, 1));
    }

    .gradient-overlay::after {
      right: 0;
      background: linear-gradient(to right, rgba(0, 10, 15, 0.04), rgba(0, 10, 15, 1));
    }
  }

  .custom-prev-meals, .custom-next-meals,
    .custom-prev-desserts, .custom-next-desserts,
    .custom-prev-drinks, .custom-next-drinks {
      display: flex;
    }

    .custom-prev-meals, .custom-next-meals,
    .custom-prev-desserts, .custom-next-desserts,
    .custom-prev-drinks, .custom-next-drinks {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      z-index: 10;
    }

    .custom-prev-meals, .custom-prev-desserts,
    .custom-prev-drinks {
      left: 10px;
    }

    .custom-next-meals, .custom-next-desserts,
    .custom-next-drinks {
      right: 10px;
    }

`;
