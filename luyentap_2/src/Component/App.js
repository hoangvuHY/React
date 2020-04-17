import '../App.css';

import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import AddUser from './AddUser';
import Data from "./Data.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Đóng mở thanh thêm mới người 
      statusAdd: true,
      data: Data,
    }
  }

  //Thay đổi trạng thái Add và Close
  changeStatusAddClose = () => {
    this.setState({
      statusAdd: !this.state.statusAdd
    });
  }
  /**
   * Thêm dữ liệu vào trong bảng
   * Viết Data.json
   * Cho vào trạng thái
   * Chuyển xuống TableData
   */

  render() {

    // console.log(this.state.statusAdd); //Kiểm tra trạng thái của thêm và đóng
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <Search
              //Truyền vào để hiển thị đóng mở
              statusAdd={this.state.statusAdd}
              //Đổi trạng thái khi click vào
              changeStatusAddClose={() => this.changeStatusAddClose()}
            />
            <Table
            />
            <AddUser
              //Thay đổi trạng thái để hiện thị form
              statusAdd={this.state.statusAdd}
            />
          </div>{/* End row */}
        </div>{/* End container */}

      </div>
    );
  }
}

export default App;