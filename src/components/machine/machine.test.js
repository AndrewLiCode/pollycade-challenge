import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { withRouter } from "react-router";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Machine from "./machine";
import reducer from "../../reducers";

function renderWithReduxAndRouter(ui) {
	const store = createStore(reducer);

	return {
		...render(<Provider store={store}>ui</Provider>),
		store
	};
}

const withRouterMachine = withRouter(Machine);

test("renders health component", () => {
	renderWithReduxAndRouter(<withRouterMachine />);
});
