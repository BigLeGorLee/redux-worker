import React, { createClass } from 'react'

export default createClass({
	getInitialState() {
	    return {
	        blink: true  
	    };
	},

	componentDidMount() {
		setInterval(function() {
			this.setState({
				blink: !this.state.blink
			});
		}.bind(this), 500);      
	},

	render() {
		return (
			<div style={{
				    height: '200px',
				    width: '200px',
				    textAlign: 'center',
				    display: 'inline-block',
				    boxShadow: '0 0 1px 1px rgba(0, 0, 0, 0.2)',
				    borderRadius: '2px',
				    padding: '8px 12px',
				    backgroundColor: this.state.blink ? 'rgba(0, 173, 215, 0.5)' : 'rgba(0, 0, 0, 0.05)',
				    margin: '4px',
				    transition: '500ms ease-in-out'
				}}>
				<h1>Blinker</h1>
			</div>
		)
	},
});