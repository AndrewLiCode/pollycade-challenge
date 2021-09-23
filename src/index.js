import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import "./index.css";
import App from "./App";

import reducer from "./reducers";

import { watchMachines } from "./sagas";
import WsContext from "./ws/wscontext";
import WsFeed from "./ws/wsfeed";

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers =
// 	process.env.NODE_ENV === "development"
// 		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// 		: null || compose;

const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware)
	// composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchMachines);

const app = (
	<Provider store={store}>
		<WsContext.Provider value={new WsFeed(store)}>
			<App />
		</WsContext.Provider>
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));
