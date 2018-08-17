<template lang="html">
	<div class="wall">
		<section class="header-block">
            <div class="search-box">
                <span></span>
                <input type="text" @keyup.13='closeKeyPress' v-model="searchKey"
                id="input"/>
            </div>
            <div class="auth-block" @click='closeKeyPress' >
                搜索
            </div>
        </section>
		<section class="choose">
			<ul class="p-type-block">
				<li :class="{'red-active':selectedTag=='all'}" @click='getlist("all")'>全部</li>
				<li :class="{'red-active':selectedTag=='hot'}" @click='getlist("hot")'>热门</li>
				<li :class="{'red-active':selectedTag=='near'}" @click='getlist("near")'>附近</li>
			</ul>
			<div class="p-choose-block">
				<p @click='showOrder'><span>推荐排序</span></p>
				<p @click='showSelect'> <span>筛选</span></p>
			</div>
		</section>
		<section class="list">
			<plist :listData="listData" v-if='listData'/>
		</section>

		<pOrder :sliders="sliders" />
		<psSelect :psSlider='psSlider' />
		<pfooter :showico='plist'/>
	</div>
</template>
<script >
import pfooter from './pfooter'
import plist from './plist'
import pOrder from './pOrder'
import psSelect from './psSelect'
import api from '@/api'
export default{

	data(){
		return {
			plist: "list",
			searchKey: "",
			listData:'',
			allData:'',
			selectedTag:'all',
			sliders: {
		        show:false,
		        isNeedMask:true
		    },
		    psSlider: {
		    	show:false,
		        isNeedMask:true
		    }
		}
	},
	created(){
		let _this = this;
		api.getAllList(function(isSuccess,data,err){
	        _this.allData = data.data;
	        console.log(_this.allData)
	        _this.listData = _this.allData.alldata
	    })
	},
	methods:{
		closeKeyPress(){

		},
		showOrder(){
			this.sliders.show = true
		},
		showSelect(){
			this.psSlider.show = true
		},
		getlist(obj){
			this.selectedTag = obj;
			if (obj == "all") {
				this.listData = this.allData.alldata;
			}else if (obj == "hot") {
				this.listData = this.allData.hotData
			}else{
				this.listData = this.allData.nearData
			}
			console.log(this.listData)
		}
	},
	components:{pfooter,plist,pOrder,psSelect},
}
</script>
<style lang="scss" scoped>
	.choose{background: #000;}
	.list{margin-bottom: 2rem;}
	.search-box{
		text-align: left;
		position: relative;
	    background: rgba(190, 190, 190, 0.3);
	    width: 80%;
	    color: #fff;
	    margin: .1rem auto;
	    border-radius: 3px;
	    line-height: .7rem;
	    height: .7rem;
	    font-size: .3rem;
	    float: left;
	    margin-left: .3rem;
	    input{
            position: absolute;
            padding:.145rem 0;
            background: transparent;
            border: none;
            right: 0;
            width: 88%;
            outline: none;
            font-size: .3rem;
            caret-color: #fff;
            color: #fff;
            text-shadow: 0px 0px 0px #495057;
            vertical-align: bottom;
        }
	    span:before{
	    	content: "";
	    	display: inline-block;
			background: url('../../../assets/images/search.png') no-repeat;
			background-size: contain;
		    width: .3rem;
		    height: .3rem;
		    font-size: 0;
		    margin-left: .3rem;
		    margin-right: .1rem;
		    vertical-align: middle;
	        margin-bottom: .1rem;
	    }
	}
	.auth-block{
    	color: rgba(255, 255, 255, 0.6);
    	float: right;
	    width: 12%;
		display: inline-block;
		height: .9rem;
		line-height: .9rem;
    }
    .p-type-block{
		color:#ffffff;
		overflow: auto;
	    white-space: nowrap;
	    padding: 0 .2rem;
	    border-bottom: 1px solid #828282;
	    display:flex;
		li{
			flex: 1;
			padding: 0 .2rem;
			height: .9rem;
			display: inline-block;
			line-height: .9rem;
			text-align: center;
			margin-right: .1rem;
			margin-top: .1rem;
			color: rgba(255, 255, 255, 0.6)
		}
		li.red-active{color: #fff;border-bottom:3px solid #fff;}
	}
	.p-choose-block{
		display: flex;
		p{
			color: rgba(255, 255, 255, 0.6);
			flex: 1;
			text-align: center;
		    padding: .2rem 0;
		    span{display:block}
		    span:after{
		    	content: "";
				background: url('../../../assets/images/choose_icon.png') no-repeat;
				width: .3rem;
			    height: .3rem;
			    background-size: contain;
			    display: inline-block;
			    vertical-align: sub;
			    margin-left: .2rem;
		    }
		}
		p:first-child{
			span{
				border-right: 1px solid #dedede;
			}
			span:after{
				content: "";
				background: url('../../../assets/images/down-arrow.png') no-repeat;
				width: .2rem;
			    height: .2rem;
			    background-size: contain;
			    display: inline-block;
			    vertical-align: sub;
			    margin-left: .2rem;
			}
				
		}

}
</style>