<template>
  <div class="container" >
    <div class="row" align="center">
      <div class="navbar navbar-default " style="width: 300px;">
        <div class="navbar-header">
          <!-- .navbar-toggle样式用于toggle收缩的内容，即nav-collapse collapse样式所在元素 -->
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-responsive-collapse">
            <span class="sr-only">Toggle Navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- 确保无论是宽屏还是窄屏，navbar-brand都显示 -->
          <a class="navbar-brand">{{title}}</a>
        </div>
        <div class="collapse navbar-collapse navbar-responsive-collapse">
          <ul class="nav navbar-nav">
           <li id="firstTab" @click="choice = 'first'" :class="choice=='first'?'active':''">
               <a>页面一</a>
            </li>
            <li id="sencondTab" @click="choice = 'second'" :class="choice=='second'?'active':''">
               <a>页面二</a>
             </li>
          </ul>
        </div>
      </div>
      <div class="showContent">
        <component :is="getTab()">Slot插槽位置内容</component>
      </div>
    </div>
  </div>
</template>

<script>
import first from './First.vue'
import second from './Second.vue'
export default {
  data () {
    return {
      title: 'Slot导航栏',
      choice: 'first'
    }
  },
  components: {
    first: first,
    second: second
  },
  methods: {
    getTab () {
      return this.choice === 'first' ? first : second
    }
  },
  beforeCreate () {
    console.log(this.$route)
    var co = this.$route.query.choice
    if (co === 'tabBool') {
      this.$root.$data.choice = 'tab'
    } else if (co === 'loginBool') {
      this.$root.$data.choice = 'login'
    }
  }
}

</script>

<style lang="css">
  .showContent{
    padding: 20px;
    width: 700px;
    min-height: 300px;
    box-shadow: 10px 10px 5px #bbb;
    background-color: burlywood;
  }
</style>
