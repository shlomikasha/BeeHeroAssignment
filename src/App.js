import HomeScreen from "./pages/HomeScreen";
import { createGlobalStyle } from "styled-components";

const App = () => (
  <>
    <GlobalStyle />
    <HomeScreen />
  </>
);

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    
  body {
    height: 100vh;
    width: 100vw;
    padding: 20px;
    position: relative;
    font-family: 'Roboto', sans-serif;
    background-color: #D1E8E4;
  }
`;

export default App;