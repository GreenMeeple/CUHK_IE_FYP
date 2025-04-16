import React from "react";

class WinningProposal extends React.Component {
	state = { dataKey: null };
	componentDidMount() {
		const { drizzle } = this.props;
		const contract = drizzle.contracts.Voting;
		var dataKey = contract.methods["winningProposalPublic"].cacheCall();
		this.setState({ dataKey });
	}

	render() {
		const { Voting } = this.props.drizzleState.contracts;
		const WinningProposal = Voting.winningProposalPublic[this.state.dataKey];
		return <p>WinningProposal: {WinningProposal && WinningProposal.value}</p>;
	}
}

export default WinningProposal;