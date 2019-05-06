import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './Footer.css';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            navs: [
                {
                    id: 1,
                    name: 'home',
                    path: '/home',
                    imgUrl: 'https://images.cnbuyers.cn/images/1/2019/03/Y5g706JNSJhZ78fFfHG75O4j7h4Fg8.png'
                }, {
                    id: 2,
                    name: 'classify',
                    path: '/classify',
                    imgUrl: 'https://images.cnbuyers.cn/images/1/2019/03/Rj8z22tJK924j2KQtZck43kK2Jnhc2.png'
                }, {
                    id: 3,
                    name: 'customer',
                    path: '',
                    imgUrl: 'https://images.cnbuyers.cn/images/1/2019/03/h6NeOa3uIuR2r9GgoD9089553MD8n3.png'
                }, {
                    id: 4,
                    name: 'cart',
                    path: '/cart',
                    imgUrl: 'https://images.cnbuyers.cn/images/1/2019/03/ANr92dzt2DqFDL76sW9t1zDF6FCZFT.png'
                }, {
                    id: 5,
                    name: 'mine',
                    path: '/mine',
                    imgUrl: 'https://images.cnbuyers.cn/images/1/2019/03/mde1P313Nd45os3pqP1X83E5n13e3P.png'
                }
            ]
        }
    }
    togglePath = (path) => {
        if (path) {
            this.props.history.push({
                pathname: path
            });
        } else {
            // window.location.href = 'https://sh-v3.ntalker.com/downt/t2d/chat.php?v=2018.10.25&siteid=kf_10337&settingid=kf_10337_1534989516804&baseuri=https%3A%2F%2Fdl.ntalker.com%2Fjs%2Fxn6%2F&mobile=1&ref=https%3A%2F%2Fm.cnbuyers.cn%2Fapp%2Findex.php%3Fi%3D1%26c%3Dentry%26m%3Dewei_shopv2%26do%3Dmobile%26r%3Dgoods.detail%26id%3D14201&tit=%E7%95%85%E8%B4%AD%E5%A4%A9%E4%B8%8B&iframechat=0&header=1&orderid=%5B%5D&rnd=1545362948332';

            console.log('hello world~')
        }
    }
    render() {
        return (
            <div className={styles.footer}>
                <ul>
                    {this.state.navs.map((item) => {
                        return (
                            <li key={item.name}>
                                <a href="javascript:;" onClick={this.togglePath.bind(this, item.path)}><img src={item.imgUrl} /></a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

Footer = withRouter(Footer);
export default Footer;