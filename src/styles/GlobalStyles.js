import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    /* :root {
        --blue-bg: #101942;
        --orange: #ffb238;
        --amarillo-patito: #faba32;
    } */

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #101942; 
        font-family: mont;
        color: white;
        overflow-x: hidden;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    a {
        text-decoration: none;
        color:  white;
    }

    a:visited {
        color: white
    }

    li {
        list-style: none;
    }
`;
