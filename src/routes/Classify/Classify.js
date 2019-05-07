import React, {Component} from 'react';
import style from './Classify.css';

class Classify extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                tab: ["推荐分类", "美容彩妆", "母婴儿童", "个人洗护",
                    "环球美食", "居家生活", "鞋服箱包", "数码家电", "营养健康",
                ],
                goodslist: [
                    {
                        img: require('../../assets/mine.icon/kh.jpg'),
                        name: '口红唇彩'
                    },
                    {
                        img: require('../../assets/mine.icon/xs.jpg'),
                        name: '香水'
                    },
                    {
                        img: require('../../assets/mine.icon/mm.jpg'),
                        name: '蒂佳婷'
                    },
                    {
                        img: require('../../assets/mine.icon/nf.jpg'),
                        name: '牛栏'
                    },
                    {
                        img: require('../../assets/mine.icon/atm.jpg'),
                        name: '爱他美'
                    },
                    {
                        img: require('../../assets/mine.icon/hw.jpg'),
                        name: '花王'
                    },
                    {
                        img: require('../../assets/mine.icon/ynj.jpg'),
                        name: '尤妮佳'
                    },
                    {
                        img: require('../../assets/mine.icon/myl.jpg'),
                        name: '洗发沐浴'
                    }
                ]

            }
        }

    }
    render() {
        return (
            <div className={style.Classify}>
                {/* 搜索框 */}
                <div className={style.fui_header}>
                    <div className={style.fui_header_left}>
                        <a className={style.back}></a>
                    </div>
                    <div className={style.tittle}>
                        <form method="post">
                            <div className={style.searchbar}>
                                <div className={style.search_input}>
                                    <i className="icon icon-search"></i>
                                    <input type="search" id="search" placeholder="输入关键字..." value="" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* 商品分类 */}
                <div className={style.navcontent}>
                    <div className={style.group}>
                        <div className={style.nav_left}>
                            {this.state.data.tab.map(item => (
                                <nav className={style.frist}>
                                    {item}
                                </nav>
                            ))}
                        </div>
                        <div className={style.list_right}>
                            <div className={style.goodsbox}>
                                <a href="javascript:;">
                                    <div className={style.goodsphotos}>
                                        <i></i>
                                    </div>
                                    <div className={style.goodsName}>
                                        所有商品
                                    </div>
                                </a>

                                {
                                    this.state.data.goodslist.map(index => (
                                        <a href="javascript:;" >
                                            <div className={style.goodsphotos}>
                                                <img src={index.img} alt="" />
                                            </div>
                                            <div className={style.goodsName}>
                                                {index.name}
                                            </div>
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Classify;