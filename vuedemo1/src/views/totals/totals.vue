<template>
  <div class="vue_total">
    <p>父组件传向子组件：props</p>
    <p>子组件传向父组件：$emit</p>
    <div class="mrg">
        <button @click="clickplus" class="dialog_btn">+</button>
        <button @click="clickminus" class="dialog_btn">-</button>
    </div>
    <div class="total_computed">
        <p class="mrg">单价：<input v-model="price" disabled/></p>
        <p class="mrg">数量：<input v-model="nums"/></p>
        <p class="mrg">总价：<span style="color:red;">{{totals}}</span></p>
    </div>
    <div>
        <button class="dialog_btn" @click="clickme">点击我改变父组件内容 +100</button>
    </div>
    <div>
        <input v-model="changeinput"/>
        <input v-model="changeinput2"/>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        price: { type: Number, default: 1 },
        changeinput: { type: String }
    },
    data () {
        return {
            nums:0,
            changeinput:"",
            changeinput2:""
        }
    },
    computed: {
        totals: {
            get:function () {
                return this.price * this.nums
            }
        }
    },
    methods: {
        clickplus:function () {
            this.nums ++
        },
        clickminus:function () {
            this.nums --
            if(this.nums <= 1) {
                this.nums = 1
            }
        },
        clickme:function(){
            this.$emit('clickfather')
        }
    },
    watch:{
        changeinput:function(val){
            this.changeinput2 = val
        },
        changeinput2:function(val){
            this.changeinput = val
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mrg{
        margin:20px;
    }
    .vue_total{
        width:500px;
        height:800px;
        margin-top:20px;
    }   
    .total_computed p ,
    .total_computed p input{
        height:24px;
        line-height:24px;
    }
    .total_computed p input{
        padding-left:5px;
        padding-right:5px;
        width:25px;
        text-align:center;
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
