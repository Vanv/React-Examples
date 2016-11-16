import React from 'react';

class MenuEventHadlingComponent extends React.Component {
	edit () {
				alert("Menu Edited");
			}
			remove () {
				alert("Menu Removed")
			}
	render(){			
		return(
			<div className="MenuContainer">
				<div className="menuText">{this.props.children}</div>
				<button onClick={this.edit} className="btn btn-success">Edit</button>
				<button onClick={this.remove} className="btn btn-danger">Remove</button>
				
			</div>
		);
	}
}

export default MenuEventHadlingComponent;