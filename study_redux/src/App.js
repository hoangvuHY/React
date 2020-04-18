import './App.css';
import React, { Component } from 'react';

class App extends Component {

  render() {
    /*     var p1 = {
          sanpham: "tivi",
          manhinh: 30
        }
        // var p2 = p1;//gia tri bang nhau. p2 t.doi thi p1 t.doi
        var p2 = { ...p1 }
        console.log(p1);
        p2.manhinh = 40;
        console.log(p2);
        console.log(p1);
     */
    /*     var a1 = [1, 2, 3, 4, 5];
        var a2 = [...a1];
        a2[0] = 100;
        console.log(a2);
        console.log(a1);
     */
    var b1 = {
      num: [23, 56, 89],
      status: true
    }
    var b2 = { ...b1, status: false, num: [23, 78, 987] }
    // b2.status = false;
    console.log(b2);
    var b3 = { ...b1, num: [...b1.num, 100] };
    // b3.num[3] = 100;
    console.log(b3);


    return (
      <div>

      </div>
    );
  }
}

export default App;