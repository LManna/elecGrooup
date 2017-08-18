tag.vue<template>
  <div class="hello">
    <p>meg:{{msg}}</p>
    <button @click="toSee">点击查看事件</button>
    <router-link to="data">去data页面</router-link>
    <i class="ico1"></i><i class="ico2"></i>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: '原始测试数据'
    }
  },
  methods:{
    toSee:function(){
      var _this = this;
      Axios.get("../../../mock/test.json")
      .then(function (rsp) {
        _this.msg = rsp.data.name
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/css/demo.scss";
@import "~test.scss";
h1, h2 {
  font-weight: normal;
}
.ico1{
  @include sprite($icon2);
}
</style>
