import React from 'react';
import axios from 'axios';
import TextField from '../node_modules/material-ui/TextField';
import Button from '../node_modules/material-ui/RaisedButton';
import AutoComplete from '../node_modules/material-ui/AutoComplete';
import TableExample from './Table.js'


class TextInput extends React.Component {
	constructor() {
		super();
		this.state = {
			"nameTextField": "", // This is where the content for the TextField used below is stored
			"dataSourceAutoComplete": [],
			"tableData": []
		}
	}

	getAutoCompleteEmails(){
		// Get the emails of all users to use in AutoComplete
		axios.get("http://vcm-3581.vm.duke.edu:5003/api/get_users").then( (response) => {
			console.log(response.data.success);
			if(response.data.success ==1){
					this.setState({"dataSourceAutoComplete": response.data.emails});
			}

		})
	}

	handleInput = (value) => {
		// Update the nameTextField state whenever the text field is changed or perturbed in any way:
		this.setState({"nameTextField": value});
	}

	getData = (event) => {
		var email = this.state.nameTextField; // log the current nameTextField content
    axios.get("http://vcm-3581.vm.duke.edu:5003/api/heart_rate/" + email).then( (response) => {
			console.log(response.data.user_data);
			var tableRows = [];
			for(var i = 0; i < response.data.user_data.hr_readings.length; i++){
				tableRows.push([response.data.user_data.email, response.data.user_data.age, response.data.user_data.hr_readings[i], response.data.user_data.readings_ts[i]])
			}

			this.setState({"tableData": tableRows});

		})
	}

	componentDidMount() {
		this.getAutoCompleteEmails()
	}

	render() {
		return (
			<div class="text-input-class-holders">
				<AutoComplete hintText="Email address"
					dataSource={this.state.dataSourceAutoComplete}
					onUpdateInput={this.handleInput}/>
        <section>
				<Button onClick={this.getData} primary={true} label="Get heart rate data" />
        </section>
				<TableExample tableData={this.state.tableData} />
			</div>
		);
	}
}

export default TextInput;
