import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button, select {
        font-family: ${({ theme }) => theme.font};
        outline: 0;
    }

    body { overflow-x: hidden; }
`;