import React from 'react';
import axios from 'axios';

export default class Axiosexample extends React.Component {
	state = {
		people: []
	}
	componentDidMount() {
		axios.get(`https://ghibliapi.herokuapp.com/people`)
			.then(res => {
				const people = res.data;
				this.setState({ people });
				console.log("sashwat", people)
			})
			.catch(function (error) {
				// handle error
				console.log("Shivansh", error);
			})
	}

	render() {
		return (
			<ul className="list-group">
				{this.state.people.map(peopledetail => <li className="list-group-item">{peopledetail.name}</li>)}
			</ul>
			
		)
	}
}
