import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/address';

@connect(mapStateToProps, mapDispatchToProps)
export default class AddressPage extends Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        addressState: PropTypes.object.isRequired
    };

    componentDidMount() {
        let {actions} = this.props;
        actions.loadAddresses(10);
    };

    render() {
        let {addressState} = this.props;
        let {addresses, isPending, error} = addressState;

        let content;

        if (error) {
            content = AddressPage.renderError(error);
        } else if (isPending) {
            content = AddressPage.renderProgress();
        } else {
            content = AddressPage.renderAddresses(addresses);
        }

        return (
            <div>
                <h2>Addresses in blockchain:</h2>
                {content}
            </div>
        );
    };

    static renderError(message) {
        return (
            <h3>{message}</h3>
        );
    };

    static renderProgress() {
        return (
            <h3>Progress...</h3>
        );
    };

    static renderAddresses(addresses) {
        return (
            <div>
                {
                    addresses.map((address, index) => {
                        return (
                            <div key={index}>{address}</div>
                        );
                    })
                }
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {addressState: state.address};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actionCreators, dispatch)};
}
