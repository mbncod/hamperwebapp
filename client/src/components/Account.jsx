import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render () {
    return(
      <div class="row">
        <div class="col-sm-12 mt-3 col-md-3 mt-5">
            <ul class="nav flex-column nav-pills">
                <li class="nav-item">
                    <a class="nav-link" href="#">Edit Info</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Payments</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Change Password</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Logout</a>
                </li>
            </ul>
        </div>
        <div class="col">
          <div class="card mt-5">
            <div class="card-body">
              <h5 class="card-title">Basic Information</h5>
                <form class="form-horizontal">
                  <div class="row form-group-lg form-group">
                    <label class="col-sm-4 col-md-3 control-label">Email
                    </label>
                    <div class="col">
                      <p>mubeenali797@yahoo.com</p>
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
                  <div class="form-group-lg form-group">

                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default Account;