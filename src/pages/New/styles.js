import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 height: 100vh;
 display: grid;
 grid-template-rows: 114px auto 47px;
 grid-template-areas:
 "header"
 "content"
 "footer";
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
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin: 20px 0 53px;

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


  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    section {
      width: 100%;
    }

    section input {
      background-color: ${({ theme }) => theme.COLORS.DARK_600};
      border-radius: 8px;
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
      background-color: ${({theme}) => theme.COLORS.DARK_900};
      color: ${({theme}) => theme.COLORS.WHITE_100};

      font-weight: 400;
      font-size: 14px;
    }
  }

  .tags {
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.DARK_800};
    border-radius: 6px;
    padding: 8px ;

    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    
    input { 
      background-color: transparent;
    }

  }

  .inputTag {
    border: none;
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.WHITE_100}
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
  `