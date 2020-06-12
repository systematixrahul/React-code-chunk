import React from 'react';
import { BrowserRouter as Roter, Route, Switch, Link } from 'react-router-dom'
import Userdata from './Components/Data'
import Axiospostexample from './Components/Axiospost'
import CreateRoutes from './Components/Routes'
import Navigation from './Components/Navigation'
//Context API
// import LocaleProvider from './Components/context/Contextapi';
// import Greeting from './Components/Greeting';
// import ToggleLocale from './Components/ToggleLocale';


function App() {
	return (
		<Roter>
			<div className="App">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							{/* <Userdata />
            <Axiosexample />
            <Axiospostexample /> 
            {/* <LocaleProvider>
         		 <Greeting />
          		<ToggleLocale />
        			</LocaleProvider> */}
							<header>
								<Navigation />
								<Switch>
									<CreateRoutes />
								</Switch>
							</header>
						</div>
					</div>
				</div>
			</div>
		</Roter>
	);
}

export default App;
