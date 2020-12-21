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

    //bind the E6 functions 
    this.loadData = this.loadData.bind(this);

    this.loadData();
  }


  //getting the data from the dbs and using it.
  loadData = () => {
        http.getProducts().then(products => {   // after the promise is complete THEN call this OR error 
        console.log(products);
           
        }, err =>{

        });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container App-main" >
              <div className="row">
              <Product price="5.12" title="Gun " imgUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fsoft-bullet-toy-gun-17091725833.html&psig=AOvVaw2w8XOf--94xoXsIFXWHSxF&ust=1608637873407000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNi395mB3-0CFQAAAAAdAAAAABAD"/> 
              </div>              
          </div>   
        </header>
      </div>
    );
  }
}

export default App;
