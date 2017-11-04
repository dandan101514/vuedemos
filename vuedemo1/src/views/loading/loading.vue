<template>
  <div class="vue_loading" v-if="isShow">
    <h1>加载中 ......</h1>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
        type: Boolean,
        default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue_loading{
    margin-top:50px;
}
h1{
font-size:30px;
}
</style>
