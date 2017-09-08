tag.vue<template>
  <div class="hello">
    <p>meg:{{msg}}</p>
    <button @click="toGet">点击查看GET事件</button>
    <button @click="toPost">点击查看POST事件</button>
    <router-link to="data">去data页面</router-link>
    <i class="ico1"></i><i class="ico2"></i>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'hello',
  data () {
    return {
      msg: '原始测试数据'
    }
  },
  methods: {
    toGet: function(){
      var _this = this;
      api.getDemo(function(isSuccess,data,err){
        console.log('get==========',isSuccess,data,err)
      })
    },
    toPost: function(){
      let param = {"status":500,"Token":"test123","pageIndex":"0","pageCount":"10"}
      api.getPage(param,function(isSuccess,data,err){
        console.log('post=========',isSuccess,data,err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~test.scss";
h1, h2 {
  font-weight: normal;
}
.ico1{
  @include sprite($icon2);
}
</style>
