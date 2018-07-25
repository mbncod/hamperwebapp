import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
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

  renderView() {
    const {view} = this.state;
    if (view === 'all') {
      return <All/>
    } else if (view === 'laundry'){
      return <Laundry/>
    } else if (view === 'dry'){
      return <Dry/>
    }
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  render () {
    return(
      <div class="row">
        <div class="col-sm-12 my-4">
          <h2 class="mb-3">Price List</h2>
          <div class="my-4">
            <input class="btn mr-3" type="button" value="All" onClick={() => this.changeView('all')}></input>
            <input class="btn mr-3" type="submit" value="Laundry" onClick={() => this.changeView('laundry')}></input>
            <input class="btn mr-3" type="reset" value="Dry Clean" onClick={() => this.changeView('dry')}></input>
          </div>
          {this.renderView()}
        </div>
      </div>
    );

  }
}

class All extends React.Component {
  render() {
    return(
    <div class="row mx-1">
      <table class="table table-striped col-md-6 col-sm-12">
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
        </tbody>
      </table>

      <table class="table table-striped col-md-6 col-sm-12">
        <tbody>
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
    )
  }
}

class Laundry extends React.Component {
  render() {
    return(
      <table class="table table-striped">
        <tbody>
          <tr>
            <th scope="row">Wash & Fold</th>
            <td>$1.99/lb</td>
          </tr>
          <tr>
            <th scope="row">Men's Dress Shirt</th>
            <td>$1.99</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

class Dry extends React.Component {
  render() {
    return(
      <table class="table table-striped">
        <tbody>
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
    )
  }
}

export default Pricing;