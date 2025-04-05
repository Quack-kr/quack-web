import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    background-color: #171714;
    color: #fff;
    min-width: 1280px;
    overflow-x: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;