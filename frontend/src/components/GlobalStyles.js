import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
  }

  button {
      border: none;
      outline: none;
      background: none;
      cursor: pointer;
      padding: 0.7rem 1rem;
      border-radius: 0.2em;
      font-size: inherit;
    }

    .primary-button {
      color: white;
      background: hsl(200, 100%, 50%);
    }

    .primary-button:hover {
      background: hsl(200, 100%, 40%);
    }

    .danger-button {
      color: white;
      background: hsl(0, 100%, 60%);
    }

    .danger-button:hover {
      background: hsl(0, 100%, 50%);
    }

    .secondary-button {
      color: #555;
      background: #ddd;
    }

    .secondary-button:hover {
      background: #ccc;
    }
`;

export const theme = {};
