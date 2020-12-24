import React, {Component} from 'react';
import './wishlist.css';

class WishList extends Component(){
    render(){   // render= show on screen
        return(
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title" src={this.props.title}> Wish List </h4>
                    <ul className="list-group">
                    </ul>

                </div>
            </div>
        );
    }
}

export default WishList;