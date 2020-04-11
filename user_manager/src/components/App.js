import React from 'react';
import './../css/App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './AddUser';
import Data from './Data.json';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      dataUse: Data,
      searchText: ''
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
  render() {

    var ketqua = [];
    this.state.dataUse.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    })
    console.log(ketqua);

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
              />
            </div>{/* col-12 */}
            <TableData dataUseProps={ketqua} />
            <AddUser hienThiForm={this.state.hienThiForm} />
          </div>{/* row */}
        </div>{/* container */}
      </div>
    );
  }
}

export default App;
