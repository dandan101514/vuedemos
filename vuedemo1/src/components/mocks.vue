<template>
  <div>
    <h2>mock数据:</h2>
    <ul class="vue_lists">
      <li><span>姓名</span><span>年龄</span><span>性别</span><span>电话</span></li>
      <li v-for="item in datas"><span>{{ item.name }}</span><span>{{ item.age }}</span><span>{{ item.sex }}</span><span>{{ item.tel }}</span></li>
    </ul>
  </div>
</template>

<script>
import {userData} from '../server'
export default {
  data () {
    return {
      datas:[]
    }
  },
  methods:{
    async getUserData () {
      await userData ().then(
        (result) =>{
          this.datas = result.data.data
        }
      )
    }
  },
  mounted() {
    this.getUserData ()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  list-style:none;
}
.vue_lists li span{
  display: inline-block;
  margin:5px 15px;
  font-size:14px;
  width:50px;
  height:24px;
  line-height:24px;
  text-align: center;
}
</style>
