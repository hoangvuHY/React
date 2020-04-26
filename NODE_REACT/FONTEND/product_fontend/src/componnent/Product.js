import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="col-3 my-3">
                <div className="card text-left">
                    <img className="card-img-top" src={this.props.image}
                        alt='' />
                    <div className="card-body">
                        <b className="card-title float-left">
                            {this.props.product_name}
                        </b>
                        <i className="card-title float-right">

                            {this.props.product_price}
                        </i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;