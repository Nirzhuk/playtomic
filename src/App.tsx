import{ createGlobalStyle } from 'styled-components';
import Routes from './routes';
import store from './store'
import { Provider } from 'react-redux'

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
    <Provider store={store}>
      <GlobalStyle/>
      <Routes />
    </Provider>
  );
}

export default App;
