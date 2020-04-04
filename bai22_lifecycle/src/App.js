import React, { Component } from 'react';
import './App.css';
import Props from './Props';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: "Khoi tao",
      trangthai2: "Khoi tao 2"
    }
  }


  componentWillMount() {
    console.log('componentWillMount Đang chạy');
  }

  componentDidMount() {
    console.log('ComponentDidMout da chay roi');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate da chay roi');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate da chay roi');

  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate da chay roi');

  }

  capnhatSate  = () => {
   this.setState({
     trangthai:" Trang thai da duoc update 1",
     trangthai2:" Trang thai da duoc update 2"
   });
  }


  render() {
    console.log('Đây là hàm render đã chạy');
    console.log(this.state.trangthai);
    return (
      <div className = 'abc'> 
        <button onClick={() => this.capnhatSate()}>Click Update</button>
        <Props name={this.state.trangthai2}></Props>
      </div>
    );
  }
}




export default App;
