import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import styles from './Banner.css'; 

var timer = null;
class Banner extends Component {
    constructor() {
        super();
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 117,
        }
    }
    componentDidMount() {
        // simulate img loading
        timer = setTimeout(() => {
            this.setState({
                data: [
                    require('../../assets/home_banner1.jpg'), 
                    require('../../assets/home_banner2.jpg'), 
                    require('../../assets/home_banner3.jpg'), 
                    require('../../assets/home_banner4.jpg'), 
                ],
            }, () => {
                clearTimeout(timer);
            });
        }, 100);
    }
    componentWillUnmount() {
        clearTimeout(timer);
    }
    render() {
        return (
            <div className="banner">
                <WingBlank className={styles['my-carousel']}>
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="javascript:;"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={val}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: '117px' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
            </div>
        );
    }
}

export default Banner;