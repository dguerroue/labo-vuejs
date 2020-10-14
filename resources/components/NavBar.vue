<template>
  <nav class="navbar shadow-sm">
      <!-- menu links -->
      <ul>
        <li v-for="(route, index) in routes" :key="index" class="nav-item">
          <router-link :to="route.path" class="nav-link">{{route.name || route.path}}</router-link>
        </li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data: function() {
    return {
      routes: this.$router.options.routes
    }
  }
}
</script>

<style lang="scss" scoped>
</style>