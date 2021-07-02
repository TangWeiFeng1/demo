<template>
  <div id="values">
    <div class="chart_values">
      <div class="dim_titles">维度</div>
        <div class="dim_values">
          <draggable  v-model="dims" group="dims"  @start="onStart" @end="onEnd">
            <transition-group>
              <div v-for="(col,index) in dims" :key="index" class="values_list">
                {{col}}
              </div>
            </transition-group>
          </draggable>
        </div>
      <div class="targets_title">指标</div>
      <div class="targets_values">
        <draggable  v-model="targets" group="targets"  @start="onStart" @end="onEnd">
          <transition-group>
            <div v-for="(tag,index) in targets" :key="index" class="values_list">
              {{tag}}
            </div>
          </transition-group>
        </draggable>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';
  export default {
    name: "Values",
    components:{
      draggable
    },
    data(){
      return {
        dims:[],
        targets:[],
        msg:"请拖入维度",
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
    }
  }
</script>

<style scoped>

</style>