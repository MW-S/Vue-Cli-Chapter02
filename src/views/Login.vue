<template>
  <div class="main"  id="login">
    <login></login>
  </div>
</template>

<script>
import login from '@/components/LoginTem.vue'
export default {
  map: 'login',
  components: {
    login
  }
}
</script>

<style>
  .main {
    height: 500px;
    box-shadow: 10px 10px 5px #bbb;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main div p {
    font-size: 30px;
  }
</style>
