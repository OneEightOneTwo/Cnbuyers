import React, { Component } from 'react';
import styles from './RegisterWay.css';

class RegisterWay extends Component {
    render(){
        // let {icon} = styles;
        return (
            <div className={styles.registerway}>1
                {/* <div className={styles.formdata}>
                    <p>
                        <span className={icon || icons.iconfont || icons['icon-iconfontpeople']}></span>
                        <input type="text" placeholder="请输入手机号"/>
                    </p>
                    <p>
                        <span className={icon || icons.iconfont || icons['icon-safe']}></span>
                        <input type="text" placeholder="请输入图形验证码"/>
                        <a href="javascript:;" className={styles.forgetPsw}>验证码</a>
                    </p>
                    <p>
                        <span className={icon || icons.iconfont || icons['icon-email']}></span>
                        <input type="text" placeholder="请输入5位短信验证码"/>
                        <a href="javascript:;" className={styles.forgetPsw || styles.getcode}>获取验证码</a>
                    </p>
                    <p>
                        <span className={icon || icons.iconfont || icons['icon-lock']}></span>
                        <input type="text" placeholder="请输入密码"/>
                    </p>
                    <p>
                        <span className={icon || icons.iconfont || icons['icon-lock']}></span>
                        <input type="text" placeholder="请重复输入密码"/>
                    </p>
                 </div> */}
            </div>
        );
    }
}

export default RegisterWay;