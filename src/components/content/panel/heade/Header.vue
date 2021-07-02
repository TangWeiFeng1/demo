<template>
  <div id="cpn-head">
    <div id="cpn-name">
      <a href="#" style="display: inline-block;margin-top:18px;">
        <span>未命名组件</span>
      </a>
    </div>
    <div id="cpn-opt">
      <a href="#" class="back_a">
        <span class="icon fa fa-undo back"></span>
        <span>撤销</span>
      </a>
      <a href="#" class="reset_a"><span class="icon fa fa-repeat reset"></span>还原</a>
      <div id="into-panel">
        <a href="#">进入仪表板</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Header",
  }
</script>

<style scoped>

</style>