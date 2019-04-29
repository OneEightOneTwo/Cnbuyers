import React, { Component } from 'react';
import styles from './Login.css';

// 组件
import PswLogin from '../../components/PswLogin/PswLogin';
import CodeLogin from '../../components/CodeLogin/CodeLogin';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            passwordLogin: true
        }
    }
    changeLoginWay = () => {
        this.setState({
            passwordLogin: !this.state.passwordLogin
        });
    }
    toRegister = (state) => {
        this.props.history.push({
            pathname: '/register',
            state
        })
    }
    render() {
        return (
            <div className={styles.login}>
                <div className={styles.banner}></div>
                {
                    this.state.passwordLogin ?
                        <PswLogin toRegister={this.toRegister}></PswLogin>
                        :
                        <CodeLogin></CodeLogin>
                }
                <div className={styles.btns}>
                    <p><a href="javascript:;">立即登录</a></p>
                    {
                        this.state.passwordLogin ?
                            <p><a href="javascript:;" className={styles.codelogin} onClick={this.changeLoginWay}>手机验证码登录</a></p>
                            :
                            <p><a href="javascript:;" className={styles.pswlogin} onClick={this.changeLoginWay}>账号密码登录</a></p>
                    }
                </div>
                <div className={styles.toregister}>
                    还没有账号？<a href="javascript:;" onClick={this.toRegister.bind(this, true)}>立即注册</a>
                </div>
            </div>
        );
    }
}

export default Login;