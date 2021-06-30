<template>
  <div>
    <div>
      <ul>
        <draggable v-model="arr1" group="site"  @start="onStarts" @end="onEnds">
          <transition-group>
            <li v-for="(item,index) in arr1" :key="index">
              <div>{{item.name}}</div>
              <div>
                <div>{{name}}</div>
                <span class="icon fa fa-file-text-o"></span>
              </div>
            </li>
          </transition-group>
        </draggable>
      </ul>
    </div>
<!--    <draggable v-model="arr2" group="site" @start="onStart" @end="onEnd">-->
<!--      <transition>-->
<!--        <div style="width: 200px;height:200px;border:1px solid red;">-->
<!--          <div v-for="(item2,index2) in arr2" :key="index2">{{item2.name}}</div>-->
<!--        </div>-->
<!--      </transition>-->
<!--    </draggable>-->
  </div>
</template>

<script>
  import draggable from 'vuedraggable';

  export default {
    name: "Test",
    components:{
      draggable
    },
    data() {
      return {
        arr1:[
          {id:1,name:'www.itxst.com'},
          {id:2,name:'www.jd.com'},
          {id:3,name:'www.baidu.com'},
          {id:3,name:'www.taobao.com'}
        ],
        arr2:[
          {name:'hhhhh'}
        ],
        name:'jack'
      };
    },
    methods: {
      //开始拖拽事件
      onStarts(){
        this.drag=true;
        console.log('start')

      },
      //拖拽结束事件
      onEnds() {
        this.drag=false;
        console.log('end')
      },
    }
  }
</script>

<style scoped>

</style>