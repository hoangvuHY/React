import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
class AlertInfo extends Component {

    handleDismiss = () => {
        this.props.alertOff();
    }
    render() {
        if (!this.props.alertShow) {
            return null;
        }
        return (
            <AlertContainer>
                {/* timeout={1000}   */}
                <Alert onDismiss={this.handleDismiss.bind(this)} timeout={1000} type="info">
                    {
                        this.props.alertContent
                    }
                </Alert>

            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow,
        alertContent: state.alertContent
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({
                type: "ALERT_OFF",
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo);