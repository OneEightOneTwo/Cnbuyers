import React, { Component } from 'react';
import styles from './Seckill.css';

class Seckill extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className={styles.seckill}>
                <div className={styles.title}>
                    <img src={require('../../assets/seckill_text.png')} />
                    <span className={styles.ten}>10点场</span>
                    <div className={styles.time}>
                        距开始
                        <span>01</span> : 
                        <span>01</span> : 
                        <span>01</span>
                    </div>
                    <div className={styles.more}>更多</div>
                </div>
            </div>
        );
    }
}

export default Seckill;
