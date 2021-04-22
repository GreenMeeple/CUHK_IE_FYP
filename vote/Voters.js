import React from "react";

class Voters extends React.Component {
	state = { dataKey: null };
	
	componentDidMount() {
		const { drizzle } = this.props;
		const contract = drizzle.contracts.Voting;
		var dataKey = contract.methods["showVoter"].cacheCall();
		this.setState({ dataKey });
}

	render() {
		const { Voting } = this.props.drizzleState.contracts;
		const Voters = Voting.showVoter[this.state.dataKey];
		if (Voters && Voters.value.delegate != 0x0000000000000000000000000000000000000000) {
			return <p>Voter weight: {Voters && Voters.value.weight}, Voter delegate: {Voters && Voters.value.delegate}</p>
		}	
		if (Voters && Voters.value.voted == true){
			return <p>Voter weight: {Voters && Voters.value.weight}, Voter voted proposal: {Voters && Voters.value.vote}</p>
		} else {return <p>Voter weight: {Voters && Voters.value.weight}, Voter not vote</p>}
	}
}

export default Voters;