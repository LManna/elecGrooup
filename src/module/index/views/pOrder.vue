<template lang="html">
 <!-- :isIncludMiniRefresh="true" -->
  <kbSlider :slider="sliders" animationDirect="bottomToTop" :isModalToClose="true" >
    <div class="menu-block" @click="setOrder()" @touchmove.prevent>
    	<div>

	       <p v-for="(item,x) in orderList" :class='[item.code == selected ?"active":"","f-border-bottom-line-gray"]' @click="setOrder(item.code,item.name)">
	       		{{item.name}}
	       </p>
    	</div>
       
    </div>
  </kbSlider>
</template>

<script>
import kbSlider from '@/common/kbSlider/index'
export default{
	props:['sliders'],
	data(){
		return{
			orderList:[
			{code:'0',name:'推荐排序'},
			{code:'1',name:'销量最高'},
			{code:'4',name:'价格由低至高'},
			{code:'3',name:'价格由高到低'}
			],
			selected:"0"
		}
	},
	components:{kbSlider},
	methods:{
		setOrder(code,name){
			if (code) {
				let sendCode = code == "0" ? "1":code;
				this.selected = code;
				let sendData = {code:sendCode,name:name}
				this.$emit('getSortFromSon', sendData);
			}
			this.sliders.show = false;
		}
	}
}
</script>
<style  lang="scss" scoped>
.menu-block{
	// position: absolute;
    width: 100%;
    height: 100%;
    // bottom: 0;
    // border-radius: 5px;
    div{
	    background: #ddd;
	    text-align: center;
	    position: absolute;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    color: #666666;
	    p{
	    	line-height: 1rem;
	    	border-bottom: 1px solid #ccc;
	    }
	    p.active{
	    	color: #000;
	    }
	    p:last-child{
	    	border: none;
	    }
    }
}
</style>