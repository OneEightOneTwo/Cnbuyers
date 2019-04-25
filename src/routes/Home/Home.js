import React, {Component} from 'react';
import './Home.css';

// 组件
import Banner from '../../components/HomeComp/Banner'

class Home extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    showSearchBtn = ()=>{
        let btn = this.refs.searchBtn;
        if(btn.offsetWidth < 50){
            var timer = setInterval(()=>{
                var i = btn.offsetWidth;
                i += 5;
                btn.style.width = i + 'px';
                if(btn.offsetWidth >= 50){
                    clearInterval(timer);
                }
            }, 10);
        }
    }
    hideSearchBtn = (e)=>{
        let btn = e.target;
        if(btn.offsetWidth > 0){
            var timer = setInterval(()=>{
                var i = btn.offsetWidth;
                i -= 5;
                btn.style.width = i + 'px';
                if(btn.offsetWidth <= 0){
                    clearInterval(timer);
                }
            }, 10);
        }
    }
    render(){
        return (
            <div className="home">
                <div className="searchbar">
                    <span className="iconfont icon-fangdajing"></span>
                    <input type="text" placeholder="请输入关键字进行搜索" onClick={this.showSearchBtn}/>
                    <a href="javascript:;" className="searchbtn" ref="searchBtn" onClick={this.hideSearchBtn}>搜索</a>
                </div>
                <Banner/>
            </div>
        );
    }
}

export default Home;