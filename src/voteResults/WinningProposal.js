import React from "react";

class WinningProposal extends React.Component {
	state = { dataKey: null };
	componentDidMount() {
		const { drizzle } = this.props;
		const contract = drizzle.contracts.Voting;
		var dataKey = contract.methods["winningProposal"].cacheCall();
		this.setState({ dataKey });
	}

	render() {
		const { Voting } = this.props.drizzleState.contracts;
		const WinningProposal = Voting.winningProposal[this.state.dataKey];
		return <p>Leading Candidate: <b>{WinningProposal && WinningProposal.value[0]}</b></p>;
	}
}

export default WinningProposal;