<template>
  <div class="main"  id="tab">
    <tab></tab>
  </div>
</template>

<script>
import tab from '@/components/TabTem.vue'
export default {
  map: 'tab',
  components: {
    tab
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
