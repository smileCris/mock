<template>
  <div id="app">
    <p>
      姓名：{{ msg.nickname }}<br>
      出生日期：{{ msg.birthday }}<br>
      所在地：{{ msg.city }}<br>
      E-mail：{{ msg.email }}<br>
    </p>
  </div>
</template>

<script>
import { getUserInfo } from '@/apis/mock/user'
// import { getUserInfo } from '@/apis/services/user'

export default {
  name: 'App',
  data () {
    return {
      msg: { }
    }
  },
  mounted () {
    getUserInfo().then(res => {
      this.msg = res.data
    }, err => console.log(err))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20%;
}
</style>
