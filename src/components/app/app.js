import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, FaqPage, CustomersPage, ProductsPage, CheckoutPage } from '../../routers';
import Header from '../common/header';
import MiniBasket from '../minibasket';

const App = () => {
    return (
        <>
            <Header />
            <main className="main">    
                <div className="pageBody center-holder">
                    <MiniBasket />
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/faq" component={FaqPage} />
                        <Route path="/customers/:id?" component={CustomersPage} />
                        <Route path="/products" component={ProductsPage} />
                        <Route path="/checkout" component={CheckoutPage} />
                    </Switch>
                </div>
            </main>
        </>
    );
}

export default App;