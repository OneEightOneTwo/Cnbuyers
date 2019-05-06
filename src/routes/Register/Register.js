import React, {Component} from 'react';
import styles from './Register.css';

// 组件
import RegisterWay from '../../components/RegisterWay/RegisterWay';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            isRegister: true
        }
    }
    componentWillMount(){
        this.setState({
            isRegister: this.props.location.state
        });
    }
    toLogin = ()=>{
        this.props.history.push('/login')
    }
    render(){
        return (
            <div className={styles.register}>
                <div className={styles.banner}></div>
                <RegisterWay></RegisterWay>
                <div className={styles.btns}>
                    {
                        (()=>{
                            if(this.state.isRegister){
                                return  <p><a href="javascript:;">立即注册</a></p>
                            }else{
                                return  <p><a href="javascript:;">立即找回</a></p>
                            }
                        })()
                    }
                </div>
                <div className={styles.toregister}>
                    已有账号！<a href="javascript:;" onClick={this.toLogin}>立即登录</a>
                </div>
            </div>
        );
    }
}

export default Register;