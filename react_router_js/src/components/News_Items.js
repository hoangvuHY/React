import React, { Component } from 'react';

class News_Items extends Component {
    render() {
        return (
            <div className="col-4">
                <div classname="card-deck">
                    <div classname="card">
                        <a href="/tin-chi-tiet"> <img classname="card-img-top" className='img-fluid' src="http://placehold.it/800x400" alt="" /></a>
                        <div classname="card-body">
                            <h4 classname="card-title"> <a href="/tin-chi-tiet">Tin tuc so 2</a> </h4>
                            <p classname="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit at
                            impedit consequuntur. Sed a molestiae atque quod fugit est in recusandae, distinctio
                            ducimus odio iste tempora accusantium praesentium soluta explicabo!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News_Items;