import React from 'react';
import axios from 'axios';

class Axiospostexample extends React.Component {
	state = {
		gender: ''
	}

	handleChange = event => {
		this.setState({
			gender: event.target.value
		})
	}
	handleSubmit = event => {
		event.preventDefault();
		const gender = {
			gender: this.state.gender
		};

		axios.post(`https://5d6f9c56482b530014d2e551.mockapi.io/Users`, gender)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(function (error) {
				// handle error
				console.log("Shivansh", error);
			})
	}

	updateData() {
		const data = {
			"title": "",
			"body": ""
		}
		axios.put(`https://5d6f9c56482b530014d2e551.mockapi.io/Users/22`, data)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(function (error) {
				// handle error
				console.log("Shivansh 2", error);
			})
	}

	deleteData(id) {
		const data = {
			"title": "",
			"body": ""
		}
		axios.delete(`https://5d6f9c56482b530014d2e551.mockapi.io/Users`)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(function (error) {
				// handle error
				console.log("Shivansh 2", error);
			})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Title:
              <input type="text" name="title" onChange={this.handleChange} />
					</label>
					<button type="submit">Post Data</button>
				</form>
				<button onClick={this.updateData}>Update Data</button>
				<button onClick={this.deleteData}>Delete Data</button>
			</div>

		)
	}
}

export default Axiospostexample;