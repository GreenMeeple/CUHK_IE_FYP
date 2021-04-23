import React from "react";
import { Drizzle } from '@drizzle/store'


class Votingevent extends React.Component {
	state = { dataKey: null };
	componentDidMount() {
		const { drizzle } = this.props;
		const contract = drizzle.contracts.Voting;
		var dataKey = contract.methods["votingevent"].cacheCall();
		this.setState({ dataKey });
}

	render() {
		const { Voting } = this.props.drizzleState.contracts;
		const Votingevent = Voting.votingevent[this.state.dataKey];
		return(
		<div>
			<p>Total Number of Candidates (Proposal): &nbsp;<b>{Votingevent && Votingevent.value[0]}</b>
			&nbsp;&nbsp;;&nbsp;&nbsp;Total number of Votes: &nbsp;
			<b>{Votingevent && Votingevent.value[1]}</b></p>
		</div>)
	}
}

export default Votingevent;
