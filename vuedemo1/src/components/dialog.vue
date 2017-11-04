<template>
  <div>
    <button class="dialog_btn" @click="clickOpenDialog">点击弹出框</button>
    <Dialog :isShows="isShowDialog" @on-close="clickCloseDialog"></Dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowDialog:false
    }
  },
  methods: {
    clickOpenDialog () {
      this.isShowDialog = true
    },
    clickCloseDialog () {
      this.isShowDialog = false
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dialog_btn{
    cursor:pointer;
    background:#008000;
    color:#fff;
    padding:5px 20px;
    border-color:#fff;
    border-radius:5px;
  }
</style>
