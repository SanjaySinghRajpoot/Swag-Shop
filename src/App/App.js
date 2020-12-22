import React, {Component} from  'react';
import logo from './logo.svg';
import './App.css';
import Product from '../product/product';


import HttpService from '../services/http-service';
import { render } from '@testing-library/react';

const http = HttpService();    //LOCAL HOST NOT WORKING.

class App extends Component {

  constructor(props){
    super(props);

    this.props = props;

     this.state = {products: []};

    //bind the E6 functions 
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);
    this.loadData();
  }

  //getting the data from the dbs and using it.
  loadData = () => {

    var self = this; 
    http.getProducts().then(data => {   // after the promise is complete THEN call this OR error 
      self.setState({products: data})    // set state is going to update everything 
    }, err =>{
      
    });
  } 

 productList = () => {
     const list = this.state.products.map((product) => 
       <div className="col-sm-4"  key={product._id} >
       <Product title={product.title} price={product.price} imgUrl={product.imgUrl} />
       </div>
     );

      return (list);
 } 
  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container App-main" >
              <div className="row">
                {this.productList()}
              </div>              
          </div>   
        </header>
      </div>
    );
  }
}

export default App;
