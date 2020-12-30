import React, {Component} from 'react';
import './wishlist.css';
import ProductCondensed from '../product-condensed/product-condensed';


class WishList extends Component(){
    
   constructor (props){
       super(props);

       this.state = {wishList:[
              { 
                title:"Christmas",
                price:23.43,
                _id:"sfdaser"
             },
             { 
                title:"Toy!",
                price:67.76,
                _id:"sfdsdfas"
             }
        ]}
       //bind the functio n
       this.createWishList = this.createWishList.bind(this);
   }


    createWishList  = () => {
          const list = this.state.wishList.map((product) =>
          <ProductCondensed product = {product} key={product._id} /> 
          );
  
           return (list); 

    }
    

    render(){   // render= show on screen
        return(
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title" src={this.props.title}> Wish List </h4>
                    <ul className="list-group">
                       {this.createWishList()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default WishList;