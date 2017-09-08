<template>
  <div id="app">
    <p>这是多一年测试</p>
    <router-view></router-view>
    <div>
      <!-- <tag /> -->
    </div>
  </div>
</template>

<script>
// import tag from './view/study_dosm/tag'
export default {
  name: 'app',
  // components: {
  //   tag
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
