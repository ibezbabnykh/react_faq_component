import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, FaqPage, UsersPage } from '../../routers';
import Header from '../common/header';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="pageBody center-holder">
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/faq" component={FaqPage} />
                    <Route path="/users/:id?" component={UsersPage} />
                </Switch>
            </div>
        </React.Fragment>
    );
}

export default App;