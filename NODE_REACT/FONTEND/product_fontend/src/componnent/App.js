
import React, { Component } from 'react';
import HeaderTitle from './HeaderTitle';
import Product from './Product';
// import dataProducts from 'http://localhost:5000/getdata01';
import axios from 'axios';
// import AddProduct from './AddProduct';
/* 
const getProductData = () => {
  return (
    axios.get('http://localhost:5000/getdata01')
      .then(function (response) {
        return response.data;
      })
  )
} */

const getProductData = () => axios.get('/getdata01').then((res) => res.data);


const addProductAction = (product_name, product_price, image) =>
  (axios.post('/add', { product_name, product_price, image })
    .then((resp) => resp.data));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentWillMount() {
    if (!this.state.data) {
      //res is Data
      getProductData().then((res) => {
        this.setState({
          data: res,

          product_name: '',
          product_price: '',
          image: '',
        })
      })
    }
  }

  printData = () => {
    if (this.state.data) {
      return (
        this.state.data.map((val, key) => {
          return (
            <Product
              key={key}

              id={val.id}
              product_name={val.product_name}
              product_price={val.product_price}
              image={val.image}
            />
          )
        })
      )

    }
  }


  isChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value
    })
  }
  handleClick = () => {
    // console.log(JSON.stringify(this.state));
    var { product_name, product_price, image } = this.state;
    /*     addProductAction(product_name, product_price, image)
          .then((response) => {
            console.log(response);
          }) */

    var dataTemp = [];
    var item = {};
    item.product_name = product_name;
    item.product_price = product_price;
    item.image = image;

    // console.log(dataTemp);

    dataTemp = this.state.data;
    if (item.product_name !== '') {

      dataTemp.push(item);
      this.setState({
        data: dataTemp
      })
    }

    // console.log(dataTemp);
  }

  render() {/* 
    axios.get('http://localhost:5000/getdata01')
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
 */

    // console.log(this.state.data);
    return (
      <div>
        <HeaderTitle />
        {/* <AddProduct /> */}
        <div className="container-fluid ">
          <div className="row">
            <div className="col">
              <div className="row">

                {
                  this.printData()
                }
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                <div className="ml-3">
                  <form  >
                    <div className="form-group">
                      <label htmlFor="product_name">Tên sản phẩm</label>
                      <input onChange={this.isChange.bind(this)} type="text" className="form-control" name="product_name" id="product_name" aria-describedby="name_text" placeholder="Nhập tên sản phẩm" />
                      <small id="name_text" className="form-text text-muted">Nhập text zô</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="product_price">Giá sản phẩm</label>
                      <input onChange={this.isChange.bind(this)} type="text" className="form-control" name="product_price" id="product_price" aria-describedby="name_text" placeholder="Nhập giá sản phẩm" />
                      <small id="name_text" className="form-text text-muted">Nhập text zô</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="image">Đường link ảnh sản phẩm</label>
                      <input onChange={this.isChange.bind(this)} type="text" className="form-control" name="image" id="image" aria-describedby="name_text" placeholder="Nhập ảnh sản phẩm" />
                      <small id="name_text" className="form-text text-muted">Nhập link ảnh zô</small>
                    </div>
                    <button onClick={this.handleClick.bind(this)} type="reset" className="btn btn-block btn-info">Thêm mới</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;