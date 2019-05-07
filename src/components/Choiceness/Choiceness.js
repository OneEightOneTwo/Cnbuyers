import React, { Component } from 'react';
import styles from './Choiceness.css';
import Swiper from 'swiper';
// import swipercss from 'swiper/dist/css/swiper.min.css';

class Choiceness extends Component {
    constructor() {
        super();
        this.state = {
            itemlist: [
                {
                    id: 1,
                    pic: 'https://images.cnbuyers.cn/images/1/2019/04/I15zxxBx6XMZIMjFfzx7b7LI6lcXlz.jpg',
                    swipercon: [
                        {
                            id: '1-1',
                            photo: 'https://images.cnbuyers.cn/images/1/goods/2019/05/CHcYNrU8OywrYyHRwc5uwyWEO9Ocs5.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_80',
                            name: '【两件装】日本资生堂（Shiseido）安耐晒金瓶超强防水防晒霜（SPF50+ PA++++） 60ml 2018版',
                            price: 419
                        }, {
                            id: '1-2',
                            photo: 'https://images.cnbuyers.cn/images/1/goods/2019/04/Xt8t4WT40hrfG7R79T843ndMgmfXiI.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_80',
                            name: '【两件装】美国Thinkbaby 辛克宝宝 婴儿物理防晒霜SPF50+ 89ml',
                            price: 121
                        }, {
                            id: '1-3',
                            photo: 'https://images.cnbuyers.cn/images/1/goods/2019/03/qFRAA8B8Ws8Sv5C9ssF6qfSa9f8kKp.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_80',
                            name: '【娜扎白宇都在用！】【三件装】NARIS UP 娜丽丝 UV防晒喷雾 90克',
                            price: 195
                        }
                    ]
                }, {
                    id: 2,
                    pic: 'https://images.cnbuyers.cn/images/1/2019/04/I15zxxBx6XMZIMjFfzx7b7LI6lcXlz.jpg',
                    swipercon: [
                        {
                            id: '1-1',
                            photo: 'https://images.cnbuyers.cn/images/1/goods/2019/05/CHcYNrU8OywrYyHRwc5uwyWEO9Ocs5.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_80',
                            name: '【两件装】日本资生堂（Shiseido）安耐晒金瓶超强防水防晒霜（SPF50+ PA++++） 60ml 2018版',
                            price: 419
                        }, {
                            id: '1-2',
                            photo: 'https://images.cnbuyers.cn/images/1/goods/2019/04/Xt8t4WT40hrfG7R79T843ndMgmfXiI.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_80',
                            name: '【两件装】美国Thinkbaby 辛克宝宝 婴儿物理防晒霜SPF50+ 89ml',
                            price: 121
                        }, {
                            id: '1-3',
                            photo: 'https://images.cnbuyers.cn/images/1/goods/2019/03/qFRAA8B8Ws8Sv5C9ssF6qfSa9f8kKp.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_80',
                            name: '【娜扎白宇都在用！】【三件装】NARIS UP 娜丽丝 UV防晒喷雾 90克',
                            price: 195
                        }
                    ]
                }, {
                    id: 3,
                    pic: 'https://images.cnbuyers.cn/images/1/2019/04/I15zxxBx6XMZIMjFfzx7b7LI6lcXlz.jpg',
                    swipercon: [
                        {
                            id: '1-1',
                            photo: 'https://images.cnbuyers.cn/images/1/goods/2019/05/CHcYNrU8OywrYyHRwc5uwyWEO9Ocs5.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_80',
                            name: '【两件装】日本资生堂（Shiseido）安耐晒金瓶超强防水防晒霜（SPF50+ PA++++） 60ml 2018版',
                            price: 419
                        }, {
                            id: '1-2',
                            photo: 'https://images.cnbuyers.cn/images/1/goods/2019/04/Xt8t4WT40hrfG7R79T843ndMgmfXiI.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_80',
                            name: '【两件装】美国Thinkbaby 辛克宝宝 婴儿物理防晒霜SPF50+ 89ml',
                            price: 121
                        }, {
                            id: '1-3',
                            photo: 'https://images.cnbuyers.cn/images/1/goods/2019/03/qFRAA8B8Ws8Sv5C9ssF6qfSa9f8kKp.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_80',
                            name: '【娜扎白宇都在用！】【三件装】NARIS UP 娜丽丝 UV防晒喷雾 90克',
                            price: 195
                        }
                    ]
                }
            ]
        }
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项

            slidesPerView: 3,
            spaceBetween: 20,

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
    }
    render() {
        return (
            <div className={styles.main}>
                {/* 标题 */}
                <a href="javacript:;" className={styles.title}>
                    <img src={require('../../assets/choiceness.jpg')} />
                </a>
                {/* 精选内容 */}
                {
                    this.state.itemlist.map((item) => {
                        return (
                            <div className={styles.item} key={item.id}>
                                <a href="javascript:;" className={styles.adver}>
                                    <img src={item.pic} />
                                </a>
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        {
                                            item.swipercon.map((item1) => {
                                                return (
                                                    <div className="swiper-slide" key={item1.id}>
                                                        <div className={styles.photo}>
                                                            <img src={item1.photo} />
                                                        </div>
                                                        <div className={styles.name}>
                                                            {item1.name}
                                                        </div>
                                                        <div className={styles.price}>
                                                            <span>&yen;{item1.price}</span>
                                                            <span>购买</span>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                    {/* 导航按钮 */}
                                    <div className="swiper-button-prev"></div>
                                    <div className="swiper-button-next"></div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Choiceness;