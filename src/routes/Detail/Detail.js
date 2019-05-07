import React, { Component } from 'react';
import style from './Detail.css';
class Detail extends Component {
    render() {
        return (
            <div className={style.detail}>
                <div className={style.fui_header}>
                    <div className={style.fui_header_left}>
                        <a className={style.back} id="btn-back"></a>
                    </div>
                    <div className={style.title}>
                        <div id="tab" className={style.fui_tab}>
                            <a className={style.tab} className={style.active}>商品</a>
                            <a className={style.tab}>详情</a>
                        </div>
                    </div>
                    <div className="fui-header-right"></div>
                </div>
                <div className={style.detailmain}>
                    <div className={style.fui_swipe_item}>
                        <img src={require("../../assets/goodslist/1.jpg")} />
                    </div>

                </div>

                <div className={style.footer}>

                </div>

            </div>
        )
    }
}
export default Detail;