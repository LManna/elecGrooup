
/*
* 路由访问，全局控制的内容
* action类似于mutation，不同在于
* action提交的事mutation，而不是直接的变更状态
* action中可以包含任意异步操作
*/
var actions = {
	init({state,commit,getters}){
		console.log("action init!!!!")
		// commit('actionsData','action传的数据')
	}
}

export default actions