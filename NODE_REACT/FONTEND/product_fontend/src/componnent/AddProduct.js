// import React, { Component } from 'react';
// import axios from 'axios';

// /* 
// const AddProductAction = (product_name, product_price, image) => {
//     return (
//         axios.post('http://localhost:5000/add', { product_name, product_price, image })
//             .then((response) => response.data)
//     )
// } */


// const addProductAction = (product_name, product_price, image) =>
//     (axios.post('/add', { product_name, product_price, image })
//         .then((resp) => resp.data))

// class AddProduct extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }
//     isChange = (event) => {
//         var name = event.target.name;
//         var value = event.target.value;
//         this.setState({
//             [name]: value
//         })
//     }
//     handleClick = () => {
//         console.log(JSON.stringify(this.state));
//         var { product_name, product_price, image } = this.state;
//         addProductAction(product_name, product_price, image)
//             .then((response) => {
//                 console.log(response);
//             })
//     }
//     render() {
//         // console.log(this.state);
//         return (
//             <div className="container">
               
//             </div>

//         );
//     }
// }

// export default AddProduct;