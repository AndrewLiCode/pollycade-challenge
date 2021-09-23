import * as actions from "../actions";

class WsFeed {
	constructor(store) {
		this.store = store;
		this.connect();
	}

	connect = () => {
		const ws = new WebSocket("ws://localhost:1337/ws");

		ws.onopen = () => {
			console.log("WebSocket connected!");
		};

		ws.onclose = e => {
			console.log("WebSocket closed: " + e.reason);
		};

		ws.onmessage = evt => {
			const message = JSON.parse(evt.data);
			console.log("ws message: " + JSON.stringify(message));

			if (message.type === "HEALTH_UPDATE") {
				this.store.dispatch(
					actions.updateHealthState(message.id, message.health)
				);
			}
		};
	};
}

export default WsFeed;
