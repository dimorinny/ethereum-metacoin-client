import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link, IndexLink} from 'react-router';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/account';
import Account from '../components/account';

@connect(mapStateToProps, mapDispatchToProps)
export default class Application extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        actions: PropTypes.object.isRequired,
        accountState: PropTypes.object.isRequired
    };

    componentDidMount() {
        const {actions} = this.props;
        actions.loadAccount();
    };

    render() {
        const {children, accountState} = this.props;
        const {error, account, isPending} = accountState;

        return (
            <div>
                <Account
                    error={error}
                    account={account}
                    isPending={isPending}
                />

                <IndexLink to='/' className='link'>Manage</IndexLink>
                <Link to='/address' className='link'>Address</Link>

                { children }
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        router: state.router,
        accountState: state.account
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actionCreators, dispatch)};
}
