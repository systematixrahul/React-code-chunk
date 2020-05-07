import React from 'react';
import axios from 'axios';

class Axiosputexample extends React.Component {
	state = {
		people: []
	}
	componentDidMount() {
		axios.put(`https://ghibliapi.herokuapp.comx/people`)
			.then(res => {
				const people = res.data;
				this.setState({ people });
				console.log("sashwat", people)
			})
			.catch(function (error) {
				// handle error
				console.log("Shivansh Put", error);
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

export default Axiosputexample;