import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

// 组件
import Home from './routes/Home/Home';
import Classify from './routes/Classify/Classify';
import Cart from './routes/Cart/Cart';
import Mine from './routes/Mine/Mine';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';
import Goodslist from './routes/Goodslist/Goodslist';
import Detail from './routes/Detail/Detail';
import Footer from './components/Footer/Footer';

// 路由
function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/classify" component={Classify} />
                <Route path="/cart" component={Cart} />
                <Route path="/mine" component={Mine} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/goodslist" component={Goodslist} />
                <Route path="/detail" component={Detail} />
                <Redirect from="/" to="/home" />
            </Switch>
        </Router>
    );
}

export default RouterConfig;
