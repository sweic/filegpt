import { createGlobalStyles } from "solid-styled-components";

export default createGlobalStyles`
*, *:before, *:after {
    box-sizing: border-box;
  font-weight: 600;
  
  body::-webkit-scrollbar {
    width: 0;
  }
}
 #root {
    display: flex;
    flex-direction: column;
  }
  
  html, body, #root {
    height: 100% !important;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    border: 0;
  }

body {
  position: relative;
}

p {
  padding: 0;
  margin: 0;
}
:root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  
  a {
    font-weight: 500;
    text-decoration: inherit;
  }
  a:hover {
  }
  


  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }


  
  
`;
