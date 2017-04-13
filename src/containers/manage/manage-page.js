import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

@connect(mapStateToProps, mapDispatchToProps)
export default class ManagePage extends Component {

    static propTypes = {};

    render() {
        return (
            <div>
                Manage
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}
