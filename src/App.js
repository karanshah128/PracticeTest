
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BackgroundLoader from './BackgroundLoader';
import Login from "./Component/Login/View/Login";
import Navigation from "./Component/Navigation/View/Navigation";
import Home from "./Component/Home//View/Home";
import Information from "./Component/Information/View/Information"
import DropDown from "./Component/DropDown/View/DropDown"
import User from "./Component/User/View/User"
import Task from "./Component/Task/View/Task"
import { StateProvider } from './Context';
import ErrorBoundary from './ErrorBoundary';
import './font-awesome/css/font-awesome.css';
import PrivateRoutes from './PrivateRoutes';




class App extends Component {

  componentDidCatch(err) {

    this.props.history.push({
      pathname: '/',
    });
  }

  render() {
    return (

      <ErrorBoundary>
        <React.Suspense fallback={<BackgroundLoader />}>
          <StateProvider>
            <BrowserRouter >
              <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoutes>
                  <Switch>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Navigation" component={Navigation} />
                    <Route exact path="/DropDown" component={DropDown} />
                    <Route exact path="/Information" component={Information} />
                    <Route exact path ="/Task" component ={Task}/>
                    <Route exact path ="/User" component={User}/>
                  </Switch>
                </PrivateRoutes>


              </Switch>
            </BrowserRouter>
          </StateProvider>
        </React.Suspense>
      </ErrorBoundary>



    );
  }
}

export default App;