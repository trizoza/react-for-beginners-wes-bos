import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {

	goToStore(event) {
		event.preventDefault()
		console.log("You changed URL")
		console.log(this.storeInput.value)
	}

	render() {
		return (
			<form className="store-selector" onSubmit={(event) => this.goToStore(event)}>
				<h2>Please Enter a Store</h2>
				<input type="text" 
					required placeholder="Store Name" 
					defaultValue={getFunName()} 
					ref={(input) => {this.storeInput = input}}/>
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

export default StorePicker