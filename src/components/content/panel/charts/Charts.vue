<template>
  <div id="charts">
    <div class="charts_title">图表类型</div>
    <div class="charts">
      <ul class="charts_ul">
        <draggable  v-model="charts"
                    @end="end1"
                    :options="{group:{name: 'charts',pull:'clone'},sort: true}"
                    animation="300">
          <transition-group>
            <li v-for="(img,index) in charts" :key="index" @click="changes(index)"
                :class="isActive == index ? 'chart_active' : 'charts_li '">
              <img :src="img" />
            </li>
          </transition-group>
        </draggable>
      </ul>
    </div>
    <div class="chart_info">
      折线图
    </div>
    <div style="width: 90%;border:1px solid gray;margin-left:10px;margin-bottom: 5px;"></div>
    <div class="values_info">
      <values></values>
    </div>
  </div>
</template>

<script>
  import Line from '../../../../assets/images/charts/折线图.jpg'
  import Values from "./Values";
  import draggable from 'vuedraggable';

  export default {
    name: "Charts",
    components:{
      Values,
      draggable
    },
    data(){
      return {
        charts:[
          Line,Line,Line,Line,Line,Line,Line,Line,Line
        ],
        isActive:0
      }
    },
    methods:{
      changes(index){
        this.isActive = index
        console.log(index)
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
      end1(e){
        console.log("拖入成功")
        console.log(e.oldIndex)
      },
    },
  }
</script>

<style>

</style>