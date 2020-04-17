import './../App.css';
import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import AddUsers from './AddUsers';
import { v4 as uuidv4 } from 'uuid';
import Data from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      data: Data,
      value: '',
      statusEdit: false,
      objectEdit: {}
    }
  }

  changeStatus = () => {
    this.setState({
      status: !this.state.status
    });
  }

  receiveValue = (searchValue) => {
    this.setState({
      value: searchValue
    });
  }

  getUserInfo = (name, phone, permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.phone = phone;
    item.permission = parseInt(permission);
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
  }


  isChangeStatusEdit = () => {
    this.setState({
      statusEdit: !this.state.statusEdit,
    });
    // console.log(edited);
  }

  userInforEdit = (infoEdit) => {
    // alert('Da nhan duoc thong tin');
    // console.log(infoEdit);
    this.setState({
      objectEdit: infoEdit
    });
  }

  getUserEdit = (edited) => {

    this.state.data.forEach((val, key) => {
      if (edited.id === val.id) {
        val.id = edited.id;
        val.name = edited.name;
        val.phone = edited.phone;
        val.permission = parseInt(edited.permission);
      }
    })
  }

  deleteUser = (infoUserDelete) => {
    // console.log("da lay dk id " + infoUserDelete);
    // if (this.state.data.id === infoUserDelete) {
    var tempValue = this.state.data.filter((val) => val.id !== infoUserDelete)
    this.setState({
      data: tempValue
    });
    // }
  }

  result = () => {

    var result = [];
    this.state.data.forEach((item) => {
      if (!item.name.indexOf(this.state.value)) {
        result.push(item)
      }
    })
    return result;
  }

  render() {

    return (
      <div>
        <Header />
        <div className="container my-5">
          <div className="row">
            <Search
              valueTransmission={this.receiveValue.bind(this)}

              changeStatus={this.changeStatus.bind(this)}
              status={this.state.status}

              saveClick={this.isChangeStatusEdit.bind(this)}
              statusEdit={this.state.statusEdit}
              objectEdit={this.state.objectEdit}
              getUserEdit={this.getUserEdit.bind(this)}
            />
            <Table
              // dataUser={this.state.data}
              dataUser={this.result()}
              userInforEdit={(infoEdit) => this.userInforEdit(infoEdit)}

              editClick={this.isChangeStatusEdit.bind(this)}

              deleteUser={this.deleteUser.bind(this)}
            />
            <AddUsers
              status={this.state.status}
              userInfo={(name, phone, permission) => this.getUserInfo(name, phone, permission)}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;