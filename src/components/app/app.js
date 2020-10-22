import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, FaqPage, UsersPage, ProductsPage } from '../../routers';
import Header from '../common/header';
import MiniBasket from '../minibasket';

const App = () => {
    return (
        <>
            <Header />
            <div className="pageBody center-holder">
                <MiniBasket />
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/faq" component={FaqPage} />
                    <Route path="/users/:id?" component={UsersPage} />
                    <Route path="/products" component={ProductsPage} />
                </Switch>
            </div>
        </>
    );
}

export default App;