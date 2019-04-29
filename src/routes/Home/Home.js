import React, { Component } from 'react';
import styles from './Home.css';

// 组件
import Banner from '../../components/Banner/Banner';
import Seckill from '../../components/Seckill/Seckill';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            navs: [{
                src: require('../../assets/home_nav1.png')
            }, {
                src: require('../../assets/home_nav1.png')
            }, {
                src: require('../../assets/home_nav1.png')
            }, {
                src: require('../../assets/home_nav1.png')
            }, {
                src: require('../../assets/home_nav1.png')
            }, {
                src: require('../../assets/home_nav1.png')
            }, {
                src: require('../../assets/home_nav1.png')
            }, {
                src: require('../../assets/home_nav1.png')
            }]
        }
    }
    showSearchBtn = () => {
        let btn = this.refs.searchBtn;
        if (btn.offsetWidth < 50) {
            var timer = setInterval(() => {
                var i = btn.offsetWidth;
                i += 5;
                btn.style.width = i + 'px';
                if (btn.offsetWidth >= 50) {
                    clearInterval(timer);
                }
            }, 10);
        }
    }
    hideSearchBtn = (e) => {
        let btn = e.target;
        if (btn.offsetWidth > 0) {
            var timer = setInterval(() => {
                var i = btn.offsetWidth;
                i -= 5;
                btn.style.width = i + 'px';
                if (btn.offsetWidth <= 0) {
                    clearInterval(timer);
                }
            }, 10);
        }
    }
    render() {
        return (
            <div className={styles.home}>
                <div className={styles.searchbar}>
                    <span className={styles.iconfont}>
                        <img src={require('../../assets/fdj.png')} />
                    </span>
                    <input type="text" placeholder="请输入关键字进行搜索" onClick={this.showSearchBtn} />
                    <a href="javascript:;" className={styles.searchbtn} ref="searchBtn" onClick={this.hideSearchBtn}>搜索</a>
                </div>
                <Banner />
                <div className={styles.banner_bottom}>
                    <a href="javascript:;"><img src={require('../../assets/home_banner_bottom.jpg')} /></a>
                </div>
                <div className={styles.navs}>
                    {
                        this.state.navs.map((item) => {
                            return <div className={styles.item} key={item}>
                                <a href="javascript:;"><img src={item.src} /></a>
                            </div>
                        })
                    }
                </div>
                <div className={styles.adver}>
                    <a href="javascript:;"><img src={require('../../assets/adver.png')} /></a>
                </div>
                <Seckill />
            </div>
        );
    }
}

export default Home;