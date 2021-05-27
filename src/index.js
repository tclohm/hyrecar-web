import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Creation from "./subroutes/CreationRoutes";
import "tailwindcss/tailwind.css"


// MARK: -- Third Party
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import { AuthProvider } from "./context/AuthContext";
import client from './client';


import reportWebVitals from './reportWebVitals';

const Root = () => (
	<BrowserRouter>
		<ApolloProvider client={client}>
			<AuthProvider>
				<Switch>
					<Route path="/create">
						<Creation />
					</Route>
					<Route path="/">
						<App />
					</Route>
				</Switch>
			</AuthProvider>
		</ApolloProvider>
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
