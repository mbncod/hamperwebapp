import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class PlaceOrderForm extends React.Component {
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
        <div class="col-sm-12 col-md-8 my-4">
          <div class="card">
            <div class="card-body ">
                <h3 class="card-title my-3 mx-3">Schedule a pickup</h3>
                <h6 class="card-title mt-5 my-3 mx-3">Choose a Service</h6>
                <div class="row my-3 mx-1">
                  <div class= "col-lg-4 col-md-12 my-2">
                    <div class="card">
                      <h6 class="card-title text-center my-5 mx-3">Dry Cleaning</h6>
                    </div>
                  </div>
                  <div class= "col-lg-4 col-md-12 my-2">
                    <div class="card">
                      <h6 class="card-title text-center my-5 mx-3">Wash and Fold</h6>
                    </div>
                  </div>
                  <div class= "col-lg-4 col-md-12 my-2">
                    <div class="card">
                      <h6 class="card-title text-center my-5 mx-3">Both</h6>
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
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
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
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
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
        <div class="col my-4">
          <div class= "card">
            <div class="card-body">
              <h6>FREE pickup and delivery</h6>
              <h6>FREE laundry bag</h6>
              <h6>Knowledgable Support</h6>
            </div>
          </div>
        </div>

      </div>

    );

  }
}

export default PlaceOrderForm;