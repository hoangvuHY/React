import '../App.css';

import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import AddUser from './AddUser';
import Data from "./Data.json";
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Đóng mở thanh thêm mới người 
      statusAdd: true,
      data: Data,
      valueSearchs: '',
      statusEdit: false,
      objectEdit: {},
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
  //Chức năng Search
  /**
   * 
   */
  searchUser = (valueSearch) => {
    this.setState({
      valueSearchs: valueSearch
    });
  }


  result = () => {
    var res = [];
    this.state.data.forEach((val, key) => {
      if (!val.name.indexOf(this.state.valueSearchs)) {
        res.push(val);
      }
    })
    return res;
  }
  addOnClick = (name, phone, permission) => {
    //Làm cách này phải truyền 3 tham số name,phone,permission
    var objectAdd = {};
    objectAdd.id = uuidv4();
    objectAdd.name = name;
    objectAdd.phone = phone;
    objectAdd.permission = parseInt(permission);

    //Đầu tiên đó là phải đầy mảng vào trong data
    this.state.data.push(objectAdd);
    // Cập nhật mảng mới đó
    this.setState({
      data: this.state.data
    });
  }
  //Làm chức năng sửa
  /**
   * Đầu tiên lấy dữ liệu chuyển lên App
   * Tiếp đó dữ liệu được chuyển vào form edit
   * Sửa dữ liệu ở form edit và đóng gói lên App
   * So sánh ID nếu bằng thì sẽ cho ra màn hình
   */
  changeStatusEdit = () => {
    this.setState({
      statusEdit: !this.state.statusEdit
    });
  }

  infoEdit = (infoUserEdit) => {
    this.setState({
      objectEdit: infoUserEdit
    });
  }
  getUserEdit = (infoUserEdit) => {
    console.log("Da nhan duoc");
    // console.log(infoUserEdit);
    this.state.data.forEach((val, key) => {
      if (val.id === infoUserEdit.id) {
        val.name = infoUserEdit.name;
        val.phone = infoUserEdit.phone;
        val.permission = infoUserEdit.permission;
      }
    })
  }
  //Làm chức năng xóa
  /**
   * Lấy dữ liệu khi bấm vào nút xóa
   */
  deleteUser = (infoDelete) => {
    //Lọc các thông tin có trùng ID
    this.setState({
      data: this.state.data.filter(val => val.id !== infoDelete)
    });
  }

  render() {
    // console.log(this.state.statusAdd); //Kiểm tra trạng thái của thêm và đóng
    // console.log(typeof (this.state.data));
    // console.log(this.state.objectEdit);

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
              //Lấy dữ liệu khi bấm vào Search
              searchUser={(valueSearch) => this.searchUser(valueSearch)}
              //Thay đổi trạng thái của Edit
              changeStatusEdit={() => this.changeStatusEdit()}
              //Ẩn hiện form Edit
              statusEdit={this.state.statusEdit}
              //Cho thông tin vào form Edit
              objectEdit={this.state.objectEdit}
              // Lấy thông tin của người dùng đã chỉnh sửa
              getUserEdit={(infoUserEdit) => this.getUserEdit(infoUserEdit)}
            />
            <Table
              //Truyền data xuống hàm DataTable thông qua props
              data={this.result()}
              //Lấy thông tin cần sửa
              infoEdit={(infoUserEdit) => this.infoEdit(infoUserEdit)}
              //Thay đổi trạng thái của Edit
              changeStatusEdit={() => this.changeStatusEdit()}
              //Lấy thông tin khi bấm vào xóa
              deleteUser={(infoDelete) => this.deleteUser(infoDelete)}
            />
            <AddUser
              //Thay đổi trạng thái để hiện thị form
              statusAdd={this.state.statusAdd}
              //Nhận các thông tin bằng các biến
              addOnClick={(name, phone, permission) => this.addOnClick(name, phone, permission)}
            />
          </div>{/* End row */}
        </div>{/* End container */}

      </div>
    );
  }
}

export default App;