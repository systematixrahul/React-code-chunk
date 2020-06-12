import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Userdata from './Data'
import AddTutorial from "./tutorial-crud/AddTutorial";
import Tutorial from "./tutorial-crud/Tutorial";
import TutorialsList from "./tutorial-crud/TutorialsList";
import UserPostData from "./Axiospost";
import ToDoList from "./todo/todo"


const createRoutes = () => (
  <Switch>
    {/* <Route exact path="/" render={(props) => (
            <Home cards={this.state.cards}/>
          )}  /> */}
    <Route exact path="/" component={Home} />
    <Route exact path="/Userdata" component={Userdata} />
    <Route exact path="/UserPostData" component={UserPostData} />
    <Route exact path="/AddTutorial" component={AddTutorial} />
    <Route exact path="/Tutorial" component={Tutorial} />
    <Route exact path="/TutorialsList" component={TutorialsList} />
    <Route exact path="/ToDoList" component={ToDoList} />
   
  </Switch>

)
export default createRoutes;


