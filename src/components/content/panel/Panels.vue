<template>
  <div id="panels">
    <Header></Header>
    <side></side>
    <charts></charts>
    <display-area></display-area>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "./heade/Header";
  import Side from "./side/Side";
  import Charts from "./charts/Charts";
  import DisplayArea from "./displayarea/DisplayArea";
  export default {
    name: "Panels",
    components: {
      Header,
      Side,
      Charts,
      DisplayArea
    }
  }
</script>

<style scoped>

</style>