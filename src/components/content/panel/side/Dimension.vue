<template>
  <div id="dim">
    <div class="wrapper">
      <ul class="content">
        <draggable  v-model="$store.state.columns" group="dims"  @start="onStart" @end="onEnd">
          <transition-group>
            <li class="columns"
                v-for="(col,index) in $store.state.columns" :key="index" @click="show(index)">
              <div class="column">
                <span class="icon fa fa-file-text-o"></span>
                <div :class="active == index ? 'active' : 'col_name'">{{col}}</div>
              </div>
            </li>
          </transition-group>
        </draggable>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';
  export default {
    name: "Dimension",
    components:{
      draggable
    },
    data(){
      return {
        active: -1,
      }
    },
    mounted() {
      this.$dragging.$on('dragged', (val) => {
        console.log(val.item)
        console.log(this.$store.state.columns)
      })
      this.$dragging.$on('dragend', (res) => {
        console.error(res);
      })
    },
    methods: {
      show(index){
        this.active = index;
      },
      onStart(){
        this.drag=true;
        console.log('start')

      },
      //拖拽结束事件
      onEnd() {
        this.drag=false;
        console.log('end')
      },
    }
  }
</script>

<style scoped>

</style>