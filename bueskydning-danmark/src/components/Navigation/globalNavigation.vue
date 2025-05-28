<script setup>
import globalNavData from './globalNavData.js'

</script>


<template>
<header>
  <nav class="nav">
    <ul class="navList">
        <li v-for="item in globalNavData" :key="item.label" class="navItem">
        <router-link v-if="item.to" :to="item.to" class="navLink">{{ item.label }}</router-link>
        <span v-else class="navLabel">{{ item.label }}</span>

        <ul v-if="item.children" class="submenu">
          <li v-for="child in item.children" :key="child.label" class="
          dropdownItem">
            <router-link v-if="child.to" :to="child.to" class="dropdownLink">{{ child.label }}</router-link>
            <span v-else class="dropdownLabel">{{ child.label }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</header>
</template>

<style scoped>
.nav {
  background: #98161D;
  padding: 1rem;
}

.navList {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.navItem {
  position: relative;
}

.navLink,
.navLabel {
  font-weight: bold;
  color: #333;
  text-decoration: none;
  color: white;
}

.navLink:hover {
  text-decoration: underline;
}

.submenu {
  list-style: none;
  position: absolute;
  background: #98161D;
  padding: 0.5rem;
  display: none;
  top: 100%;
  left: 0;
  z-index: 10;
}

.navItem:hover .submenu {
  display: block;
}

.dropdownLink {
  display: block;
  padding: 0.25rem 0.5rem;
  color: #444;
  text-decoration: none;
}

.dropdownLink:hover {
  background: #eee;
}
</style>