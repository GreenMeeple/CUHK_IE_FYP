import React, { Component, useState } from 'react';
import './App.css';

import Chairperson from "./electionDetails/Chairperson";	
import Vote from "./electionDetails/Vote";
import Votingevent from "./electionDetails/Votingevent";

import Delegate from "./voteControl/Delegate";
import GiveVote from "./voteControl/GiveVote";

import InputShowVoter from "./voterDetails/InputShowVoter";
import Voters from "./voterDetails/Voters";

import ViewRank from "./voteResults/ViewRank";
import WinningProposal from "./voteResults/WinningProposal";

import Header from "./lib/header";
import Footer from "./lib/footer";
 

class App extends Component {
	state = { loading: true, drizzleState: null, 
			ControlVisible: false, ElectionVisible: false, VoterVisible: false, ResultVisible: false};

	ShowVoteControl = () => {
		{if(this.state.ControlVisible==false) this.setState({ControlVisible: true});
					else this.setState({ControlVisible: false});}
	  }

	ShowElectionDetail = () => {
		{if(this.state.ElectionVisible==false) this.setState({ElectionVisible: true});
					else this.setState({ElectionVisible: false});}
	}

	ShowVoterDetail = () => {
		{if(this.state.VoterVisible==false) this.setState({VoterVisible: true});
					else this.setState({VoterVisible: false});}
	}

	ShowVoteResult = () => {
		{if(this.state.ResultVisible==false) this.setState({ResultVisible: true});
					else this.setState({ResultVisible: false});}
	}


    componentDidMount() {
		const { drizzle } = this.props;
		// subscribe to changes in the store
		this.unsubscribe = drizzle.store.subscribe(() => {
			// every time the store updates, grab the state from drizzle
			const drizzleState = drizzle.store.getState();
			// check to see if it's ready, if so, update local component state
			if (drizzleState.drizzleStatus.initialized) {
				this.setState({ loading: false, drizzleState });
			}
		});
	}
	compomentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		if (this.state.loading) 
			return <p class="errormsg">If long time no response, please refresh.
				<br/><button onClick={event =>  window.location.href='./'}>Refresh</button></p>;
		return (
			<div className="App">
				<Header/>
				
					
				<div class="flexbox-container">

					<div>
						<h1 onClick={this.ShowVoteControl} className="type">Vote Control</h1> 
							{ this.state.ControlVisible ? <div>
								<Delegate
								drizzle={this.props.drizzle}
								drizzleState={this.state.drizzleState}
								/>
								<GiveVote
								drizzle={this.props.drizzle}
								drizzleState={this.state.drizzleState}
								/></div>: <div></div>}
		  			</div>

					<div>
						<h1 onClick={this.ShowElectionDetail} className="type">Election Details</h1> 
							{ this.state.ElectionVisible ? <div>
							<Vote
							drizzle={this.props.drizzle}
							drizzleState={this.state.drizzleState}
							/>
							<Votingevent
							drizzle={this.props.drizzle}
							drizzleState={this.state.drizzleState}
							/>
							<Chairperson
							drizzle={this.props.drizzle}
							drizzleState={this.state.drizzleState}
							/></div>: <div></div>}
					</div>
				</div>

				<div class="flexbox-container">
					<div>
						<h1 onClick={this.ShowVoterDetail} className="type">Voter Details</h1> 
							{ this.state.VoterVisible ? <div>
							<InputShowVoter
							drizzle={this.props.drizzle}
							drizzleState={this.state.drizzleState}
							/>
							<Voters
							drizzle={this.props.drizzle}
							drizzleState={this.state.drizzleState}
							/></div>: <div></div>}
					</div>
					
					<div>
						<h1 onClick={this.ShowVoteResult} className="type">Voting Results</h1> 
							{ this.state.ResultVisible ? <div>
							<WinningProposal
							drizzle={this.props.drizzle}
							drizzleState={this.state.drizzleState}
							/>
							<ViewRank
							drizzle={this.props.drizzle}
							drizzleState={this.state.drizzleState}
							/></div>: <div></div>}
					</div>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;
