<template>
  <div>
    <div class="vue_header">vue demo header</div>

    <div class="vue_content">
      <div class="vue_content_left">
        <ul class="content_lists">
          <li><router-link :to="{path:'loading'}">加载 demo</router-link></li>
          <li><router-link :to="{path:'dialog'}">弹出框 demo</router-link></li>
          <li><router-link :to="{path:'list'}">表格 demo</router-link></li>
          <li><router-link :to="{path:'mocks'}">mock数据 demo</router-link></li>
        </ul>
      </div>
      <div class="vue_content_right">
        <router-view></router-view>
      </div>
    </div>

    <div class="vue_footer">i am a footer</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vue_header,
  .vue_footer{
    height:50px;
    width:100%;
    background:#222;
    color:#fff;
    line-height:50px;
    text-align:center;
  }
  .vue_content{
    height:873px;
    width:100%;
    background:pink;
  }
  .vue_content_left{
    width:300px;
    height:inherit;
    background:#f1f1f1;
    float:left;
  }
  .content_lists{
    padding:30px;
  }
  .content_lists li{
    height:40px;
    line-height:40px;
    background:#ccc;
    text-align:center;
    margin:8px 0;
  }
  .content_lists li a{
    color:#222;
  }
  .vue_content_right{
    padding-top:30px;
    padding-bottom:30px;    
    height:inherit;
    width:100%;
    padding-left:320px;
    box-sizing:border-box;
  }
</style>
