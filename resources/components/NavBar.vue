<template>
  <nav class="navbar">
      <!-- menu links -->
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <router-link :to="route.path">{{route.name || route.path}}</router-link>
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