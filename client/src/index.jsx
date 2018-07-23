import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PlaceOrderForm from './components/PlaceOrderForm.jsx';
import Account from './components/Account.jsx';
import Pricing from './components/Pricing.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return(
      <div class="container col-8">
          <nav class="navbar  navbar-expand-sm  navbar-dark bg-primary">
              <a class="navbar-brand" href="#">Hamper</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Order</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Account</a>
                    </li>
                  </ul>
              </div>
          </nav>
        <Pricing/>
      </div>


    );

  }
}



ReactDOM.render(<App/>, document.getElementById('app'));