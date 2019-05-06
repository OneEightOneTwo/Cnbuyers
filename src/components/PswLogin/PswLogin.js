import React, { Component } from 'react';
import styles from './PswLogin.css';

class PswLogin extends Component {
    render(){
        let {icon} = styles;
        return (
            <div className={styles.pswlogin}>
                <div className={styles.formdata}>
                    <p>
                        <span className={icon}>
                            <img src={require('../../assets/people.png')} />
                        </span>
                        <input type="text" placeholder="请输入您的手机号码/邮箱/用户名"/>
                    </p>
                    <p>
                        <span className={icon}>
                            <img src={require('../../assets/lock.png')} />
                        </span>
                        <input type="text" placeholder="请输入密码"/>
                        <a href="javascript:;" className={styles.forgetPsw} onClick={this.props.toRegister.bind(this, false)}>忘记密码 > </a>
                    </p>
                </div>
            </div>
        );
    }
}

export default PswLogin;