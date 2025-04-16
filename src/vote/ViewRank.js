import React from "react";

class ViewRank extends React.Component {
	state = { dataKey: null };
	componentDidMount() {
		const { drizzle } = this.props;
		const contract = drizzle.contracts.Voting;
		var dataKey = contract.methods["viewRank"].cacheCall();
		this.setState({ dataKey });
}

	render() {
		const { Voting } = this.props.drizzleState.contracts;
		const ViewRank = Voting.viewRank[this.state.dataKey];
		let renderOutput = [];
		let max = ViewRank && ViewRank.value[0].length;
		for (let i = 0; i < max; i++)
			renderOutput.push(<li>Proposal: {ViewRank && ViewRank.value[0][i]} has {ViewRank && ViewRank.value[1][i]} vote.</li>)
		return <p>{renderOutput}</p>
	}
}

export default ViewRank;