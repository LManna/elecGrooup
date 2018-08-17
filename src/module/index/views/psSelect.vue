<template lang="html">
	<kbSlider :slider="psSlider" animationDirect="rightToLeft" >
		<div class="wall">
			<ul>
				<li>
					<p>充电类型</p>
					<div>
						<span>国标2011</span>
						<span>国标2015</span>
					</div>
				</li>
				<li>
					<p>充电桩状态</p>
					<div>
						<span>可用</span>
						<span>不可用</span>
					</div>
				</li>
				<li>
					<p>停车场</p>
					<div>
						<span>露天</span>
						<span>地下</span>
					</div>
				</li>
				<li>
					<p>停车费</p>
					<div>
						<span>收费</span>
						<span>免费</span>
					</div>
				</li>
			</ul>
			<div class="btn">
				<p @click='close'>取消</p>
				<p class="submit" @click='close'>确定</p>
			</div>
		</div>
	</kbSlider>
</template>
<script >
import kbSlider from '@/common/kbSlider/index'
export default{
	props:['psSlider'],
	data(){
		return {

		}
	},
	created(){

	},
	methods:{
		close(){
			this.psSlider.show = false
		}
	},
	components:{kbSlider},
}
</script>
<style lang="scss" scoped>
.wall{
    background: #ddd;
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0rem;
    right: 0;

    ul{
    	padding: .5rem .2rem;
    	padding-right: 0;
    	list-style: none;
    	li{
    		margin-bottom: .3rem;
    		p{
    			font-weight: bold;
    			margin-bottom: .2rem;
    			border-bottom: 1px solid #ccc;
    			line-height: .8rem;
    		}
    		span{
    			display: inline-block;
			    margin-right: .1rem;
			    background: #ccc;
			    border-radius: 3px;
			    padding: .1rem .2rem;
			    color: #463f3f;
    		}
    		span.active{
			    color: #fff;
    			background: #010101;
    		}
    	}
    }
    .btn{
	    position: absolute;
	    bottom: 0;
	    text-align: center;
	    line-height: 1rem;
	    border-top: 1px solid #ccc;
	    left: 0;
	    right: 0;
	    p{
	    	display: inline-block;
	    	width: 49%;
	    	color: #5a5353;
	    }
	    .submit{
    	    background: #403e3e;
    		color: #fff;
	    }
    }
}
</style>