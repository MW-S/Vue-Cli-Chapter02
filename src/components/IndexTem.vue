<template>
  <div align="center">
    <p>{{msg}}</p>
    <div>
      <P>功能入口</P>
      <router-link class="btn btn-default btn-info" style="margin: 10px 20px; width: 120px;" to="/Tab?choice=tabBool">Slot导航页面</router-link>
      <router-link class="btn btn-default btn-info" style="margin: 10px 20px; width: 120px;" to="/Login?choice=loginBool">登录页面</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexTem',
  data () {
    return {
      msg: '欢迎来到Vue3.0实验二首页！'
    }
  }
}
</script>
