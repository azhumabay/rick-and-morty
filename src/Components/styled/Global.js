import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        font-family: "Roboto", sans-serif;
    }
`;

export default GlobalStyles;
