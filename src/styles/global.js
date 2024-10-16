import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    --webkit-font-smothing: antialised;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  };

  body, input, button, textarea {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
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