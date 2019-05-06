import React, { Component } from 'react';
import styles from './Seckill.css';

var timer = null;
class Seckill extends Component {
    constructor() {
        super();
        this.state = {
            time: {
                hours: '--',
                minutes: '--',
                seconds: '--'
            },
            contentList: [
                {
                    id: 1,
                    imgUrl: require('../../assets/seckill_content1.jpg'),
                    price: 98
                }, {
                    id: 2,
                    imgUrl: require('../../assets/seckill_content1.jpg'),
                    price: 98
                }, {
                    id: 3,
                    imgUrl: require('../../assets/seckill_content1.jpg'),
                    price: 98
                }, {
                    id: 4,
                    imgUrl: require('../../assets/seckill_content1.jpg'),
                    price: 98
                }, {
                    id: 5,
                    imgUrl: require('../../assets/seckill_content1.jpg'),
                    price: 98
                }
            ]
        }
    }
    componentDidMount() {
        function toDbNum(num) {
            if (num < 10) {
                return '0' + num;
            } else {
                return num;
            }
        }
        var now = new Date();
        var nowYear = now.getFullYear();
        var nowMonth = now.getMonth() + 1;
        var nowDate = now.getDate();
        var ten = new Date(`${nowYear}/${nowMonth}/${nowDate} 23:00:00`);
        if (now < ten) {
            timer = setInterval(() => {
                var date = new Date();
                var res = parseInt((ten - date) / 1000);
                var seconds = toDbNum(parseInt(res % 60));
                var minutes = toDbNum(parseInt(res / 60 % 60));
                var hours = toDbNum(parseInt(res / 3600 % 24));
                this.setState({
                    time: {
                        hours,
                        minutes,
                        seconds
                    }
                })
                if (res <= 0) {
                    clearInterval(timer);
                }
            }, 1000);
        }
    }
    componentWillUnmount() {
        clearInterval(timer);
    }
    render() {
        return (
            <div className= {styles.seckill}>
                <div className={styles.title}>
                    <img src={require('../../assets/seckill_text.png')} />
                    <span className={styles.ten}>10点场</span>
                    <div className={styles.time}>
                        距开始&nbsp;
                        <span>{this.state.time.hours}</span> :
                        <span>{this.state.time.minutes}</span> :
                        <span>{this.state.time.seconds}</span>
                    </div>
                    <div className={styles.more}>更多</div>
                </div>
                <div className={styles.contentBox}>
                    <div className={styles.content}>
                        {
                            this.state.contentList.map((item) => {
                                return <dl className={styles.conitem} key={item.id}>
                                    <dd>
                                        <img src={item.imgUrl} />
                                    </dd>
                                    <dd>$ {item.price}</dd>
                                </dl>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Seckill;
