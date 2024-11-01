import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: 62.5%;

  }
  body {
    --webkit-font-smothing: antialised;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  };

  body, input, button, textarea {
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  outline: none;
  }
  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  
`