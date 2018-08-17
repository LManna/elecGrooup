<template lang="html">
	<div class="wall">
		<p @click='go(true)'>
			<img src="../../../assets/images/list-yes.png" v-if='showList==true'>
			<img src="../../../assets/images/list-no.png" v-else>
		</p>
		<p @click='go(false)'>
			<img src="../../../assets/images/my-no.png" v-if='showList==true'>
			<img src="../../../assets/images/my-yes.png" v-else>
		</p>
	</div>
</template>
<script >
export default{
	props:['showico'],
	data(){
		return {
			showList: ""
		}
	},
	created(){
		if (this.showico == "my") {
			this.showList = false
		}else{
			this.showList = true
		}
	},
	methods:{
		go(obj){
			if (obj == this.showList) {

			}else{
				this.showList = obj;
				if (obj == true) {
					this.$router.push('list')
				}else{
					this.$router.push('my')
				}
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.wall{
	position: fixed;
	bottom: 0;
	left:0 ;
	right: 0;
	display: flex;
	background: rgba(104,104,104,1);
    padding: .13rem 0 0;
    z-index: 9;
	p{
		flex: 1;
		text-align: center;
	}
}
</style>