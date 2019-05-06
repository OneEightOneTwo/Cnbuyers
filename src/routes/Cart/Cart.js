import React, {Component} from 'react';
import styles from './cart.css';
import { List, Checkbox, Flex } from 'antd-mobile';

// hoc
import withAxios from '../../hoc/withAxios';


const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

class Cart extends Component {
	constructor(props){
		super(props);

		this.state = {
			arr: [],
			arr1: [],
			cartlist: [],
			status: [
			  { 
			  	value: false,
			  	edit:false,
			  	allchoice:false 
			  }
		    ]
		}
	}
	//获取数据
	componentWillMount() {
		this.props.axios.get('http://localhost:8080/cart/find').then((res) => {
			let {data} = res;
//			console.log(data);
			this.setState({
				cartlist: [...data]
			});
		})
	}
	//页面跳转
	toIndex = () =>{
		this.props.history.push("/home")
	}
	//数量增加
	add = (idx) => {
		let val = this.state.cartlist[idx].num;
		val++;
		if(val >=100){
			val = 100;
		}
		this.setState({
			cartlist:this.state.cartlist
		})
		
		this.state.cartlist[idx].num = val;
		//计算价格
		this.subtotal(val,idx);
		//结算
		this.total();
	}
	//数量减少
	reduce = (idx) => {
		let val=this.state.cartlist[idx].num;
		val--;
		if(val <= 1){
			val = 1;
		}
		
		this.setState({
			cartlist:this.state.cartlist
		})
		this.state.cartlist[idx].num = val;	
  		//计算价格
		this.subtotal(val,idx);
		//结算
		this.total();
	}
	//计算价格
	subtotal = (val,idx) => {
		let price = this.state.cartlist[idx].price;
		let all = (price * val).toFixed(2);
		this.state.cartlist[idx].allprice = all
		this.setState({
			cartlist:this.state.cartlist
		})
	}
	//编辑
	edit = (data) => {
		this.state.arr = [];
		this.setState({
			arr:this.state.arr
		})
		if(data[0].edit){
			this.refs.edit.innerHTML = "编辑";
			this.refs.allset.style.display = 'block';
			this.refs.alledit.style.display = 'none';
		}else{
			this.refs.edit.innerHTML = "完成";
			this.refs.allset.style.display = 'none';
			this.refs.alledit.style.display = 'block';
		}
		data[0].edit = !data[0].edit;
	}
	//没有商品
	init = (newArr) => {
		if(newArr.length<=0){
			this.refs.init.style.display = 'block';
			this.refs.allset.style.display = 'none';
			
		}
		console.log(newArr.length)
	}
	
	//删除
	del = () => {
		var newArr = [];
		this.state.cartlist.map(item => {
			newArr.push(item);
		})
		for(let i in newArr){
			for(let j in this.state.arr) {
				if(newArr[i].id == this.state.arr[j]) {
					newArr.splice(i, 1)
				}
			}
		}
		this.setState({
			cartlist: [...newArr]
		});
		
		this.init(newArr);
	}
	//样式变化
	csss = (length) => {
		if(length>=1){
			this.refs.allnum.style.background = '#FF5555';
			this.refs.del.style.background = '#FF5555';
			this.refs.remove.style.background = '#ffa800';
		}else{
			this.refs.allnum.style.background = '#ccc';
			this.refs.del.style.background = '#ccc';
			this.refs.remove.style.background = '#ccc';
		}
	}
	//结算变化
	total = () => {
		let num = 0;
		let price = 0;
		let allprice = 0;
		let alltotal = 0;
		let allnum = 0;
		for(let i of this.state.arr){
			for(let j of this.state.cartlist){
				if(j.id == i){
					num = j.num;
					price = j.price;
					allnum += j.num;
				}
			}
			allprice = num*price;
			alltotal += allprice;
		}
		
		this.refs.allprice.innerHTML = '￥' + alltotal.toFixed(2);
		this.refs.allnum.innerHTML = '结算(' + allnum + ')';
	}
	//商品选择
	onChange = (idx) => {
		//控制单选出现
	    let val=this.state.cartlist[idx].choice;
		
		this.setState({
			cartlist:this.state.cartlist
		})
		this.state.cartlist[idx].choice = !val;	
		
		//下标存入数组
		if(this.state.cartlist[idx].choice == true){
			this.state.arr.push(this.state.cartlist[idx].id)
			this.state.arr1.push(idx)
		}else{
			for(let i in this.state.arr){
				if(this.state.arr[i] == this.state.cartlist[idx].id){
					this.state.arr.splice(i,1)
				}
			}
			for(let i in this.state.arr1){
				this.state.arr1.splice(i,1)
			}
		}
		
		//单选控制全选
		if(this.state.arr.length == this.state.cartlist.length){
			this.state.status[0].allchoice = true;
			this.setState({
				status: [
					{
						value: this.state.status[0].value,
						edit: this.state.status[0].edit,
						allchoice: true
					}
				]
			})
		}else{
			this.state.status[0].allchoice = false;
			this.setState({
				status: [
					{
						value: this.state.status[0].value,
						edit: this.state.status[0].edit,
						allchoice: false
					}
				]
			})
		}
		
		//改变结算背景颜色
		this.csss(this.state.arr.length)
		
		//结算
		this.total();
	}
	
	//商品全选
	onChangeall = () => {
		let val = this.state.status[0].allchoice;
		for(var i in this.state.cartlist){
			this.setState({
				cartlist:this.state.cartlist
			})
			this.state.cartlist[i].choice = !val;	
			
			if(this.state.cartlist[i].choice == true){
				this.state.arr.push(this.state.cartlist[i].id);
				
			}else{
				this.state.arr = [];
			}
			
		}
		this.setState({
			status: [
				{
					value: this.state.status[0].value,
					edit: this.state.status[0].edit,
					allchoice: !this.state.status[0].allchoice
				}
			]
		})
		
		//改变结算背景颜色
		this.csss(this.state.arr.length)
		
		//结算
		this.total();
	}
	
	//商品删除全选
	ondelall = () => {
		let val = this.state.status[0].allchoice;
		for(var i in this.state.cartlist){
			this.setState({
				cartlist:this.state.cartlist
			})
			this.state.cartlist[i].choice = !val;	
			
			if(this.state.cartlist[i].choice == true){
				this.state.arr.push(this.state.cartlist[i].id);
				
			}else{
				this.state.arr = [];
			}
			
		}
		this.setState({
			status: [
				{
					value: this.state.status[0].value,
					edit: this.state.status[0].edit,
					allchoice: !this.state.status[0].allchoice
				}
			]
		})
		
		//改变结算背景颜色
		this.csss(this.state.arr.length)
		
		console.log(this.state.arr)
	}
	
    render() {
        return (
            <div className={styles.cart}>
            	<div className={styles.header}>
            		<img src={require("../../assets/prev.png")} />
            		<p>我的购物车</p>
            		<a onClick={() => this.edit(this.state.status)} ref="edit">编辑</a>
            	</div>
            	<div className={styles.main} ref="init">
            		<div className={styles.main_img}>
            		
	            	</div>
	            	<p>您的购物车中没有商品哦!</p>
	            	<div className={styles.main_index} onClick={this.toIndex}>
	            		<p>去首页逛逛吧!</p>
	            	</div>
            	</div>


            	{this.state.cartlist.map((item,idx)=>(
            		<div className={styles.cart_list} key={item.id}>
	            		<div className={styles.cart_list_title}>
	            			<img src={require("../../assets/shop.png")} />
	            			<p>{item.shop}</p>
		            	</div>
		            	<div className={styles.cart_list_content}>
			            	<div className={styles.cart_list_content_left} ref="btn">
			            		{this.state.status.map(i => (
						          <CheckboxItem key={i.value} onChange={() => this.onChange(idx)} checked={i.allchoice || this.state.cartlist[idx].choice ? true : false}>
						          </CheckboxItem>
						        ))}
			            	</div>
			            	<div className={styles.cart_list_content_content}>
			            		<img src={item.img}/>
			            	</div>
			            	<div className={styles.cart_list_content_right}>
			            		<div className={styles.cart_list_content_right_top}>
			            			<p>
			            			<span>折扣</span>
			            			{item.title}
			            			</p>
			            		</div>
			            		<div className={styles.cart_list_content_right_bottom}>
			            			<p ref="price" title={item.price}>${item.allprice}</p>
			            			<div>
			            				<span onClick={() => this.reduce(idx)}>-</span>
			            				<input type="text" value={item.num} ref="addnum" title={item.shop} className="addnum"/>
			            				<span onClick={()=>this.add(idx)}>+</span>
			            			</div>
			            		</div>
			            	</div>
		            	</div>
	            	</div>
            	))}
            	
            	
	            	
            	<div className={styles.total} ref="allset">
            		<div className={styles.cart_list_fn}>
	            		<div className={styles.cart_list_fn_left}>
							          <CheckboxItem onChange={() => this.onChangeall()} checked={this.state.status[0].allchoice ? true  : false}><p>全选</p>
							          </CheckboxItem>
		            	</div>
		            	<div className={styles.cart_list_fn_right}>
		            		<div className={styles.cart_list_fn_right_tal}>
			            		<p>合计:<span ref="allprice">$0.00</span></p>
			            		<p>不含运费</p>
			            	</div>
		            		<div className={styles.cart_list_fn_right_set}>
			            		<p ref="allnum">结算(0)</p>
			            	</div>
		            	</div>
	            	</div>
            	</div>
            	
            	<div className={styles.del_alledit} ref="alledit">
	            	<div className={styles.del}>
	            		<div className={styles.del_choice}>
		            		<CheckboxItem onChange={() => this.ondelall()} checked={this.state.status[0].allchoice ? true : false}>
		            			<span>全选</span>
		            		</CheckboxItem>
		            	</div>
		            	<div className = {styles.del_right}>
		            		<p onClick={()=>this.del()} ref="del">删除</p>
		            		<p ref="remove">移到关注</p>	
		            	</div>
	            	</div>
            	</div>
            	
            </div>
        );
    }
}

Cart = withAxios(Cart);
export default Cart;