import React from 'react';
import './../css/App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './AddUser';
import Data from './Data.json';
import { v4 as uuidv4 } from 'uuid';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      dataUse: Data,
      searchText: '',
      editUserStatus: false,
      userEditObject: {},
    }
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }


  getSearchText = (data) => {
    this.setState({
      searchText: data
    });
  }

  getUserData = (name, phone, permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.phone = phone;
    item.permission = parseInt(permission);
    var items = this.state.dataUse;
    items.push(item);
    this.setState({
      dataUse: items
    });
    console.log(items);
  }


  editUser = (user) => {
    // console.log("Da ket noi");
    this.setState({
      userEditObject: user
    });
    // console.log(user);
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  getUserEditInfoForApp = (info) => {
    // console.log('Thong tin da sua xong la '+ info.name);

    this.state.dataUse.forEach((val, key) => {
      // console.log(val.name);
      if (val.id === info.id) {
        val.name = info.name;
        val.phone = info.phone;
        val.permission = parseInt(info.permission);
      }
    })

  }


  deleteUser = (idUser) => {
    // console.log(idUser);
    //Ham filter
    /*  var arr = [1, 2, 3, 4, 5];
     var x = 2;
     arr = arr.filter(item => item !== x);
     console.log(arr); */

    // console.log(idUser);
    var tempData = this.state.dataUse.filter(item => item.id !== idUser);
    this.setState({
      dataUse: tempData
    });

    /*     tempData.forEach((val, key) => {
    
    
          if (val.id === idUser) {
            // console.log(val.name);
    
          }
        }) */
  }
  render() {

    var ketqua = [];
    this.state.dataUse.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    })

    return (
      <div className="App">
        <Header />
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <SearchForm
                checkConnectProps={this.getSearchText.bind(this)}

                ketNoi={this.doiTrangThai.bind(this)}
                hienThiForm={this.state.hienThiForm}

                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={this.changeEditUserStatus.bind(this)}
                userEditObject={this.state.userEditObject}
                getUserEditInfoForApp={(info) => { this.getUserEditInfoForApp(info) }}

              />
            </div>{/* col-12 */}
            <TableData
              editFun={this.editUser.bind(this)}
              changeEditUserStatus={this.changeEditUserStatus.bind(this)}

              dataUseProps={ketqua}

              deleteUser={(idUser) => { this.deleteUser(idUser) }}

            />
            <AddUser

              hienThiForm={this.state.hienThiForm}

              add={(name, phone, permission) => this.getUserData(name, phone, permission)}

            />
          </div>{/* row */}
        </div>{/* container */}
      </div>
    );
  }
}

export default App;
