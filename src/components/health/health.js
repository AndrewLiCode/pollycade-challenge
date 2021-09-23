import React from "react";
import "./health.css";

const health = props => {
	let color;

	if (props.health <= 50) {
		color = "#D9534F";
	} else if (props.health <= 70) {
		color = "#f0ad4e";
	} else {
		color = "#5cb85c";
	}

	return (
		<div id="myProgress" role="outerbox">
			<div
				id="myBar"
				style={{
					width: props.health + "%",
					backgroundColor: color,
					height: 32
				}}
			></div>
		</div>
	);
};

export default health;
