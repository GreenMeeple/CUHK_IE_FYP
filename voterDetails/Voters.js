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
			return <p>The Weight of the Voter you search is <b>{Voters && Voters.value.weight}</b> and he/she has delegated <b>{Voters && Voters.value.delegate}</b></p>
		}	
		if (Voters && Voters.value.voted == true){
			return <p>The Weight of the Voter you search is <b>{Voters && Voters.value.weight}</b> and he/she has voted canditate <b>{Voters && Voters.value.vote}</b>.</p>
		} else {return <p>The Weight of the Voter you search is <b>{Voters && Voters.value.weight}</b> and he/she haven't voted yet.</p>}
	}
}

export default Voters;