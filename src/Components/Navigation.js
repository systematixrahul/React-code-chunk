import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

const Navigation = (props) => (
	<div id="myNav" className="overlay">
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">Systematix infotechg</a>
				</div>
				<ul className="nav navbar-nav">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/Userdata">Userdata</Link></li>
					<li><Link to="/UserPostData">Postdata</Link></li>
					<li><Link to="/AddTutorial">Add Tutorial</Link></li>
					<li><Link to="/Tutorial">Tutorial</Link></li>
					<li><Link to="/TutorialsList">Tutorials List</Link></li>
					<li><Link to="/ToDoList">Todo List</Link></li>
				</ul>
			</div>
		</nav>
	</div>
);

export default Navigation;
