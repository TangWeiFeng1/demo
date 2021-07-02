<template>
  <div id="side">
    <search></search>
    <dimension></dimension>
    <target></target>
    <router-view></router-view>
  </div>
</template>

<script>
  import Search from "./Search";
  import Dimension from "./Dimension";
  import Target from "./Target";
  export default {
    name: "Side",
    components: {
      Search,
      Dimension,
      Target
    }
  }
</script>

<style scoped>

</style>