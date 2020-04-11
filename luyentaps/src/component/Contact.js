import React, { Component } from 'react';
import {
    Redirect,
} from "react-router-dom";
class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRedired: false,
            fDay:"Thu2"
        }
    }

    isSubmit = () => {
        this.setState({
            isRedired: true
        });
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    getValue = () => {
        var content = '';
        content += "Name is: " + this.state.fName;
        content += "/Email is: " + this.state.fEmail;
        content += "/Phone is: " + this.state.fPhone;
        content += "/Message is: " + this.state.fMessage;
        content += "/Day is: " + this.state.fDay;
        content += "/File is: " + this.state.fFiles;
        return content;
    }
    isFiles = (event) => {
        const name =  event.target.files[0].name;
        this.setState({
            fFiles:name
        });
    }
    render() {
        if (this.state.isRedired) {
           console.log(this.getValue());
            return (
                <Redirect
                    to='/'
                />
            )
        }
        return (

            <div>
                <header className="masthead" style={{ backgroundImage: 'url("img/contact-bg.jpg")' }}>
                    <div className="overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="page-heading">
                                    <h1>Contact Me</h1>
                                    <span className="subheading">Have questions? I have answers.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Main Content */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                            {/* Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. */}
                            {/* WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! */}
                            {/* To use the contact form, your site must be on a live web host with PHP! The form will not work locally! */}
                            <form name="sentMessage" id="contactForm" noValidate>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Name</label>
                                        <input name="fName" onChange={this.isChange.bind(this)} type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Email Address</label>
                                        <input name="fEmail" onChange={this.isChange.bind(this)}  type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group col-xs-12 floating-label-form-group controls">
                                        <label>Phone Number</label>
                                        <input name="fPhone" onChange={this.isChange.bind(this)}  type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Message</label>
                                        <textarea name="fMessage" onChange={this.isChange.bind(this)}  rows={5} className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message." defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <br />
                                <div id="success" />

                                <label>Ngày trong tuần</label>
                                <select className="form-control" name="fDay" value = {this.state.fDay}  onChange={this.isChange.bind(this)}    >
                                    <option value='Thu2'> Thứ 2</option>
                                    <option value='Thu3'> Thứ 3</option>
                                    <option value='Thu4'> Thứ 4</option>
                                    <option value='Thu5'> Thứ 5</option>
                                    <option value='Thu6'> Thứ 6</option>
                                    <option value='Thu7'> Thứ 7</option>
                                    <option value='ChuNhat'> Chủ nhật</option>
                                </select>
                                <div className="form-group my-5">
                                    <label >Chọn ảnh</label>
                                    <input name="fFiles" onChange={this.isFiles.bind(this)} type="file" className="form-control-file" />
                                </div>
                                <div className="form-group">
                                    <button onClick={this.isSubmit.bind(this)} type="submit" className="btn btn-primary" id="sendMessageButton"   >Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;