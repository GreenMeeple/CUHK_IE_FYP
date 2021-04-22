import React from "react";

class Delegate extends React.Component {
	state = { stackId: null};
	
	handleKeyDown = e => {
		this.setValue(e.target.value);
	};

	setValue = value => {
		const { drizzle, drizzleState } = this.props;
		const contract = drizzle.contracts.Voting;
		const stackId = contract.methods.delegate(this.textInput.value).send({
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
		return (
			<div>
				<p>Give your vote to someone(Delegate) :
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<input placeholder="Voter's address ONLY" type="text" ref={input => this.textInput = input}/>
					<button onClick={this.handleKeyDown}>Submit</button>
					<div>{this.getTxStatus()}</div>
				</p>
			</div>
		);
	}
}

export default Delegate;