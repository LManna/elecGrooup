<template lang="html">
	<div class="wall">
		<section class="head">
			<div> <img src="https://www.easyicon.net/api/resizeApi.php?id=1146189&size=64"></div>
			<div class="title">
				<p>宝马充电站(依斯特大厦)</p>
				<p class="score">
					<svg width="70px" height="10px" viewBox="0 0 77 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->
    					<desc>Created with Sketch.</desc>
				    <defs></defs>
				    <g id="评论-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				        <g id="评论1" transform="translate(0.000000, -75.000000)" fill="#F5A623" stroke="#979797">
				            <path d="M7.13292387,86.25 L2.72453448,88.5676275 L3.56646194,83.6588137 L1.42108547e-14,80.1823725 L4.92872918,79.4661863 L7.13292387,75 L9.33711857,79.4661863 L14.2658477,80.1823725 L10.6993858,83.6588137 L11.5413133,88.5676275 L7.13292387,86.25 Z M23.1329239,86.25 L18.7245345,88.5676275 L19.5664619,83.6588137 L16,80.1823725 L20.9287292,79.4661863 L23.1329239,75 L25.3371186,79.4661863 L30.2658477,80.1823725 L26.6993858,83.6588137 L27.5413133,88.5676275 L23.1329239,86.25 Z M38.1329239,86.25 L33.7245345,88.5676275 L34.5664619,83.6588137 L31,80.1823725 L35.9287292,79.4661863 L38.1329239,75 L40.3371186,79.4661863 L45.2658477,80.1823725 L41.6993858,83.6588137 L42.5413133,88.5676275 L38.1329239,86.25 Z M53.1329239,86.25 L48.7245345,88.5676275 L49.5664619,83.6588137 L46,80.1823725 L50.9287292,79.4661863 L53.1329239,75 L55.3371186,79.4661863 L60.2658477,80.1823725 L56.6993858,83.6588137 L57.5413133,88.5676275 L53.1329239,86.25 Z M69.1329239,86.25 L64.7245345,88.5676275 L65.5664619,83.6588137 L62,80.1823725 L66.9287292,79.4661863 L69.1329239,75 L71.3371186,79.4661863 L76.2658477,80.1823725 L72.6993858,83.6588137 L73.5413133,88.5676275 L69.1329239,86.25 Z" id="Combined-Shape"></path>
				        </g>
				    </g>
				</svg><i>5 分</i></p>
				<p class="long"><i>距离我 3.4km</i> <i class="green"> 可用</i>/占用</p>
			</div>
			<div class="tolike">
				<p class="like"><img src="https://www.easyicon.net/api/resizeApi.php?id=1072472&size=32"></p>
				<p class="share"><img src="https://www.easyicon.net/api/resizeApi.php?id=1183580&size=32"></p>
			</div>
		</section>
		<section class="detail">

			<div class="list">
				<p :class="{active:isdetail}" @click='showDetail(1)'>详情</p>
				<p :class="{active: !isdetail}" @click='showDetail(2)'>评论（51）</p>
			</div>
			<!-- 详情 -->
			<ul v-if="isdetail">
				<li class="right">
					<p class="location smtile">北京市海淀区西四环北路15号</p>
					<p class="togo">导航</p>
				</li>
				<li>
					<p class="smtile">周边服务</p>
					<div class="serve">
						<p><img src="https://www.easyicon.net/api/resizeApi.php?id=1146080&size=32"><span>美食</span></p>
						<p><img src="https://www.easyicon.net/api/resizeApi.php?id=1165456&size=32"><span>汽车</span></p>
						<p><img src="https://www.easyicon.net/api/resizeApi.php?id=1146094&size=32"><span>洗手间</span></p>
						<p><img src="https://www.easyicon.net/api/resizeApi.php?id=1191393&size=32"><span>酒店</span></p>
					</div>
				</li>
				<li>
					<p class="smtile">充电类型</p>
					<p>慢充 <span class="litlong">国标2015</span></p>
				</li>
				<li class="right price smheight">
					<p  class="smtile">当前时段</p>
					<p>13:00 — 15:00</p>
					<p class="chosetime">选择时段</p>
				</li>
				<li class="smheight">
					<p class="smtile">充电单价</p>
					<p>1.5/度</p>
					<p>电费：¥1.3/度  服务费：¥0.2/度</p>
				</li>
				<li>
					<p class="smtile">停车费</p>
					<p>参考价格 ¥5/h <span>（以实际收取为准）</span></p>
				</li>
				<li>
					<p class="smtile">支付方式</p>
					<div class="pricetype">
						<p> <img src="https://www.easyicon.net/api/resizeApi.php?id=1164737&size=32">支付宝</p>
						<p> <img src="https://www.easyicon.net/api/resizeApi.php?id=1164798&size=32">微信</p>	
					</div>
				</li>
				<li class="right">
					<p>充电预约</p>
					
				</li>
				<li class="right">
					<p>桩主帮助</p>
				</li>
			</ul>

			<!-- 评论 -->
			<ul class="comment" v-else>
				<li class="tj">
					<span>全部</span>
					<span>充电顺利</span>
					<span>价格便宜</span>
					<span>环境不错</span>
					<span>服务好</span>
					<span>交通便利</span>
				</li>

				<li class="pl" v-for='item in allComment'>
					<div class="img">
						<img :src="item.logo">
					</div>
					<div class="score">
						<p class="name">{{item.name}}</p>
						<svg width="70px" height="10px" viewBox="0 0 77 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	    <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->
	    					<desc>Created with Sketch.</desc>
					    <defs></defs>
					    <g id="评论-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					        <g id="评论1" transform="translate(0.000000, -75.000000)" fill="#F5A623" stroke="#979797">
					            <path d="M7.13292387,86.25 L2.72453448,88.5676275 L3.56646194,83.6588137 L1.42108547e-14,80.1823725 L4.92872918,79.4661863 L7.13292387,75 L9.33711857,79.4661863 L14.2658477,80.1823725 L10.6993858,83.6588137 L11.5413133,88.5676275 L7.13292387,86.25 Z M23.1329239,86.25 L18.7245345,88.5676275 L19.5664619,83.6588137 L16,80.1823725 L20.9287292,79.4661863 L23.1329239,75 L25.3371186,79.4661863 L30.2658477,80.1823725 L26.6993858,83.6588137 L27.5413133,88.5676275 L23.1329239,86.25 Z M38.1329239,86.25 L33.7245345,88.5676275 L34.5664619,83.6588137 L31,80.1823725 L35.9287292,79.4661863 L38.1329239,75 L40.3371186,79.4661863 L45.2658477,80.1823725 L41.6993858,83.6588137 L42.5413133,88.5676275 L38.1329239,86.25 Z M53.1329239,86.25 L48.7245345,88.5676275 L49.5664619,83.6588137 L46,80.1823725 L50.9287292,79.4661863 L53.1329239,75 L55.3371186,79.4661863 L60.2658477,80.1823725 L56.6993858,83.6588137 L57.5413133,88.5676275 L53.1329239,86.25 Z M69.1329239,86.25 L64.7245345,88.5676275 L65.5664619,83.6588137 L62,80.1823725 L66.9287292,79.4661863 L69.1329239,75 L71.3371186,79.4661863 L76.2658477,80.1823725 L72.6993858,83.6588137 L73.5413133,88.5676275 L69.1329239,86.25 Z" id="Combined-Shape"></path>
					        </g>
					    </g>
						</svg>
						<i>评分 </i> 
						<i>5 分</i>
						<p class="texts">{{item.comment}}</p>
					</div>
					<div class="long">
						<i>{{item.time}}</i>
						<p>
							<img src="https://www.easyicon.net/api/resizeApi.php?id=1072472&size=32" class="like">
							<i>赞</i>
						</p>
						
					</div>
				</li>
				<li class="pl">
					<div class="img">
						<img src="https://www.easyicon.net/api/resizeApi.php?id=1181806&size=64">
					</div>
					<div class="score">
						<p class="name">Jane</p>
						<svg width="70px" height="10px" viewBox="0 0 77 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	    <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->
	    					<desc>Created with Sketch.</desc>
					    <defs></defs>
					    <g id="评论-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					        <g id="评论1" transform="translate(0.000000, -75.000000)" fill="#F5A623" stroke="#979797">
					            <path d="M7.13292387,86.25 L2.72453448,88.5676275 L3.56646194,83.6588137 L1.42108547e-14,80.1823725 L4.92872918,79.4661863 L7.13292387,75 L9.33711857,79.4661863 L14.2658477,80.1823725 L10.6993858,83.6588137 L11.5413133,88.5676275 L7.13292387,86.25 Z M23.1329239,86.25 L18.7245345,88.5676275 L19.5664619,83.6588137 L16,80.1823725 L20.9287292,79.4661863 L23.1329239,75 L25.3371186,79.4661863 L30.2658477,80.1823725 L26.6993858,83.6588137 L27.5413133,88.5676275 L23.1329239,86.25 Z M38.1329239,86.25 L33.7245345,88.5676275 L34.5664619,83.6588137 L31,80.1823725 L35.9287292,79.4661863 L38.1329239,75 L40.3371186,79.4661863 L45.2658477,80.1823725 L41.6993858,83.6588137 L42.5413133,88.5676275 L38.1329239,86.25 Z M53.1329239,86.25 L48.7245345,88.5676275 L49.5664619,83.6588137 L46,80.1823725 L50.9287292,79.4661863 L53.1329239,75 L55.3371186,79.4661863 L60.2658477,80.1823725 L56.6993858,83.6588137 L57.5413133,88.5676275 L53.1329239,86.25 Z M69.1329239,86.25 L64.7245345,88.5676275 L65.5664619,83.6588137 L62,80.1823725 L66.9287292,79.4661863 L69.1329239,75 L71.3371186,79.4661863 L76.2658477,80.1823725 L72.6993858,83.6588137 L73.5413133,88.5676275 L69.1329239,86.25 Z" id="Combined-Shape"></path>
					        </g>
					    </g>
						</svg>
						<i>评分 </i> 
						<i>5 分</i>
						<p class="texts">位置不错，服务非常好，技术也不错</p>
					</div>
					<div class="long">
						<i>07-25 13:34</i>
						<p>
							<img src="https://www.easyicon.net/api/resizeApi.php?id=1072472&size=32" class="like">
							<i>赞</i>
						</p>
						
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>
<script >
import api from '@/api'
export default{
	data(){
		return {
			isdetail: true,
			allComment: ''
		}
	},
	created(){
		let _this = this;
		api.getComment(function(isSuccess,data,err){
	        _this.allComment = data.data.detail;
	    })
	},
	methods:{
		showDetail(obj){
			if (obj == 1) {
				this.isdetail = true
			}else{
				this.isdetail = false
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.wall{
	.green{color: green;margin-left: .5rem;}
	section{margin-bottom: .1rem;color: rgba(255, 255, 255, 0.6);}
	i{font-style: normal}
	.litlong{margin-left: .2rem;}
	.head{
		background: #000;
		display: flex;
		padding: .35rem 0;
		text-align: center;
		div{
			flex: 3
		}
		div.title{
			flex: 5;
			text-align: left;
			.score{
				margin: .12rem 0;
				font-size: .2rem;
			}
			.long{
				font-size: .2rem;
			}
		}
		div.tolike{
			flex: 1
		}
		.like, .share{
			width: .4rem;
			margin-top: .15rem;
			img{
				width: 100%;
			}
		}
		.star{
			width:.5rem;
			background:url('https://www.easyicon.net/api/resizeApi.php?id=529079&size=24')
		}
		i{
			display: inline-block;
		}
	}
	.detail{
		.list{
			display: flex;
			p{
				flex: 1;
				text-align: center;
				line-height: .8rem;
				background: #2B2929;
			}
			p.active{
				color: #fff;
				background: #000
			}
		}
		ul{
    		list-style: none;
    		font-size: .25rem;
    		.location{
    			padding-top: .3rem;
    		}
    		.location:before{
    			content: "";
    			display: inline-block;
			    width: .4rem;
    			height: .3rem;
    			background: url('https://www.easyicon.net/api/resizeApi.php?id=1179503&size=32') no-repeat;
			    background-size: contain;
    		}
    		li{
    			background: #000;
    			padding-left: .1rem;
    			border-bottom: 1px solid #2b2b2b;
    			line-height: .9rem;
    			padding: 0 .3rem;
    			.togo{
    				bottom: 0;
				    right: .5rem;
				    font-size: .2rem;
				    position: absolute;
    			}
    		}
    		li:last-child{
    			border-bottom: none
    		}
    		li.right{
    			position: relative
    		}
    		li.right:after{
				content: '';
				display: inline-block;
				width: .3rem;
				height: .3rem;
				background: url('../../../assets/images/right_arrow.png');
			    background-size: cover;
				position: absolute;
			    right: .1rem;
			    top: .3rem;
			}
			.smtile{
				font-size: .3rem;
				line-height: 0.9rem;
			}
			.serve{
				display: flex;
				p{
					flex: 1;
					text-align: center;
					img{
						width: .4rem;
					    vertical-align: sub;
					    margin-right: .15rem;
					}
				}
			}
			.smheight{
				line-height: .6rem;
			}
			.chosetime{
				position: absolute;
			    right: .5rem;
			    bottom: 0;
			}
			li.price{margin-top: .1rem;}
			li.price:after{
			        right: .1rem;
    				top: 1.04rem;
			}
			.pricetype{
				display: flex;
				p{
					flex: 1;
					text-align: center;
					img{
						width: .35rem;
					    vertical-align: sub;
					    margin-right: .2rem;
					}
				}
			}
		}
	}
	.comment{
		.tj{
			span{
				display: inline-block;
			    padding: .1rem .2rem;
			    background: #2B2929;
			    border-radius: 5px;
			    line-height: .4rem;
			    margin-right: .2rem;
			}
		}
		.pl{
			display: flex;
			    padding: 0 .2rem .15rem;
    border-bottom: 1px solid #2b2b2b;
			div{
				flex: 1;
				p{
					line-height: .4rem;
				}
			}
			span{
				line-height: .7rem;
			}
			img{
				    vertical-align: text-top;
			}
			.score{
				flex:2;
				.name{
					text-align:cneter;
					font-size: .3rem;
				    line-height: .7rem;
   	 				margin-bottom: -.3rem;
				}
			}
			.long{
				flex:1;
				text-align: right;
				position: relative;
				p{
					position: absolute;
					bottom: .1rem;
					right: 0;
				}
			}
			.texts{
				line-height: .4rem;
    			margin-top: -.13rem;
			}
			.like{
				width: .32rem;
				vertical-align: middle;
			}
		}
	}
	
}
</style>