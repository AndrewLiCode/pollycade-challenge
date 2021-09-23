import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Machines from "./Machines";
import Machine from "./components/machine/machine";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<img
						alt="logo"
						height="272"
						width="800"
						src="https://i.imgur.com/jcvsFKh.png"
						style={{ width: "100%", objectFit: "contain" }}
					/>
				</header>

				<nav className="App-nav">
					<Link to="/">Home</Link>
					<Link to="/machines">Machines</Link>
				</nav>

				<Switch>
					<Route exact path="/machines" component={Machines} />
					<Route path="/machines/:machineid" component={Machine} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
