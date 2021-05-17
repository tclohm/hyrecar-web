import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


// MARK: -- Third Party
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import { AuthProvider } from "./context/AuthContext";
import client from './client';


import reportWebVitals from './reportWebVitals';

const Root = () => (
	<BrowserRouter>
			<AuthProvider>
				<ApolloProvider client={client}>
	    			<App />
	    		</ApolloProvider>
    		</AuthProvider>
	</BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
  	<Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
