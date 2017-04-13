import React from 'react';
import {Route, IndexRoute} from 'react-router';
import AddressPage from './containers/address/address-page';
import ManagePage from './containers/manage/manage-page';
import Application from './containers/application';

export default (
    <Route path='/' component={ Application }>
        <IndexRoute component={ ManagePage }/>
        <Route path='/address' component={ AddressPage }/>
    </Route>
);
