import './../App.css';
import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import AddUsers from './AddUsers';
import Data from './data.json';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      data: Data,
      value: ''
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

  render() {
    var result = [];
    this.state.data.forEach((item) => {
      if (!item.name.indexOf(this.state.value)) {
        result.push(item)
      }
    })

    return (
      <div>
        <Header />
        <div className="container my-5">
          <div className="row">
            <Search
              valueTransmission={this.receiveValue.bind(this)}

              changeStatus={this.changeStatus.bind(this)}
              status={this.state.status}
            />
            <Table
              // dataUser={this.state.data}
              dataUser={result}
            />
            <AddUsers
              status={this.state.status}

            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;