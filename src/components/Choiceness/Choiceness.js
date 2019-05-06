import React, { Component } from 'react';
import styles from './Choiceness.css';

class Choiceness extends Component {
    render() {
        return (
            <div className={styles.main}>
                {/* 标题 */}
                <a href="javacript:;" className={styles.title}>
                    <img src={require('../../assets/choiceness.jpg')} />
                </a>
                {/* 123 */}
            </div>
        );
    }
}

export default Choiceness;