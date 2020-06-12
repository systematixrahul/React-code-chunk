import React from 'react';
import axios from 'axios';

function Home() {
  return (
    <div>
        <div className="container text-center">
      <div className="row content">
        <div className="col-sm-12 text-left">
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <hr />
          <h3>Test</h3>
          <p>Lorem ipsum...</p>
        </div>
        <div className="col-sm-2 sidenav">
          <div className="well">
            <p>ADS</p>
          </div>
          <div className="well">
            <p>ADS</p>
          </div>
        </div>
      </div>
    </div>
    <footer className="container-fluid text-center">
      <p>Footer Text</p>
    </footer>
    </div>
    )
}

export default Home;