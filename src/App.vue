<template>
  <div id="app">
    <keep-alive exclude="Panels">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

  export default {
    name: 'App',
    components:{

    }
  }
</script>

<style lang="stylus">
  @import "./assets/css/base.css";
</style>
