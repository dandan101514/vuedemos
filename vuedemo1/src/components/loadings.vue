<template>
  <div>
    <button class="loading_btn" @click="clickLoading">点击加载</button>
    <Loading :isShow="isShowLoading"></Loading>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowLoading:false
    }
  },
  methods: {
    clickLoading () {
      this.isShowLoading = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loading_btn{
    cursor:pointer;
    background:#008000;
    color:#fff;
    padding:5px 20px;
    border-color:#fff;
    border-radius:5px;
  }
</style>
