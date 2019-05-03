import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Cart from './components//Cart'
import Details from './components/Details'
import Default from './components/Default'
import Modal from './components/Modal'

import fire from './config/Fire';
import Home from './Home';
import Login from './Login';

class App extends Component {

  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      // <React.Fragment>
      //   <Header/>
      //   <Switch>
      //     <Route exact path="/" component={MainContent} />
      //     <Route path="/details" component={Details} />
      //     <Route path="/cart" component={Cart} />
      //     <Route component={Default} />
      //   </Switch>
      //   <Footer/>
      //   <Modal />
      // </React.Fragment>
      <div>{this.state.user ? 
          ( <React.Fragment>
            <Header/>
            <Switch>
              <Route exact path="/" component={MainContent} />
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route component={Default} />
            </Switch>
            <Footer/>
            <Modal />
          </React.Fragment>
          ) : 
          (<Login />)}</div>
    )
  }
}

export default App;
