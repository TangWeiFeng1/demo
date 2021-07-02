<template>
  <div id="main">
    <div class="panel_btn" @click="toPanel">
      进入画板
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: "HomePage",
    methods:{
      toPanel(){
        this.$router.push('/panels')
      }
    }
  }
</script>

<style scoped>

</style>
