<template>
  <div class="vue_dialog" v-if="isShows">
    <div class="vue_dialog_content">
      <h2 class="dialog_title">title</h2>
      <div class="dialog_content">
        <p>确认删除吗？</p>
      </div>
      <div class="dialog_btn">
        <button @click="closeBtn">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShows: {
        type: Boolean,
        default: false
    }
  },
  methods: {
    closeBtn () {
      this.$emit('on-close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue_dialog{
    width:100%;
    height:900px;
    background:rgba(0,0,0,0.1);
    position:fixed;
    top:0;
    left:0;
    z-index:1;
}
.vue_dialog_content{
  width:280px;
  height:160px;
  background:#fff;
  position:absolute;
  top:50%;
  left:50%;
  margin-left:-300px;
  margin-top:-120px;
  z-index:2;
}
h1{
font-size:30px;
}
.dialog_title{
  height:40px;
  width:100%;
  background:#0089e6;
  color:#fff;
  font-size:18px;
  line-height:40px;
  padding-left:20px;
}
.dialog_content{
  height:auto;
  width:100%;
  padding-top:10%;
  text-align:center;
}
.dialog_btn{
  height:40px;
  position:absolute;
  padding-left:38%;
  bottom:0;
}
.dialog_btn button{
  height:30px;
  line-height:20px;
  color:#fff;
  padding-left:20px;
  padding-right:20px;
  border-radius:5px;
  background:#0089e6;
  display:inline-block;
  border-color:#0089e6;
  cursor:pointer;
}
</style>
