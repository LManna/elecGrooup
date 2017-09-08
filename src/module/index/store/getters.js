/**
 * [getters description]
 * 动态往全局state中塞值
 * store计算属性，getters的返回值回根据他的依赖改变，重新计算
 * @type {Object}
 */
var getters = {
  isLogin:state=>{
    return true
  }
}

export default getters
