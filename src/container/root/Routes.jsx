import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Galery, Welcome } from '../pages';
import { Header } from '../../components'

const Routes = () => {
    return (
        <Router>
            <div>
                <Header />
                <div className="container wrapper">
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route path="/galery" component={Galery} />
                        <Route component={Welcome} />
                    </Switch>
                </div>
            </div>
        </Router>
    )

}

export default Routes;