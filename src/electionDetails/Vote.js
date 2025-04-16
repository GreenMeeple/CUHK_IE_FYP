import React from "react";

class Vote extends React.Component {
	state = { stackId: null};
	state = { dataKey: null };
	componentDidMount() {
		const { drizzle } = this.props;
		const contract = drizzle.contracts.Voting;
		var dataKey = contract.methods["votingevent"].cacheCall();
		this.setState({ dataKey });
	}
	
	VoteSubmit = e => {
		this.setValue(e.target.value);
	};
	
	setValue = value => {
		const { drizzle, drizzleState } = this.props;
		const contract = drizzle.contracts.Voting;
		const stackId = contract.methods.vote(this.textInput.value).send({
			from: drizzleState.accounts[0]
		});
		//const stackId = contract.methods["viewVoter"].cacheSend(this.textInput.value, {
		//from: drizzleState.accounts[0]
		//});
		this.setState({ stackId });
	};
	
	getTxStatus = () => {
		// get the transaction states from the drizzle state
		const { transactions, transactionStack } = this.props.drizzleState;
		const txHash = transactionStack[this.state.stackId];
		if (!txHash) return null;
		return 'Transaction status: ${transactions[txHash].status}';
	};
	
	render() {
		const { Voting } = this.props.drizzleState.contracts;
		const Votingevent = Voting.votingevent[this.state.dataKey];
		return (
			<div>
				<p>Vote:&nbsp;&nbsp;
				<input type="number" min="0" max={Votingevent && Votingevent.value[0]-1} ref={input => this.textInput = input}/>
				<button onClick={this.VoteSubmit}>Submit</button>
				<div>{this.getTxStatus()}</div></p>
			</div>
		);
	}
}

export default Vote;