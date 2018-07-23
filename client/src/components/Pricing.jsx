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
        <div class="col-sm-12 my-4">
          <h2>Price List</h2>
          <table class="table table-striped">
            <thead>
              <tr class="col col-sm-12">
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Wash & Fold</th>
                <td>$1.99/lb</td>
              </tr>
              <tr>
                <th scope="row">Men's Dress Shirt</th>
                <td>$1.99</td>
              </tr>
              <tr>
                <th scope="row">Men's Dress Shirt</th>
                <td>$3.49</td>
              </tr>
              <tr>
                <th scope="row">Blouse</th>
                <td>$3.49</td>
              </tr>
              <tr>
                <th scope="row">T-Shirt or Polo</th>
                <td>$3.49</td>
              </tr>
              <tr>
                <th scope="row">Pants</th>
                <td>$3.49</td>
              </tr>
              <tr>
                <th scope="row">Skirt</th>
                <td>$3.49</td>
              </tr>
              <tr>
                <th scope="row">Shorts</th>
                <td>$3.49</td>
              </tr>
              <tr>
                <th scope="row">Jeans</th>
                <td>$3.99</td>
              </tr>
              <tr>
                <th scope="row">Jacket</th>
                <td>$4.99</td>
              </tr>
              <tr>
                <th scope="row">Dress</th>
                <td>$4.99</td>
              </tr>
              <tr>
                <th scope="row">Long Dress or Gown</th>
                <td>$12.99</td>
              </tr>
              <tr>
                <th scope="row">Sweater</th>
                <td>$5.99</td>
              </tr>
              <tr>
                <th scope="row">Fancy Garment</th>
                <td>$12.99</td>
              </tr>
              <tr>
                <th scope="row">Outerwear Jacket</th>
                <td>$9.99</td>
              </tr>
              <tr>
                <th scope="row">Vest</th>
                <td>$3.49</td>
              </tr>
              <tr>
                <th scope="row">Tuxedo</th>
                <td>$12.99</td>
              </tr>
              <tr>
                <th scope="row">Scarf</th>
                <td>$3.49</td>
              </tr>
              <tr>
                <th scope="row">Necktie or Pocket Square</th>
                <td>$3.49</td>
              </tr>
              <tr>
                <th scope="row">Apron</th>
                <td>$3.49</td>
              </tr>
              <tr>
                <th scope="row">Jump Suit</th>
                <td>$12.99</td>
              </tr>
              <tr>
                <th scope="row">Comforter (Twin/Full)</th>
                <td>$24.99</td>
              </tr>
              <tr>
                <th scope="row">Comforter (Queen/King)</th>
                <td>$34.99</td>
              </tr>
              <tr>
                <th scope="row">Pillow Case</th>
                <td>$4.99</td>
              </tr>
              <tr>
                <th scope="row">Table Cover</th>
                <td>$14.99</td>
              </tr>
              <tr>
                <th scope="row">Bed Sheet</th>
                <td>$14.99</td>
              </tr>
              <tr>
                <th scope="row">Leather Jacket</th>
                <td>$19.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );

  }
}

export default Account;