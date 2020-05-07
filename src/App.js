import React from 'react';
import logo from './logo.svg';
import './App.css';
import Userdata from './Components/Data'
import Axiosexample from "./Components/Axiosget"
import Axiospostexample from './Components/Axiospost'
import Axiosdeleteexample from './Components/Axiosdelete'
import Axiosputexample from './Components/Axiosput'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <Userdata />*/}<br/><br/> 
            {/* <Axiosexample /><br/><br/>  */}
            <Axiospostexample />
     
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
