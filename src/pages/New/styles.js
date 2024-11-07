import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
 width: 100%;
 height: 100vh;

 display: grid;
 grid-template-rows: 10.4rem auto 66px;
 grid-template-areas:
 "header"
 "content"
 "footer";

 @media (min-width: 1024px) {
  overflow-y: hidden;
  width: 100%;
 }

 ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.DARK_400};
    margin: 10px 0; 
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.CYAN};
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_400};
  }
`

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 grid-area: content;
 padding: 15px 23px 30px;
 
  h1 {
  margin-top: 16px;
  font-weight: 500;
  font-size: 25px;  

  color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

 > button {
   border: none;
   background: none;
   gap: 1px;
   font-size: 16px; 
   display: flex;
   align-items: center;
   
  p {
    color: ${({ theme }) => theme.COLORS.WHITE_100}
  }
 }

 @media(min-width:${DEVICE_BREAKPOINTS.LG}) {
  padding: 20px 90px 0px;
  overflow-y: scroll;

  
 }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0 53px;

  .firstLine, .secondLine {
    display: flex;
    flex-direction: column;
  }

  .name {
    width: 100%;
    padding: 12px 22px;

    color: ${({theme}) => theme.COLORS.WHITE_100};

    border: none;
    background-color: transparent;
    border-radius: 8px;
    
    background-color: ${({theme}) => theme.COLORS.DARK_800};
    
    &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }
  }

  ::placeholder {
    color: ${({theme}) => theme.COLORS.WHITE_500};
  }

  > .firstLine {
    section {
      width: 100%;
    }
  }

  > .secondLine {
    section:first-of-type {
      width: 100%;
    }
  }

  .category {
    
    > label {
      position: relative;
    }

    svg {
      pointer-events: none;
      position: absolute;
      top: 0;
      right: 18px;
      cursor: pointer;
      transition: filter 0.2s;
      color: ${({theme}) => theme.COLORS.WHITE_400};
    }

    select {
      border: none;
      cursor: pointer;
      width: 100%;
      padding: 16px 16px;

      appearance: none;
      -webkit-appearance: none;


      border-radius: 8px;
      background-color: ${({theme}) => theme.COLORS.DARK_800};
      color: ${({theme}) => theme.COLORS.WHITE_100};

      font-weight: 400;
      font-size: 14px;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    max-width: 500rem;
    background-color: ${({theme}) => theme.COLORS.DARK_800};
    border-radius: 6px;
    padding: 8px ;

    gap: 16px;
    
    input { 
      background-color: transparent;
    }

  }

  .price {
    padding: 12px 22px;

    color: ${({theme}) => theme.COLORS.WHITE_100};
    background-color: ${({theme}) => theme.COLORS.DARK_800};
    border-radius: 8px;
  }
  
  .inputPrice {
    display: flex;
    width: 100%;
    border: none;
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.WHITE_100}
  }
 
 .buttons {
  display: flex;
  flex-direction: row;
  gap: 13px;
  align-items: center;

  > button {
    font-size: 11px;
    padding: 1px 14px;
  }

  .del {
   background-color: ${({theme}) => theme.COLORS.DARK_800}
  }
  .save {
    &:disabled {
      opacity: 1;
      background-color: ${({ theme }) => theme.COLORS.LIGHT_RED};
    }
  }
 }

 @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
  width: calc(100% - 1.4rem);
  .firstLine, .secondLine {
    display: flex;
    flex-direction: row; 
    gap: 20px;
  }
  .firstLine {
    section:nth-child(1){
      max-width: 25rem;
    }
    section:nth-child(3){
      max-width: 30rem;
    }
  }

  .price {
    max-width: 30rem;
    padding: 12px 22px;
  }

  .button {
    display: flex;
    width: 35%;
    flex-direction: row;
    gap: 13px;
    margin-left: auto;

    > .save {
      font-size: 1.6rem;
      &:disabled {
        opacity: 1;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
      }
    }
  }
}
`

export const Img = styled.div`
  padding: 12px 22px;
  border-radius: 8px;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.WHITE_1100};

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  
  > label {
    display: flex;
    gap: 8px;
    cursor: pointer;

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
      line-height: 24px;
      max-width: calc(100vw - 16px);
    }

    input {
      width: 100%;
      position: absolute;
      right: 0;
      z-index: -1;
    }
  }

  @media (min-width: 1024px) {
    > label {
      span {
        max-width: 19.3rem;
      }
      
      input {
        max-width: 22.9rem;
      }
    }
  }
  `