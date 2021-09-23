import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import Health from "../health/health";

class Machine extends Component {
	state = {
		text: ""
	};

	componentDidMount() {
		console.log("machineid: " + this.props.match.params.machineid);
		this.props.getMachine(this.props.match.params.machineid);
	}

	onSubmit = event => {
		event.preventDefault();

		this.props.updateMachine(this.props.machine.id, {
			...this.props.machine,
			name: this.state.text
		});
	};

	onChange = event => {
		this.setState({ text: event.target.value });
	};

	render() {
		if (!this.props.loadingMachine) {
			return (
				<div className="row">
					<div className="col d-flex flex-column">
						<h3 className="mb-3">{this.props.machine.name}</h3>
						<h4 className="mb-4">Update Device</h4>
						<form onSubmit={this.onSubmit}>
							<label for="machinename">Name:</label>
							<br />
							<input
								type="text"
								id="machinename"
								value={this.state.text}
								onChange={this.onChange}
								className="mb-2 w-100"
							/>
							<br />
							<button
								type="submit"
								className="btn btn-dark float-right"
							>
								Submit
							</button>
						</form>
					</div>
					<div className="col d-flex flex-column">
						<div
							className="d-flex flex-column align-items-center p-3 mb-3 border border-dark"
							style={{
								backgroundColor: "LightGray"
							}}
						>
							<h2>{this.props.machine.health}</h2>
							<Health health={this.props.machine.health} />
						</div>
						<h4>Stats</h4>
						<p>IP Address: {this.props.machine.ip_address}</p>
					</div>
				</div>
			);
		} else {
			return <p>Loading...</p>;
		}
	}
}

const mapStateToProps = state => ({
	loadingMachine: state.loadingMachine,
	machine: state.machine
});

const mapDispatchToProps = dispatch => ({
	getMachine: machineid => dispatch(actions.getMachine(machineid)),
	updateMachine: (machineid, newMachine) =>
		dispatch(actions.updateMachine(machineid, newMachine))
});

export default connect(mapStateToProps, mapDispatchToProps)(Machine);
