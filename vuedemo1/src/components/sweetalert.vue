<template>
  <div>
    <h1>sweetalert 弹出框插件:</h1>
    <p style="margin:10px 0;">网址：<a href="https://sweetalert.js.org/guides/#upgrading-from-1x">sweetalert</a></p>
    <p>可设置弹框类型，背景以及按钮的颜色</p>
    <ul class="vue_sweetalert_list">
      <li>1、安装：$ npm install sweetalert --save</li>
      <li>2、引入（main.js入口文件）：import swal from 'sweetalert'</li>
      <li>3、使用：（如点击事件，直接放在点击事件中！如下示例）</li>
    </ul>
    <h2>示例：</h2>
    <div class="sweetalert_demo">
      <p>弹出提示内容！</p>
      <button @click="clicksweet01">demo01</button>
    </div>
    <div class="sweetalert_demo">
      <p>弹出title和内容！</p>
      <button @click="clicksweet02">demo02</button>
    </div>
    <div class="sweetalert_demo">
      <p>弹出success error info warning！</p>
      <button @click="clicksweet031">success</button>
      <button @click="clicksweet032">error</button>
      <button @click="clicksweet033">info</button>
      <button @click="clicksweet034">warning</button>
    </div>
    <div class="sweetalert_demo">
      <p>通过对象来传递参数，这样可以选取更多的修改1</p>
      <button @click="clicksweet041">button</button>
      <button @click="clicksweet042">button</button>
      <button @click="clicksweet043">button</button>
    </div>
    <div class="sweetalert_demo">
      <p>弹出框点击确定后再次出现提示弹出框vaule是true，点击空白页出现弹框vaule是false！</p>
      <button @click="clicksweet05">button</button>
    </div>
    <div class="sweetalert_demo">
      <p>是否决定做次操作 yes no ！</p>
      <button @click="clicksweet06">button</button>
    </div>
  </div>
</template>

<script>

export default {
  methods:{
    clicksweet01(){
      swal("直接放在点击事件中！")
    },
    clicksweet02(){
      swal("Here's the title!", "...and here's the text!")
    },
    clicksweet031(){
      swal("Good job!", "You clicked the button!", "success");
    },
    clicksweet032(){
      swal("Good job!", "You clicked the button!", "error");
    },
    clicksweet033(){
      swal("Good job!", "You clicked the button!", "info");
    },
    clicksweet034(){
      swal("Good job!", "You clicked the button!", "warning");
    },
    clicksweet041(){
      swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    },
    clicksweet042(){
      swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
    },
    clicksweet043(){
      swal("Good job!", "You clicked the button!", "success", {
        button: "Aww yiss!",
      });
    },
    clicksweet05(){
      swal("Click on either the button or outside the modal.",{button:"确认删除"})
      .then((value) => {
        swal(`The returned value is: ${value}`,{button:"确定"});
      });
    },
    clicksweet06(){
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    font-size:24px;
    font-weight:700;
  }
  h2{
    font-size:20px;
    font-weight:700;
    margin:10px;
  }
  button{
    width:100px;
    height:30px;
    font-size:16px;
    cursor:pointer;
  }
  .vue_sweetalert_list{
    width:500px;
    height:auto;
    padding:20px 30px;
    background:#fff;
    margin:20px 0;
  }
  .vue_sweetalert_list li{
    margin:10px 5px;
  }
  .sweetalert_demo{
    padding:20px;
  }
</style>
