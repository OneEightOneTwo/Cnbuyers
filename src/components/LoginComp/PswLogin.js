import React, { Component } from 'react';

class PswLogin extends Component {
    render(){
        return (
            <div className="pswlogin">
                <div className="formdata">
                    <p>
                        <span className="icon iconfont icon-iconfontpeople"></span>
                        <input type="text" placeholder="请输入您的手机号码/邮箱/用户名"/>
                    </p>
                    <p>
                        <span className="icon iconfont icon-lock"></span>
                        <input type="text" placeholder="请输入密码"/>
                        <a href="javascript:;" className="forgetPsw" onClick={this.props.toRegister.bind(this, false)}>忘记密码 > </a>
                    </p>
                </div>
            </div>
        );
    }
}

export default PswLogin;