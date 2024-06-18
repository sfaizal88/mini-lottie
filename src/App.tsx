/**
 * App component
 * @author - Faizal
 * @date - 12th June 2024
 */
// GENERIC IMPORT
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

// COMPONENT IMPORT 
import Header from './view/pages/common/header';
import Dashboard from './view/pages/dashboard';

// API IMPORT
import {client} from './api/client';

// CONTEXT
import { store } from './context/store';

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Header/>
        <Dashboard/>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
