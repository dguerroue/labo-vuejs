<template lang="html">
  <div id="app">
    <nav-bar></nav-bar>

    <div class="container my-4">
      <div class="row">
        <div class="col">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from '../components/NavBar.vue'

export default {
  name: 'app',
  components: {
    'nav-bar': NavBar
  },
  data: function() {
    return {

    }
  }
}
</script>

<style lang="scss">
</style>