<template>
  <div id="dis_area">
    <draggable  v-model="charts" @end="end2" @start="onStart" group="charts" animation="300" >
      <transition>
        <div class="show">

        </div>
      </transition>
    </draggable>
    <router-view></router-view>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';

  export default {
    name: "DisplayArea",
    components:{draggable},
    data(){
      return {
        charts:[]
      }
    },
    methods:{
      onStart(){
        this.drag=true;
        console.log('start')
      },
      //拖拽结束事件
      onEnd() {
        this.drag=false;
        console.log('end')
      },
      end2(e) {
        console.log(e)
      },
    }
  }
</script>

<style scoped>

</style>