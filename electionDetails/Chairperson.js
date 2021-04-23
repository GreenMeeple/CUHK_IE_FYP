import React from "react";
import { Drizzle } from '@drizzle/store'


class Chairperson extends React.Component {
	state = { dataKey: null};
		
	componentDidMount() {
		const { drizzle } = this.props;
		const contract = drizzle.contracts.Voting;
		var dataKey = contract.methods["chairperson"].cacheCall();
		this.setState({ dataKey });
}

	render() {
		const { Voting } = this.props.drizzleState.contracts;
		const Chairperson = Voting.chairperson[this.state.dataKey];
		return ( <div><h2>Address of the Chairperson in this session:<br/>{Chairperson && Chairperson.value}</h2> 
				</div>);
	}
}

export default Chairperson;
