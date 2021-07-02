<template>
  <div id="search">
    <div id="search_name">
      <span class="search_title">数据表名</span>
      <span class="icon fa fa-ellipsis-h" style="cursor: pointer;"></span>
    </div>
    <div id="search_input">
      <div class="search_div">
        <span class="icon fa fa-search"></span>
      </div>
      <input type="text" placeholder="搜索字段" name="search" class="search_input"/>
    </div>
    <div id="utils">
      <div class="sort">
        <span class="icon fa fa-sort-amount-desc "></span>
      </div>
      <div class="add_computed">
        <span class="icon fa fa-plus"></span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Search"
  }
</script>

<style scoped>

</style>