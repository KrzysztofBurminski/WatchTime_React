import { createGlobalStyle } from 'styled-components';

/* @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto'); */
const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        font-family: Roboto, sans-serif;
        /* font-family: 'Mochiy Pop P One', sans-serif; */
        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; */
        color: #f5f5f5;
        background-color: ${({ theme }) => theme.colors.bodyBg};
        color: ${({ theme }) => theme.colors.bodyText};
        font-size: 1.15rem;
        margin: 0;
        padding: 0;
    }

    img {
        max-width: 100%
    }
`;

export default GlobalStyles;
