<template lang="html">
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from '_resources/components/NavBar.vue'

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