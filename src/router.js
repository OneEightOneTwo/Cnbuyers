import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

// 组件
import Home from './routes/Home/Home';
import Classify from './routes/Classify/Classify';
import Cart from './routes/Cart/Cart';
import Mine from './routes/Mine/Mine';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';
import Footer from './components/Footer/Footer';

// 路由
function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/classify" component={Classify} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Redirect from="/" to="/home" />
                </Switch>
                <Footer></Footer>
            </div> 
        </Router>
    );
}

export default RouterConfig;
