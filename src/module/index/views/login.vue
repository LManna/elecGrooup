<template lang="html">
	<section class="wall">
		<section>
			<img src="../../../assets/images/logo.png">
			<p class="info">私人充电桩，为您的爱车保驾护航</p>
		</section>
		<section class="main">
			<div class="type">
				<p :class='isPhone?"active":""' @click="changeType(true)">手机验证码登陆</p>
				<p :class='isPhone?"":"active"' @click="changeType(false)">普通方式登陆</p>
			</div>
			<ul>
				<li v-if='isPhone'>
					<div>
						<input type="text" placeholder="手机号">
						<span>获取手机验证码</span>
					</div>
					<div class="sms">
						<input type="text" placeholder="短信验证码">
					</div>
				</li>
				<li v-else>
					<div>
						<input type="text" placeholder="手机号/邮箱/用户名" v-model='user'>
					</div>
					<div class="password">
						<input type="password" placeholder="登陆密码" v-model='password'>
						<span>忘记密码？</span>
					</div>
				</li>
			</ul>
		</section>
		<section class="button">
			<p class="btn" @click="login">登陆</p>
			<p class="toregist">新用户注册</p>
		</section>
	</section>
	
</template>
<script >
export default{
	data(){
		return {
			isPhone: true,
			user: '',
			password: ''
		}
	},
	created(){

	},
	methods:{
		changeType (obj){
			this.isPhone = obj;
		},
		login(){
			if (!this.user || !this.password) {
				this.$tips('请输入用户名或者密码')
			}else{
				if (this.user.indexOf('admin') != -1) {
					this.$router.push('list')
				}else{
					this.$tips('用户名或密码错误，请重新登录')
				}
			}
		}
	}
}
</script>
<style lang="scss" scoped>
	.wall{
		padding-top: 1rem;
    	color: rgba(255, 255, 255, 0.46);
    	text-align: center;
    	.info{margin-top: -.2rem;margin-bottom: 1.3rem}
    	.main{
    		.type{
    			display:flex;
    			margin-bottom: .5rem;
    			p{
    				flex:1;
    				text-align:left;
    				padding-left:.4rem
    			}
    			p:first-child{
    				text-align: right;
    				border-right: 2px solid #fff;
    				padding-right: .4rem;
    			}
    			p.active{
    				color: #fff;
    			}
    		}
    		ul{	
    			padding: .3rem .8rem;
    			list-style: none;
    			div{
    				position: relative;
    				border-bottom: 1px solid rgba(255,255,255,.46);
    				margin-bottom: .5rem;

    				span{
    					position: absolute;
    					right: 0;
    					bottom: .15rem; 
    					color: #fff;
    				}
    			}
    			div:before{
	    		    content: '';
				    display: inline-block;
				    width: .3rem;
				    height: .4rem;
		    		background:url('../../../assets/images/mobile.png') no-repeat;
		    		background-size: contain;
				    position: absolute;
				    left: .1rem;
				    bottom: .15rem;
		    	}
		    	div.sms:before{
		    		height:.35rem;
		    		background:url('../../../assets/images/textsms.png') no-repeat;
		    		background-size: contain;
		    	}
		    	div.password:before{
		    		height: .35rem;
		    		background:url('../../../assets/images/Password.png') no-repeat;
		    		background-size: contain;
		    	}
    		}
    	}
    	.button{
    		p.btn{
			    color: #222;
			    line-height: .9rem;
			    text-align: center;
			    background: rgba(255,255,255,.8);
			    width: 79%;
			    margin: 0 auto;
			    font-weight: bold;
			    letter-spacing: 4px;
    		}
    		p.toregist{
			    text-align: right;
			    font-size: .2rem;
			    color: #fff;
			    width: 79%;
			    margin: 0 auto;
			    padding-top: .25rem;
    		}
    	}
    	input{
    		width: 78%;
		    background: transparent;
		    border: none;
		    line-height: .7rem;
		    font-size: .3rem;
		    color: #fff;
		    outline:none;
    	}
    	*:focus { 
	        outline: none;
	        background-color: transparent;
	     }
    	
	}
</style>