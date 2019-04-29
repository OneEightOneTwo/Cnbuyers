import React, {Component} from 'react';
import styles from './cart.css'
import { List, Checkbox, Flex } from 'antd-mobile';
import $ from 'jquery'

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

class Cart extends Component {
	constructor(props){
		super(props);
		this.state = {}
	}
	//页面跳转
	toIndex = () =>{
		this.props.history.push("/home")
	}
	//数量增加
	add = () => {
		let val = this.refs.addnum.value;
		val++;
		if(val >= 100){
			val = 100;
		}
		
		this.refs.addnum.value = val;
		console.log(this)
		//计算价格
		this.subtotal(val);
	}
	//数量减少
	reduce = () => {
		let val = this.refs.addnum.value;
		val--;
		if(val <= 1){
			val = 1;
		}
		
		this.refs.addnum.value = val;
		
		//计算价格
		this.subtotal(val);
	}
	//计算价格
	subtotal = (val) => {
		let num = this.refs.price.title;
		let all = (num * val).toFixed(2);
		this.refs.price.innerHTML = '$' + all;
		this.refs.allprice.innerHTML = '$' + all;
		this.refs.allnum.innerHTML = '结算(' + val + ')';
	}
	//编辑
	edit = (data) => {
		if(data[0].edit){
			console.log(1);
			this.refs.edit.innerHTML = "编辑";
			this.refs.allset.style.display = 'block';
			this.refs.alledit.style.display = 'none';
		}else{
			console.log(0);
			this.refs.edit.innerHTML = "完成";
			this.refs.allset.style.display = 'none';
			this.refs.alledit.style.display = 'block';
		}
		data[0].edit = !data[0].edit;
	}
	
	choice = () => {
		console.log('checked')
	}
	//商品选择
	onChange = (val,data) => {
	    console.log(val);
	}
	//商品全选
	onChangeall = (data) => {
	    if(data[0].allchoice){ 
	    	console.log(data[0].allchoice)
	    }else{
	    	console.log(data[0].allchoice)
	    }
	    data[0].allchoice = !data[0].allchoice;
	}
	
    render() {
    	const data = [
	      { value: true,edit:false,allchoice:false }
	    ];
	    console.log(this)
        return (
            <div className={styles.cart}>
            	<div className={styles.header}>
            		<img src={require("../../assets/prev.png")} />
            		<p>我的购物车</p>
            		<a onClick={() => this.edit(data)} ref="edit">编辑</a>
            	</div>
            	<div className={styles.main}>
            		<div className={styles.main_img}>
            		
	            	</div>
	            	<p>您的购物车中没有商品哦!</p>
	            	<div className={styles.main_index} onClick={this.toIndex}>
	            		<p>去首页逛逛吧!</p>
	            	</div>
            	</div>
            	<div className={styles.cart_list}>
            		<div className={styles.cart_list_title}>
            			<img src={require("../../assets/shop.png")} />
            			<p>宁波保税仓</p>
	            	</div>
	            	<div className={styles.cart_list_content}>
		            	<div className={styles.cart_list_content_left} ref="btn">
		            		{data.map(i => (
					          <CheckboxItem key={i.value} onChange={() => this.onChange(i.value,data)} defaultChecked={i.allchoice ? true : false}>
					          </CheckboxItem>
					        ))}
		            	</div>
		            	<div className={styles.cart_list_content_content}>
		            		<img src={require("../../assets/ceshi.jpg")}/>
		            	</div>
		            	<div className={styles.cart_list_content_right}>
		            		<div className={styles.cart_list_content_right_top}>
		            			<p>
		            			<span>折扣</span>
		            			美国Thinkbaby 辛克宝宝 婴儿物理防晒霜SPF50+ 89ml
		            			</p>
		            		</div>
		            		<div className={styles.cart_list_content_right_bottom}>
		            			<p ref="price" title="79">$79.00</p>
		            			<div>
		            				<span onClick={this.reduce}>-</span>
		            				<input type="text" value="1" ref="addnum"/>
		            				<span onClick={()=>this.add()}>+</span>
		            			</div>
		            		</div>
		            	</div>
	            	</div>
	            	<div className={styles.total} ref="allset">
	            		<div className={styles.cart_list_fn}>
		            		<div className={styles.cart_list_fn_left}>
								          <CheckboxItem onChange={() => this.onChangeall(data)}><p>全选</p>
								          </CheckboxItem>
			            	</div>
			            	<div className={styles.cart_list_fn_right}>
			            		<div className={styles.cart_list_fn_right_tal}>
				            		<p>合计:<span ref="allprice">$79.00</span></p>
				            		<p>不含运费</p>
				            	</div>
			            		<div className={styles.cart_list_fn_right_set}>
				            		<p ref="allnum">结算(1)</p>
				            	</div>
			            	</div>
		            	</div>
	            	</div>
	            	
	            	<div className={styles.del_alledit} ref="alledit">
		            	<div className={styles.del}>
		            		<div className={styles.del_choice}>
			            		<CheckboxItem>
			            			<span>全选</span>
			            		</CheckboxItem>
			            	</div>
			            	<div className = {styles.del_right}>
			            		<p>删除</p>
			            		<p>移到关注</p>	
			            	</div>
		            	</div>
	            	</div>
            	</div>
            </div>
        );
    }
}

export default Cart;