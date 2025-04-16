import React from "react";
import { Drizzle } from '@drizzle/store'


class Chairperson extends React.Component {
	state = { dataKey: null };
	componentDidMount() {
		const { drizzle } = this.props;
		const contract = drizzle.contracts.Voting;
		var dataKey = contract.methods["chairperson"].cacheCall();
		this.setState({ dataKey });
}

	render() {
		const { Voting } = this.props.drizzleState.contracts;
		const Chairperson = Voting.chairperson[this.state.dataKey];
		return (
			<div>
				<h1>Welcome to the Demo Voting Session!</h1>
				<h2>Address of the Chairperson in this session:</h2>
				<h4>{Chairperson && Chairperson.value}</h4>
			</div>
		);
	}
}

export default Chairperson;
