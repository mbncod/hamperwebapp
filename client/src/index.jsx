import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PlaceOrderForm from './components/PlaceOrderForm.jsx';
import Account from './components/Account.jsx';
import Pricing from './components/Pricing.jsx';
import 'bootstrap';
import './scss/index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Account'
    }
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const {view} = this.state;
    if (view === 'Account') {
      return <Account/>
    } else if (view === 'PlaceOrderForm'){
      return <PlaceOrderForm/>
    } else if (view === 'Pricing'){
      return <Pricing/>
    }
  }

  render () {
    return(
      <div class="container col-8">
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
              <a class="navbar-brand" href="#">Hamper</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#" onClick={() => this.changeView('PlaceOrderForm')}>Order</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onClick={() => this.changeView('Pricing')}>Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onClick={() => this.changeView('Account')}>Account</a>
                    </li>
                  </ul>
              </div>
          </nav>
        {this.renderView()}
      </div>


    );

  }
}



ReactDOM.render(<App/>, document.getElementById('app'));