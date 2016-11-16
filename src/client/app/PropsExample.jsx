import React from 'react';

class PropsExampleComponent extends React.Component{
	render() {
		return(
			<div>
				<h1>{this.props.title}</h1>
				<h3>{this.props.genre}</h3>
			</div>	
		);	
	}
}

export default PropsExampleComponent;