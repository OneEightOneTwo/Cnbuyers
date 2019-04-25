import React, { Component } from 'react';
import styles from './Login.css';
import icons from '../../font_2n9ahrjj6he/iconfont.css';

class CodeLogin extends Component {
    render(){
        let {icon} = styles;
        return (
            <div>
                <div className={styles.formdata}>
                    <p>
                        <span className={icon || icons.iconfont || icons['icon-iconfontpeople']}></span>
                        <input type="text" placeholder="请输入手机号"/>
                    </p>
                    <p>
                        <span className={icon || icons.iconfont || icons['icon-safe']}></span>
                        <input type="text" placeholder="请输入图形验证码"/>
                        <a href="javascript:;" className="forgetPsw">验证码</a>
                    </p>
                    <p>
                        <span className={icon || icons.iconfont || icons['icon-email']}></span>
                        <input type="text" placeholder="请输入5位短信验证码"/>
                        <a href="javascript:;" className="forgetPsw getcode">获取验证码</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default CodeLogin;