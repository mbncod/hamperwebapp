import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import moment from 'moment';

class PlaceOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      service: '',
      pickup: '',
      address: '',
      zip: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeService = this.changeService.bind(this);
  }

  handleSubmit(){
    console.log('hello');
  }

  handleChange(name){
    console.log('hello');
  }


  changeService(option) {
    this.setState({
      service: option,
    });
  }
  // pickupDates(){
  //   var date = this.state.pickup;
  //   var html = [];
  //   for(var i = 0; i < 8; i++){
  //     html.push(<option>{moment(date).add(i, 'days')}</option>);
  //   }
  //   return html;
  // }

  render () {
    var pickup = moment(new Date());
    var dropoff = moment(new Date()).add(2, 'days');
    return(
      <div class="row">
        <div class="col-lg-8 col-sm-12  my-4">
          <div class="card">
            <div class="card-body ">
                <h3 class="card-title my-3 mx-3">Schedule a pickup</h3>
                <h6 class="card-title mt-5 my-3 mx-3">Choose a Service</h6>
                <div href="#" class="row my-3 mx-1">
                  <div class= "col-lg-4 col-md-12 my-2">
                    <div class={this.state.service === 'Dry'
                      ? "card border-primary"
                      : "card"}
                      onClick={() => this.changeService('Dry')}>
                      <h6 class="card-title text-center my-3 mx-3">Dry Cleaning</h6>
                    </div>
                  </div>
                  <div class= "col-lg-4 col-md-12 my-2">
                    <div class={this.state.service === 'Wash'
                      ? "card border-primary"
                      : "card"}
                      onClick={() => this.changeService('Wash')} >
                      <h6 class="card-title text-center my-3 mx-3" href="#" >Wash and Fold</h6>
                    </div>
                  </div>
                  <div class= "col-lg-4 col-md-12 my-2">
                    <div href="#" class={this.state.service === 'Both'
                      ? "card border-primary"
                      : "card"}
                      onClick={() => this.changeService('Both')}>
                      <h6 class="card-title text-center my-3 mx-3">Both</h6>
                    </div>
                  </div>
                </div>
                <h6 class="card-title mt-5 my-3 mx-3">Address</h6>
                <div class="row my-3 mx-1">
                  <div class="col-sm-12 mb-4 col-md-8">
                    <input type="address" class="form-control" id="street" aria-describedby="address" placeholder="street and apt"></input>
                  </div>
                  <div class="col">
                    <input type="zip" class="form-control" id="zip" aria-describedby="zip" placeholder="zip code"></input>
                  </div>
                </div>
                <hr></hr>
                <div class="form-group my-3 mx-3">
                  <h6 class="section-header mt-5">Pickup Time</h6>
                  <div class="row">
                    <div class="col-sm-12 mb-4 col-md-6">
                      <select class="form-control" id="exampleFormControlSelect1">
                        <option>{pickup.format("dddd MMM Do")}</option>
                        <option>{pickup.add(1, 'days').format("dddd MMM Do")}</option>
                        <option>{pickup.add(1, 'days').format("dddd MMM Do")}</option>
                        <option>{pickup.add(1, 'days').format("dddd MMM Do")}</option>
                        <option>{pickup.add(1, 'days').format("dddd MMM Do")}</option>
                        <option>{pickup.add(1, 'days').format("dddd MMM Do")}</option>
                        <option>{pickup.add(1, 'days').format("dddd MMM Do")}</option>
                      </select>
                    </div>
                    <div class="col">
                      <select class="form-control" id="exampleFormControlSelect1">
                        <option>8:00 - 10:00AM</option>
                        <option>10:00 - 12:00PM</option>
                        <option>12:00 - 2:00PM</option>
                        <option>2:00 - 4:00PM</option>
                        <option>4:00 - 7:00PM</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-group my-3 mx-3">
                  <h6 class="section-header mt-5">Delivery Time</h6>
                  <div class="row">
                    <div class="col-sm-12 mb-4 col-md-6">
                      <select class="form-control" id="exampleFormControlSelect1">
                        <option>{dropoff.format("dddd MMM Do")}</option>
                        <option>{dropoff.add(1, 'days').format("dddd MMM Do")}</option>
                        <option>{dropoff.add(1, 'days').format("dddd MMM Do")}</option>
                        <option>{dropoff.add(1, 'days').format("dddd MMM Do")}</option>
                        <option>{dropoff.add(1, 'days').format("dddd MMM Do")}</option>
                        <option>{dropoff.add(1, 'days').format("dddd MMM Do")}</option>
                        <option>{dropoff.add(1, 'days').format("dddd MMM Do")}</option>
                      </select>
                    </div>
                    <div class="col">
                      <select class="form-control" id="exampleFormControlSelect1">
                        <option>8:00 - 10:00AM</option>
                        <option>10:00 - 12:00PM</option>
                        <option>12:00 - 2:00PM</option>
                        <option>2:00 - 4:00PM</option>
                        <option>4:00 - 7:00PM</option>
                      </select>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div class="form-group my-3 mx-3">
                  <label class="section-header mt-3" for="exampleFormControlTextarea1">Any Instructions</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-block">Place Order</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 px-0">
          <div class="col-md-12 mt-4">
            <div class= "card border-0">
              <div class="card-body">
                <h6>All services require a $25 minimum plus a $4.99 delivery fee that includes both pickup and delivery.</h6>
              </div>
            </div>
          </div>
          <div class="col-md-12 ">
            <div class= "card border-right-0 border-bottom-0 border-left-0">
              <div class="card-body">
                <div class='row'>
                  <i class="fa fa-check col-1" style={{color: '#6ac7b9'}} aria-hidden="true"></i>
                  <h6 class="col"> FREE laundry bag included on first order</h6>
                </div>
                <div class='row'>
                  <i class="fa fa-check col-1" style={{color: '#6ac7b9'}} aria-hidden="true"></i>
                  <h6 class="col">Affordable pricing model</h6>
                </div>
                <div class='row'>
                  <i class="fa fa-check col-1" style={{color: '#6ac7b9'}} aria-hidden="true"></i>
                  <h6 class="col">High Quality garment care with over 30 years experience!</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );

  }
}

export default PlaceOrderForm;