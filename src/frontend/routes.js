import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';
//Layouts
import Layout from './common/containers/Layout.jsx';
//containers
import Main from './modules/docs/containers/Main.jsx';
import Cart from './modules/docs/containers/Cart.jsx';
import Spoon from './modules/docs/containers/Spoon.jsx';
import Flower from './modules/docs/containers/Flower.jsx';
import Stadium from './modules/docs/containers/Stadium.jsx';

export default (/* data */) => {
    return (
        <Route path='/' component={Layout}>
            <IndexRoute component={Main} />
            <Route path='/cart' component={Cart} />
            <Route path='/spoon' component={Spoon} />
            <Route path='/flower' component={Flower} />
            <Route path='/stadium' component={Stadium} />
        </Route>
    )
}
