import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        font-family: Roboto, sans-serif;
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
