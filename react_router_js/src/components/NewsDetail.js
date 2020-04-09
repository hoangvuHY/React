import React, { Component } from 'react';
import dl from './JSON/DataABC.json';
import NewsRelated from './NewsRelated';


class NewsDetail extends Component {
    to_slug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }
    render() {
        var dem = 0;
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto text-center">
                                <div className="header-content mx-auto text-center">
                                    <h1 className="mb-5"> Chi tiet tin</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header> 
                {

                    dl.map((val, key) => {
                        if (val.id === parseInt(this.props.match.params.id)) {
                            return (
                                <div className="jumbotron jumbotron-fluid" key={key}>
                                    <div className="container">
                                        <img src={val.anh} alt="" className="img-fluid w-100" />
                                        <h3 className="lead text-center">{val.tieude}</h3>
                                        <hr className="my-2" />
                                        <p>{val.noidung}</p> 
                                    </div>
                                </div> 
                            )
                        }
                        return true;
                    })
                }

                <div className="container">
                    <h4 className="card-title text-center">Tin lien quan</h4>
                    <div className="row">
                        <div className="col-12">
                            <div className="card-deck">
                                {
                                    dl.map((val, key) => {
                                        if (val.id !== parseInt(this.props.match.params.id)) {
 
                                            if (dem <= 3) {
                                                dem++;
                                                return (
                                                    <NewsRelated
                                                        key={key}
                                                        tinId={val.id}
                                                        anh={val.anh}
                                                        tieude={val.tieude}
                                                        trichDan={val.trichDan}
                                                    />
                                                )
                                            }
                                                return true;
                                        }
                                        return true;
                                    }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>{/* End container */}
            </div>
        );
    }
}

export default NewsDetail;