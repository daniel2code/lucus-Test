import { createGlobalStyle } from "styled-components"
import { colorPallet } from "./theme"
import bg from "../assets/bg.svg"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${colorPallet.primaryColor};
    background-image: url(${bg});
    color: ${colorPallet.textColor};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    max-width: 1660px;
  }
`;
 
export default GlobalStyle;