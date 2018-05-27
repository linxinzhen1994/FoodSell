<template>
  <div id="app">
    <myheader></myheader>
    <tab></tab>
    <!-- a标签跳转显示的内容 -->
    <router-view>

    </router-view>
  </div>
</template>

<script>
import tab from 'components/tab/tab'
import myheader from 'components/header/header'
export default {
  components:{
    myheader ,
    tab
  }
}
</script>

<style>

</style>
