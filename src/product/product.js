import React, {Component} from 'react';
import './product.css';

class Product extends Component {
    render(){   // render= show on screen
        return(
            <div className="card Product">
                <img className="card-img-top" src={this.props.imgUrl} alt="Product">  </img>
                <div className="card-block">
                    <h4 className="card-title" src={this.props.title}>  </h4>
                    <p className="card-text">Price: ${this.props.price}</p>
                    <a href="#" className="btn btn-primary"> Add to WishList. </a>
                </div>
            </div>
        );
    }
}

export default Product;