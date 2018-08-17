<template lang="html">
	<div class="wall">
		<section class="head">
			<img src="https://www.easyicon.net/api/resizeApi.php?id=1208383&size=64">
			<p>忧郁的小小桩</p>
		</section>
		<ul class="price">
			<li>
				<p><img src="https://www.easyicon.net/api/resizeApi.php?id=1146178&size=32"><span>我的钱包</span></p>
				<p class="curprice">109.00元</p>
			</li>
			<li>
				<img src="https://www.easyicon.net/api/resizeApi.php?id=1180563&size=32"><span>账户充值</span>
			</li>
			<li>
				<img src="https://www.easyicon.net/api/resizeApi.php?id=1211121&size=32"><span>意见反馈</span>
			</li>
			<li>
				<img src="https://www.easyicon.net/api/resizeApi.php?id=1173334&size=32"><span>设置</span>
			</li>
		</ul>
		<ul class="list">
			<li @click='goList'>
				<img src="https://www.easyicon.net/api/resizeApi.php?id=1175413&size=32" ><span>我的订单</span>
			</li>
			<li>
				<img src="https://www.easyicon.net/api/resizeApi.php?id=555739&size=32"><span>我的收藏</span>
			</li>
			<li>
				<img src="https://www.easyicon.net/api/resizeApi.php?id=1165456&size=32"><span>我的活动</span>
			</li>
			<li>
				<img src="https://www.easyicon.net/api/resizeApi.php?id=1205788&size=32"><span>充电记录</span>
			</li>
			<li>
				<img src="https://www.easyicon.net/api/resizeApi.php?id=535871&size=32"><span>充电帮助</span>
			</li>
			<li>
				<img src="https://www.easyicon.net/api/resizeApi.php?id=1146224&size=32"><span>邀请好友</span>
			</li>
		</ul>
		<pfooter :showico='plist'/>
	</div>
</template>
<script >
import pfooter from './pfooter'
export default{
	data(){
		return {
			plist: "my"
		}
	},
	created(){

	},
	methods:{
		goList(){
			this.$router.push('ownList')
		}
	},
	components:{pfooter},
}
</script>
<style lang="scss" scoped>
.wall{
	section,ul{background: #000; color: rgba(255, 255, 255, 0.6);margin-bottom: .1rem;}
	ul{
		list-syle: none;
		li{
			display: flex;
		    padding: .1rem .1rem .1rem .3rem;
		    border-bottom: 1px solid #4c4545;
		    margin: 0 .2rem;
		    position: relative;
		    line-height: .6rem;
		    img{
		    	width: .35rem;
			    height: .35rem;
			    position: absolute;
			    top: .2rem;
		    }
		    span{
		    	margin-left: .5rem;
		    }
			p{
				flex: 1
			}
		}
		li:after{
			content: '';
			display: inline-block;
			width: .3rem;
			height: .3rem;
			background: url('../../../assets/images/right_arrow.png');
		    background-size: cover;
			position: absolute;
		    right: .2rem;
		    top: .23rem;
		}
		li:last-child{border-bottom: none}
	}
	.head{
		padding: 1rem;
    	text-align: center;
	}
	.curprice{
		color: red;
		text-align: right;
		padding-right: .6rem;
	}
	.list{
		margin-bottom: 2rem;
	}
}
</style>