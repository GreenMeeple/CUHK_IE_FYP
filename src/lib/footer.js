import React, { Component } from 'react';

class Footer extends React.Component {

	render() {
		return (<button onClick={event =>  window.location.href='./'}>Refresh if any unexpected outcome occurs :)</button>)
	}
}

export default Footer;
