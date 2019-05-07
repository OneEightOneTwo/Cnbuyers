import React, { Component } from 'react';
import style from './Goodslist.css';
class Goodslist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                lists: [
                    {
                        src: require("../../assets/goodslist/1.jpg"),
                        tittle: "【香港直邮】美国雅诗兰黛Estee Lauder倾慕唇膏口红260#西柚色2.8g",
                        price: "￥109.00"
                    },
                    {
                        src: require("../../assets/goodslist/2.jpg"),
                        tittle: "【香港直邮 包邮包税】意大利阿玛尼Armani臻致丝绒哑光唇釉 #405",
                        price: "￥310.00"
                    },
                    {
                        src: require("../../assets/goodslist/3.jpg"),
                        tittle: "【香港直邮 包邮包税】Dior迪奥 粉漾魅惑变色润唇膏口红",
                        price: "￥150.00"
                    },
                    {
                        src: require("../../assets/goodslist/4.jpg"),
                        tittle: "【千玺同款 香港直邮】GIVENCHY 纪梵希 小羊皮口红高级定制唇膏（粉色变色）2.2g",
                        price: "￥250.00"
                    }, {
                        src: require("../../assets/goodslist/5.jpg"),
                        tittle: "【香港直邮 包邮包税】法国圣罗兰YSL拥吻圆管口红45#",
                        price: "￥275.00"
                    }, {
                        src: require("../../assets/goodslist/6.jpg"),
                        tittle: "【香港直邮 包邮包税】美国汤姆·福特Tom Ford TF 粗黑管（半哑光）唇膏01#",
                        price: "￥389.00"
                    }
                ]

            }
        }

    }

    render() {
        return (
            <div className={style.goodsliat}>
                <div className={style.head}>
                    <div className={style.fui_header}>
                        <div className={style.fui_header_left}>
                            <a href="javascript:;" className={style.back}></a>
                        </div>
                        <div className={style.tittle}>
                            <form method="post">
                                <div className={style.searchbar}>
                                    <div className={style.search_input}>
                                        <i className="icon icon-search"></i>
                                        <input type="search" id="search" placeholder="输入关键字..." value="" />
                                        {/* <a href="javascript:;" className={style.hamb}></a> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className={style.fui_header_right}>
                            <a href="javascript:;" className={style.hamb}></a>
                        </div>
                    </div>
                    {/* 筛选 */}
                    <div className={style.sort}>
                        <div className={style.item}><span className={style.text}>综合</span></div>
                        <div className={style.item} data-order="sales"><span className={style.text}>销量</span></div>
                        <div className={style.item} data-order="minprice"><span className={style.text}>价格</span>
                            <span class="sorting">
                                <i class="icon icon-sanjiao2"></i>
                                <i class="icon icon-sanjiao1"></i>

                            </span>
                        </div>
                        <div className={style.item} ><span className={style.text}>筛选 <i className={style.icon_filter}></i></span> </div>
                    </div>
                </div>
                {/* 商品表 */}
                <div className={style.lis}>
                    <div className={style.contents}>
                        {
                            this.state.data.lists.map(index => (
                                <div class={style.fui_goods_item}>
                                    <a href="javascript:;" className={style.img}>
                                        <div className={style.image} style={{ backgroundImage: `url("${index.src}")` }}>
                                        </div>
                                        {/* <img src={this.state.data.lists.src}/> */}
                                    </a>
                                    <div className={style.detail}>
                                        <a>
                                            <div className={style.name}>{index.tittle}</div>
                                        </a>
                                        <div className={style.price}>
                                            <span className={style.tex}>{index.price}</span>
                                            <span className={style.buy}>购买</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        )
    }
}
export default Goodslist;