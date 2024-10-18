import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: rgba(11, 30, 45, 1);
        font-family: "Roboto", sans-serif;
    }
`;

export default GlobalStyles;
