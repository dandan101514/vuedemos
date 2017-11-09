<template>
  <div>
    <h1>total 父子组件传递：</h1>
    <div>
      <h3 style="margin:20px 0;">商品单价：</h3>
      <div>
        <button class="dialog_btn" @click="clickapple">Apple 5</button>
        <button class="dialog_btn" @click="clickbanana">Banana 10</button>
        <button class="dialog_btn" @click="clickpear">Pear 15</button>
      </div>
      <Total :price = "parentprices" :changeconten="parentchangeconten"></Total>
    </div>
    <div>
      <h3>子组件 改变 父组件</h3>
      <p>随着子组件变化：{{parentchangeconten}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      parentprices:1,
      parentchangeconten:""
    }
  },
  methods:{
    clickapple:function(){
        this.parentprices = 5
    },
    clickbanana:function(){
        this.parentprices = 10
    },
    clickpear:function(){
        this.parentprices = 15
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    font-size:24px;
  }
  h3{
    font-size:20px;
  }
  .dialog_btn{
      display:inline-block;
      cursor:pointer;
      background:#008000;
      color:#fff;
      padding:5px 15px;
      border-color:#fff;
      border-radius:5px;
  }
</style>
