<template>
  <div>
    <h1>Watch demo</h1>
    <div class="vue_inps">
      <p><label>firstname:</label><input v-model="firstName"/></p>
      <p><label>lastname:</label><input v-model="lastName"/></p>
      <p><label>fullname:</label><input v-model="fullName"/></p>
    </div>
    <div class="vue_inps">
      <p><label>Numbers:</label><input v-model="nums"/></p>
      <p><label>Price：</label><input v-model="price"/></p>
      <p><label>Total：</label><input v-model="total"/></p>
    </div>
    <div> 
      <button @click="fn">设置</button>
      <button @click="fn1">获取</button>
      <span>{{msg1}}</span>
    </div>
  </div>
</template>

<script>
// watch 
export default {
  data () {
    return {
      firstName:"dandan",
      lastName:"dandelion",
      fullName:"girl"
    }
  },
  watch:{
    firstName: function(val) {
      this.fullName = val +" "+ this.lastName
    },
    lastName: function(val) {
      this.fullName = this.firstName + " " +val
    }
  }
}


// computed  计算属性
// export default {
//   data () {
//     return {
//       firstName:"dandan",
//       lastName:"dandelion",
//       nums:1,
//       price:0
//     }
//   },
//   computed:{
//     fullName: {
//       get: function() {
//         return this.firstName + " " + this.lastName
//       }
//     },
//     total:{
//       get: function() {
//         return this.nums * this.price
//       }
//     }
//   }
// }


// computed get set
// export default {
//     methods:{
//       fn(){
//       this.msg1=5　　//msg1设置值
//       },
//       fn1(){　　　　　
//         console.log(this.msg1)//msg1获取值  上面虽然设置了5，但是这儿是返回6，get函数返回值是6，跟set是没有必然关系的。
//       }
//     },
//     computed:{
//       msg1:{
//         set(){  
//           console.log('我被设置了')   //msg1设置值时此处触发 
//         },
//         get(){
//           console.log('我被调用了') //msg1获取值时触发
//           return 6         //这儿返回值将是msg1的值。
//         }
//       }
//     }
//   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vue_inps{
    margin:20px;
  }
  .vue_inps p{
    padding:5px 0;
  }
  .vue_inps p label{
    display:inline-block;
    width:80px;
    height:24px;
  }
  .vue_inps p input{
    height:24px;
    padding:0 5px;
  }
</style>
