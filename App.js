import React, { Component } from 'react';
import {HashRouter,Route,Switch} from "react-router-dom";
import './App.css';
import { Drizzle, generateStore } from "@drizzle/store";

import Delegate from "./submit/Delegate";
import GiveVote from "./submit/GiveVote";
import InputShowVoter from "./submit/InputShowVoter";
import Vote from "./submit/Vote";

import Header from "./lib/header";
import Chairperson from "./vote/Chairperson";	

import ViewRank from "./vote/ViewRank";
import Voters from "./vote/Voters";
import Votingevent from "./vote/Votingevent";
import WinningProposal from "./vote/WinningProposal";



import MainPage from "./MainPage";
import VotingPage from "./VotingPage";

class App extends Component {
	state = { loading: true, drizzleState: null };

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
				<Chairperson
					drizzle={this.props.drizzle}
					drizzleState={this.state.drizzleState}
				/>
				<div class="flexbox-container">
					<div>
						<Votingevent
							drizzle={this.props.drizzle}
							drizzleState={this.state.drizzleState}
							/>
					</div><div>
						<WinningProposal
						drizzle={this.props.drizzle}
						drizzleState={this.state.drizzleState}
						/>
					</div><div>
						<ViewRank
						drizzle={this.props.drizzle}
						drizzleState={this.state.drizzleState}
						/>
					</div></div>
					<Vote
						drizzle={this.props.drizzle}
						drizzleState={this.state.drizzleState}
						/>

				<div class="flexbox-container">
					<div>
						<h1>Vote Control</h1>
						<Delegate
						drizzle={this.props.drizzle}
						drizzleState={this.state.drizzleState}
						/>
						<GiveVote
						drizzle={this.props.drizzle}
						drizzleState={this.state.drizzleState}
						/>
					</div>
					<div>
						<h1>Voter Details</h1>
						<InputShowVoter
						drizzle={this.props.drizzle}
						drizzleState={this.state.drizzleState}
						/>
						<Voters
						drizzle={this.props.drizzle}
						drizzleState={this.state.drizzleState}
						/>
					</div>
				</div>
				<button onClick={event =>  window.location.href='./'}>Refresh if any unexpected outcome occurs :)</button>
			</div>
		);
	}
}

export default App;
