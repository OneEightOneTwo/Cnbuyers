import React, { Component } from 'react';
import styles from './Login.css';

class CodeLogin extends Component {
    render(){
        return (
            <div>
                <div>
                    <p>
                        <input type="text" placeholder="请输入手机号"/>
                    </p>
                    <p>
                        <input type="text" placeholder="请输入图形验证码"/>
                        <a href="javascript:;" className="forgetPsw">验证码</a>
                    </p>
                    <p>
                        <input type="text" placeholder="请输入5位短信验证码"/>
                        <a href="javascript:;" className="forgetPsw getcode">获取验证码</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default CodeLogin;