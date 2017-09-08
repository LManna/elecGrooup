/**
 * [mutations description]
 * 更改store中状态的唯一方法就是提交mutation
 * @type {Object}
 */
var mutations = {
  setHeaderTitle(state,title){
    state.headerTitle = title
  }
}

export default mutations