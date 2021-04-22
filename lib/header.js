import React, { Component } from 'react';
import fypicon from './FYPicon.jpg';
import banner from './banner.jpg';

class Header extends React.Component {

	render() {
		return <div class="flexbox-container">
      <img src={fypicon} width="180px" height="150px"/>      
      <img src={banner} height="150px" width="100%"/>      

      <div></div>
    </div>;
	}
}

export default Header;
