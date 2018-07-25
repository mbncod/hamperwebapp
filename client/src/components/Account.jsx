import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'info',
      address: '',
      zip: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    console.log('hello');
  }

  handleChange(name){
    console.log('hello');
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const {view} = this.state;
    if (view === 'info') {
      return <Info/>
    } else if (view === 'payments'){
      return <Payments/>
    } else if (view === 'password'){
      return <Password/>
    }
  }

  render () {
    return(
      <div class="row">
        <div class="col-sm-12 col-md-3 my-md-5 my-sm-1">
            <ul class="nav flex-column nav-pills">
                <li class="nav-item">
                    <a class={this.state.view === 'info'
                      ? 'nav-link active'
                      : 'nav-link'} href="#" onClick={() => this.changeView('info')}>Edit Info</a>
                </li>
                <li class="nav-item">
                    <a class={this.state.view === 'payments'
                      ? 'nav-link active'
                      : 'nav-link'} href="#" onClick={() => this.changeView('payments')}>Payments</a>
                </li>
                <li class="nav-item">
                    <a class={this.state.view === 'password'
                      ? 'nav-link active'
                      : 'nav-link'} href="#" onClick={() => this.changeView('password')}>Change Password</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Logout</a>
                </li>
            </ul>
        </div>
        <div class="col">
          <div class="card mt-md-5 mt-sm-1">
            <div class="card-body">
              {this.renderView()}
            </div>
          </div>
        </div>
      </div>
    );

  }
}

class Info extends React.Component {
  render() {
    return (
      <div>
      <h5 class="card-title">Basic Information</h5>
        <form class="form-horizontal">
          <div class="row form-group-lg form-group">
            <label class="col-sm-4 col-md-3 control-label">Email
            </label>
            <div class="col">
              <p class="mb-0">mubeenali797@yahoo.com</p>
            </div>
          </div>
          <div class="row form-group-lg form-group">
            <label class="col-sm-4 col-md-3 control-label">First Name
            </label>
            <div class="col">
              <input type="text" name="last_name" value="Mubeen" placeholder="Last Name" id="last_name" class="input-lg form-control">
              </input>
            </div>
          </div>
          <div class="row form-group-lg form-group">
            <label class="col-sm-4 col-md-3 control-label">Last Name
            </label>
            <div class="col">
              <input type="text" name="last_name" value="Ali" placeholder="Last Name" id="last_name" class="input-lg form-control">
              </input>
            </div>
          </div>
          <div class="row form-group-lg form-group">
            <label class="col-sm-4 col-md-3 control-label">Mobile
            </label>
            <div class="col">
              <input type="tel" value="832 526 2038" class="form-control input-lg" name="phone_number" placeholder="Mobile Number" data-cleave-ignore="832 526 2038,[object Object],,function () { [native code] },,"></input>
            </div>
          </div>
          <div class="row form-group-lg form-group">
            <label class="col-sm-4 col-md-3 control-label">Address
            </label>
            <div class="col-sm-8 mb-3 col-md-6">
              <input type="address" class="form-control" id="street" aria-describedby="address" placeholder="street and apt"></input>
            </div>
            <div class="col-sm-8 offset-sm-4 offset-md-0 pl-3 col-md-3 pl-md-0">
              <input type="zip" class="form-control" id="zip" aria-describedby="zip" placeholder="zip code"></input>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

class Payments extends React.Component {
  render() {
    return (
      <div>
      <h5 class="card-title">Payment Method</h5>
        <form class="form-horizontal">
          <div class="row form-group-lg form-group">
            <label class="col-sm-4 col-md-3 control-label">Current Card
            </label>
            <div class="col">
              <strong class="mb-0">VISA ending in 4444</strong>
            </div>
          </div>
          <div class="row form-group-lg form-group">
            <label class="col-sm-4 col-md-3 control-label">New Card
            </label>
            <div class="col">
              <input type="text" name="last_name" value="" placeholder="Enter New Card Number" id="last_name" class="input-lg form-control">
              </input>
            </div>
          </div>
          <div class="row form-group-lg form-group">
            <label class="col-sm-4 col-md-3 control-label">
            </label>
            <div class="col-sm-8 mb-3 col-md-3">
              <input type="address" class="form-control" id="street" aria-describedby="address" placeholder="MM/YY"></input>
            </div>
            <div class="col-sm-8 offset-sm-4 offset-md-0 mb-3 col-md-3 pl-md-0">
              <input type="address" class="form-control" id="street" aria-describedby="address" placeholder="CCV"></input>
            </div>
            <div class="col-sm-8 offset-sm-4 offset-md-0 pl-3 col-md-3 pl-md-0">
              <input type="zip" class="form-control" id="zip" aria-describedby="zip" placeholder="zip code"></input>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

class Password extends React.Component {
  render() {
    return (
      <div>
      <h5 class="card-title">Change Password</h5>
        <form class="form-horizontal">
          <div class="row form-group-lg form-group">
            <label class="col-sm-4 col-md-3 control-label">Current Password
            </label>
            <div class="col">
              <input type="text" name="last_name" placeholder="enter current password" id="last_name" class="input-lg form-control">
              </input>
            </div>
          </div>
          <div class="row form-group-lg form-group">
            <label class="col-sm-4 col-md-3 control-label">New Password
            </label>
            <div class="col">
              <input type="text" name="last_name" placeholder="enter new password" id="last_name" class="input-lg form-control">
              </input>
            </div>
          </div>
          <div class="row form-group-lg form-group">
            <label class="col-sm-4 col-md-3 control-label">Retype New
            </label>
            <div class="col">
              <input type="text" name="last_name" placeholder="retype new password" id="last_name" class="input-lg form-control">
              </input>
            </div>
          </div>
          <div class="form-group-lg form-group">

          </div>
        </form>
      </div>
    )
  }
}

export default Account;