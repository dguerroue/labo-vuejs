<template>
  <nav class="navbar p-0 pl-3">
    <ul class="m-0 p-0">

      <router-link to="/" v-slot="{ href, route, isActive, isExactActive }">
        <li :class="['nav-item', {'active': isExactActive}]">
          <a :href="href" class="nav-link">Home</a>
        </li>
      </router-link>

      <router-link to="/about" v-slot="{ href, route, isActive }">
        <li :class="['nav-item', {'active': isActive}]">
          <a :href="href" class="nav-link">About</a>
        </li>
      </router-link>

    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>