import React, { Component } from 'react';
import fypicon from './FYPicon.jpg';

class Header extends React.Component {

	render() {
		return <div class="head">
      <img src={fypicon} width="150px" height="150px"/>    
      <h1>Welcome to the Blockchain Demo Voting Session!</h1> 
      <div></div>
    </div>;
	}
}

export default Header;
