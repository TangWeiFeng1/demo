<template>
  <div id="target">
    <div class="target_title">指标</div>
    <div class="wrapper2">
      <ul class="content2">
        <draggable  v-model="$store.state.targets" group="targets"  @start="onStart" @end="onEnd">
          <transition-group>
            <li class="targets" v-for="(tag,index) in $store.state.targets" :key="index" @click="show(index)">
              <div class="target">
                <span class="icon fa fa-slack"></span>
                <div :class="active == index ? 'active' : 'col_name'">{{tag}}</div>
              </div>
            </li>
          </transition-group>
        </draggable>
      </ul>
    </div>
  </div>
</template>
<script>
  import draggable from 'vuedraggable';
  export default {
    name: "Target",
    components:{draggable},
    data(){
      return {
        active:-1
      }
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