import React, { useState, useEffect } from 'react';
import axios from 'axios';


function UserDetail() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				'https://ghibliapi.herokuapp.com/people',
			);
			setData(result.data);
		};

		fetchData();
	}, []);

	return (
		<div className="table-responsive">
			<h1>User Data</h1>
			<table className="table table-bordered">
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Gender</th>
					<th>Age</th>
					<th>Eye Color</th>
					<th>Hair Color</th>
					<th>Films</th>
					<th>Species</th>
					<th>Action</th>
				</tr>
				{data.map(item => (
					<tr key={item.id}>
						<td>{item.id}</td>
						<td>{item.name}</td>
						<td>{item.gender}</td>
						<td>{item.age}</td>
						<td>{item.eye_color}</td>
						<td>{item.hair_color}</td>
						<td>{item.films}</td>
						<td>{item.species}</td>
						<td>
							<div className="dropdown">
								<a className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Action
  					</a>
								<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a className="dropdown-item" href="#">View</a>
									<a className="dropdown-item" href="#">Edit</a>
									<a className="dropdown-item" href="#">Delete</a>
								</div>
							</div>
						</td>
					</tr>
				))}
			</table>
		</div>

	);
}

export default UserDetail;

