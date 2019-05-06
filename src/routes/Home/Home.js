import React, { Component } from 'react';
import styles from './Home.css';

// 组件
import Banner from '../../components/Banner/Banner';
import Seckill from '../../components/Seckill/Seckill';
import Choiceness from '../../components/Choiceness/Choiceness';

var timer1 = null;
var timer2 = null;
class Home extends Component {
    constructor() {
        super();
        this.state = {
            navs: [{
                id: 1,
                src: require('../../assets/home_nav1.png')
            }, {
                id: 2,
                src: require('../../assets/home_nav1.png')
            }, {
                id: 3,
                src: require('../../assets/home_nav1.png')
            }, {
                id: 4,
                src: require('../../assets/home_nav1.png')
            }, {
                id: 5,
                src: require('../../assets/home_nav1.png')
            }, {
                id: 6,
                src: require('../../assets/home_nav1.png')
            }, {
                id: 7,
                src: require('../../assets/home_nav1.png')
            }, {
                id: 8,
                src: require('../../assets/home_nav1.png')
            }]
        }
    }
    showSearchBtn = () => {
        let btn = this.refs.searchBtn;
        if (btn.offsetWidth < 50) {
            timer1 = setInterval(() => {
                var i = btn.offsetWidth;
                i += 5;
                btn.style.width = i + 'px';
                if (btn.offsetWidth >= 50) {
                    clearInterval(timer1);
                }
            }, 10);
        }
    }
    hideSearchBtn = (e) => {
        let btn = e.target;
        if (btn.offsetWidth > 0) {
            timer2 = setInterval(() => {
                var i = btn.offsetWidth;
                i -= 5;
                btn.style.width = i + 'px';
                if (btn.offsetWidth <= 0) {
                    clearInterval(timer2);
                }
            }, 10);
        }
    }
    componentWillUnmount() {
        clearInterval(timer1);
        clearInterval(timer2);
    }
    render() {
        return (
            <div className={styles.home}>
                {/* 搜索框 */}
                <div className={styles.searchbar}>
                    <span className={styles.iconfont}>
                        <img src={require('../../assets/fdj.png')} />
                    </span>
                    <input type="text" placeholder="请输入关键字进行搜索" onClick={this.showSearchBtn} />
                    <a href="javascript:;" className={styles.searchbtn} ref="searchBtn" onClick={this.hideSearchBtn}>搜索</a>
                </div>
                {/* 轮播图 */}
                <Banner />
                <div className={styles.banner_bottom}>
                    <a href="javascript:;"><img src={require('../../assets/home_banner_bottom.jpg')} /></a>
                </div>
                {/* 首页导航 */}
                <div className={styles.navs}>
                    {
                        this.state.navs.map((item) => {
                            return <div className={styles.item} key={item.id}>
                                <a href="javascript:;"><img src={item.src} /></a>
                            </div>
                        })
                    }
                </div>
                {/* 广告 */}
                <div className={styles.adver}>
                    <a href="javascript:;"><img src={require('../../assets/adver.png')} /></a>
                </div>
                {/* 天天秒杀 */}
                <Seckill />
                {/* 广告 */}
                <div className={styles.picture}>
                    <div className={styles.type}>
                        <a href="javascript:;">
                            <img src="https://images.cnbuyers.cn/images/1/2019/04/X6rC72Hi6t6he66I6Iy1C6Y7T2Gtyi.png" /> 
                        </a>
                    </div>
                    <div className={styles.type}>
                        <a href="javascript:;">
                            <img src="https://images.cnbuyers.cn/images/1/2019/04/w6M90OCRcH9tCRR80vMyNY0Mr9BNHq.jpg" /> 
                        </a>
                        <a href="javascript:;">
                            <img src="https://images.cnbuyers.cn/images/1/2019/04/oaYTcacwBYAjaAFimbCazJ0Yfct0cB.jpg" /> 
                        </a>
                    </div>
                    <div className={styles.type}>
                        <a href="javascript:;">
                            <img src="https://images.cnbuyers.cn/images/1/2019/04/OVJJmpf74v394hz3F0s7fl5QB9SBIM.jpg" /> 
                        </a>
                        <a href="javascript:;">
                            <img src="https://images.cnbuyers.cn/images/1/2019/04/nc4NA8VvcZ6NJcCyVV44NYTc5va4Hd.jpg" />
                        </a>
                    </div>
                    <div className={styles.type}>
                        <a href="javascript:;">
                            <img src="https://images.cnbuyers.cn/images/1/2019/04/oTTiwb9bB27937O6ToLlbUOBKD9667.jpg" /> 
                        </a>
                        <a href="javascript:;">
                            <img src="https://images.cnbuyers.cn/images/1/2019/04/k389mMMSz8I4vm3r2J8v3Es8B9N3Vz.jpg" /> 
                        </a>
                        <a href="javascript:;">
                            <img src="https://images.cnbuyers.cn/images/1/2019/04/rF44F4144DF4SbCB6AZKp6Szsfozfu.jpg" />
                        </a>
                    </div>
                </div>
                {/* 品类精选 */}
                <Choiceness />
            </div>
        );
    }
}

export default Home;