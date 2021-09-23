import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "./actions";

import Health from "./components/health/health";

class Machines extends Component {
	componentDidMount() {
		this.props.getMachines();
	}
	render() {
		let machines = null;
		if (!this.props.loadingMachines) {
			machines = (
				<div className="table-responsive">
					<table className="table table-striped">
						<thead>
							<tr>
								<th>Name</th>
								<th>IP Address</th>
								<th>Health</th>
							</tr>
						</thead>
						<tbody>
							{this.props.machines.map(machine => (
								<tr
									key={machine.id}
									onClick={() =>
										this.props.history.push(
											`/machines/${machine.id}`
										)
									}
								>
									<td>{machine.name}</td>
									<td>{machine.ip_address}</td>
									<td>
										<Health health={machine.health} />
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			);
		}

		return machines;
	}
}

const mapStateToProps = state => ({
	loadingMachines: state.loadingMachines,
	machines: state.machines
});

const mapDispatchToProps = dispatch => ({
	getMachines: () => dispatch(actions.getMachines())
});

export default connect(mapStateToProps, mapDispatchToProps)(Machines);
