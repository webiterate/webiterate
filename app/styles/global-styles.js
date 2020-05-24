import { createGlobalStyle } from 'styled-components';
import { secondary } from './helpers/variables';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Exo+2');
  @import url('https://fonts.googleapis.com/css2?family=Overlock');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans');
  html,
  body {
    height: 100%;
    width: 100%;
    color: ${secondary};
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
