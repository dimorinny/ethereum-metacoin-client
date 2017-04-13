import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link, IndexLink} from 'react-router';

@connect(mapStateToProps, mapDispatchToProps)
export default class Application extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        let {children} = this.props;

        return (
            <div>
                <IndexLink to='/' className="link">Manage</IndexLink>
                <Link to='/address' className="link">Address</Link>

                { children }
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {router: state.router};
}

function mapDispatchToProps(dispatch) {
    return {};
}
