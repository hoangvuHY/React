import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            fDay: "thu7"

        }
    }
    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true
        });
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    isFileChange = (event) => {
        const name = event.target.files[0].name;
        this.setState({
            fImage:name
        });
    } 
    getValue = () => {
        var content = '';
        content += 'Name is: ' + this.state.fName;
        content += '/Name is: ' + this.state.fEmail;
        content += '/Phone is: ' + this.state.fPhone;
        content += '/Message is: ' + this.state.fMessage;
        content += '/Date is: ' + this.state.fDay;
        content += '/Image is: ' + this.state.fImage;
        return content;

    }
    render() {

        if (this.state.isRedirect) {
            console.log(this.getValue());
            return <Redirect to='/' />;
        }
        return (

            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto text-center">
                                <div className="header-content mx-auto text-center">
                                    <h1 className="mb-5">Trang lien he</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Contact */}
                <div className="container">
                    {/* Contact Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 mt-5">Contact Me</h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-line" />
                    </div>
                    {/* Contact Section Form*/}
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                            <form id="contactForm" name="sentMessage" noValidate="novalidate">
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Name</label>
                                        <input onChange={this.isChange.bind(this)} name='fName' className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Email Address</label><input onChange={this.isChange.bind(this)} name='fEmail' className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Phone Number</label><input onChange={this.isChange.bind(this)} name='fPhone' className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Message</label><textarea onChange={this.isChange.bind(this)} name='fMessage' className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Chọn ngày</label>

                                        <select value={this.state.fDay} className="form-control" name="fDay" onChange={this.isChange.bind(this)}>
                                            <option value="thu3">Ngày thứ 3</option>
                                            <option value="thu5">Ngày thứ 5</option>
                                            <option value="thu7">Ngày thứ 7</option>
                                            <option value="chunhat">Ngày chủ nhật</option>
                                        </select>
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Chọn ngày</label>
                                        <input onChange={this.isFileChange.bind(this)}  type="file" className="form-control-file" name="fImage"  />

                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <br />
                                <div id="success" />
                                <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit" onClick={this.submitForm.bind(this)}>Send</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;