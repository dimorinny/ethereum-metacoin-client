import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../actions/metacoin';
import './manage-page.css';

@connect(mapStateToProps, mapDispatchToProps)
export default class ManagePage extends Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        sendState: PropTypes.shape({
            isPending: PropTypes.bool.isRequired,
            success: PropTypes.string,
            error: PropTypes.string
        }).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            address: '',
            price: ''
        };
    };

    render() {
        const {sendState} = this.props;
        const {isPending, success, error} = sendState;

        let status;

        if (error) {
            status = ManagePage.renderError(error);
        } else if (isPending) {
            status = ManagePage.renderProgress();
        } else {
            status = ManagePage.renderSuccess(success);
        }

        return (
            <div>
                <div className='manage_input_container'>
                    <input
                        type='text'
                        name='address'
                        placeholder='Address'
                        value={this.state.address}
                        onChange={this.handleAddressChange}
                        className='manage_input'
                    />
                </div>
                <div className='manage_input_container'>
                    <input
                        type='text'
                        name='price'
                        placeholder='Price'
                        value={this.state.price}
                        onChange={this.handlePriceChange}
                        className='manage_input'
                    />
                </div>
                <div className='manage_input_container'>
                    <input
                        type='button'
                        value='Send'
                        onClick={this.submit}
                    />
                </div>
                {status}
            </div>
        );
    };

    static renderError(message) {
        return (
            <h3>{message}</h3>
        );
    };

    static renderSuccess(message) {
        return (
            <h3>{message}</h3>
        );
    };

    static renderProgress() {
        return (
            <h3>Progress...</h3>
        );
    };

    handleAddressChange = (event) => {
        this.setState({address: event.target.value});
    };

    handlePriceChange = (event) => {
        this.setState({price: event.target.value});
    };

    submit = () => {
        const {actions} = this.props;

        actions.send(
            actions,
            this.state.address,
            parseInt(this.state.price)
        );
    };
}

function mapStateToProps(state) {
    return {sendState: state.send};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actionCreators, dispatch)};
}
