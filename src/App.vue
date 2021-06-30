<template>
  <div id="app">
    <Header></Header>
    <side></side>
    <charts></charts>
    <display-area></display-area>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "./components/content/panel/heade/Header";
  import Side from "./components/content/panel/side/Side";
  import Charts from "./components/content/panel/charts/Charts";
  import DisplayArea from "./components/content/panel/displayarea/DisplayArea";

  export default {
    name: 'App',
    components: {
      Header,
      Side,
      Charts,
      DisplayArea
    }
  }
</script>

<style lang="stylus">
  @import "./assets/css/base.css";
</style>
