<template lang="html">
	<div class="wall">
		<ul>

			<li v-for='item in listData' @click="pDetail">
				<div class="img" :style="{backgroundImage:'url('+item.logo+')'}"></div>
				<div class="info">
					<p class="title">{{item.title}}}</p>
					<p class="detail"><i>{{item.local}}</i> <i>{{item.long}}</i> 
						<span :class="{used:item.isUse}">可用</span><i>/</i><span :class="{red:!item.isUse}" >占用</span>
					</p>
					<p class="price">{{item.elecFe-0+(item.serveFe-0)}}/h</p>
					<p class="pdetail"><span>电费:{{item.elecFe}}/h</span>  服务费:{{item.serveFe}}/h<span></span></p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script >
export default{
	props:['listData'],
	data(){
		return {

		}
	},
	created(){
		console.log('1231231',this.listData)
	},
	methods:{
		pDetail(){
			this.$router.push('detail')
		}
	}
}
</script>
<style lang="scss" scoped>
.wall{color: rgba(255, 255, 255, 0.6)}
li{
	background: #000;
    margin-top: .1rem;
    display: flex;
    padding: .2rem;
    .used{color: green}
    .red{color:red}
    .img{
    	flex: 1;
    	background: url("../../../assets/images/carlist.png") no-repeat;
    	background-position: center;
    }
    .info{
    	flex: 3;
    	position: relative
    }
    p.detail{
    	font-size: .2rem;
    	margin: .2rem 0;
    	i{
    		font-style:normal
    	}
    }
    p.price{
		position: absolute;
	    right: 0;
	    top: .45rem;
	    font-size: .5rem;
	    color: #fff;
	    margin-right: .2rem;
    }
    p.pdetail{font-size: .2rem;}
}
</style>