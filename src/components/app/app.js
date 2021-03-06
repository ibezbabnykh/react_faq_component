import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './app.scss';

import {
    HomePage,
    LoginPage,
    RegisterPage,
    FaqPage,
    CustomersPage,
    ProductsPage,
    CheckoutPage
} from '../../routers';
import { history } from '../../helpers';
import { PrivateRoute, LoggedInRoute } from '../common/custom-route';
import { alertClear } from '../../actions';
import Header from '../header';
import MiniBasket from '../minibasket';
import KeyMessaging from '../common/key-messaging';

const App = ({ alert, alertClear }) => {
    useEffect(() => {
        history.listen((location, action) => {
            alertClear();
        });
    }, [alertClear]);

    return (
        <>
            <Header />
            <main className="main">
                <div className="pageBody center-holder">
                    {alert.message &&
                        <KeyMessaging type={alert.type} message={alert.message} />
                    }
                    <MiniBasket />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <LoggedInRoute path="/login" component={LoginPage} />
                        <LoggedInRoute path="/register" component={RegisterPage} />
                        <Route path="/faq" component={FaqPage} />
                        <PrivateRoute path="/customers/:id?" component={CustomersPage} />
                        <Route path="/products" component={ProductsPage} />
                        <Route path="/checkout" component={CheckoutPage} />
                    </Switch>
                </div>
            </main>
        </>
    );
}

const mapStateToProps = ({ alert }) => {
    return { alert };
};

const mapDispatchToProps = {
    alertClear
};

export default connect(mapStateToProps, mapDispatchToProps)(App);