import{ createGlobalStyle } from 'styled-components';
import Routes from './routes';


const GlobalStyle = createGlobalStyle`
  body {
  
  font-family: Inter, sans-serif;
  color: #202020;
  }
  body,html {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes />
    </>
  );
}

export default App;
