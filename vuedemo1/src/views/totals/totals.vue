<template>
  <div class="vue_total">
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
        <input v-model="changeconten" placeholder="输入要改变父组件的内容"/>
        
    </div>
  </div>
</template>

<script>
export default {
    props: {
        price: { type: String, default: 1 },
        changeconten: { type: String}
    },
    data () {
        return {
            nums:0,
            changeconten:""
        }
    },
    computed: {
        totals: {
            get:function () {
                return this.price * this.nums
            }
        },
        parentchangeconten: {
            get:function() {
                return this.changeconten
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
