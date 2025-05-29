<script setup>
import globalNavData from './globalNavData.js'
import BueskydningLogo from '@/assets/BueskydningLogo.svg'
</script>

<template>
  <header>
    <nav class="nav">
      <div class="navInner">
        <!-- Logo -->
        <router-link to="/" class="navLogoContainer">
          <img src="@/assets/BueskydningLogo.svg" alt="Logo" class="navLogo" />
        </router-link>

        <!-- Navigation Items -->
        <ul class="navList">
          <li v-for="item in globalNavData" :key="item.label" class="navItem">
            <router-link v-if="item.to" :to="item.to" class="navLink">
              <span>{{ item.label }}</span>
            </router-link>
            <span v-else class="navLabel">{{ item.label }}</span>

            <ul v-if="item.children" class="submenu">
              <li v-for="child in item.children" :key="child.label" class="dropdownItem">
                <router-link v-if="child.to" :to="child.to" class="dropdownLink">
                  {{ child.label }}
                </router-link>
                <span v-else class="dropdownLabel">{{ child.label }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>


.navLogo {
  width: 10rem;
  height: auto;
  vertical-align: middle;
}

.nav {
  background: #98161D;
  padding: 1rem;
}

.navInner {
  display: grid;
  grid-template-columns: auto .8fr;
  align-items: center;
  column-gap: 2rem;
  width: 100%;
}

.navLogoContainer {
  flex-shrink: 0;
}

.navLogo {
  width: 10rem;
  height: auto;
}

.navList {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap; /* Optional, for responsiveness */
  width: 100%;
}

.navItem {
  position: relative;
}

.navLink,
.navLabel {
  font-weight: bold;
  color: white;
  text-decoration: none;
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
  color: #fff;
  text-decoration: none;
}

.dropdownLink:hover {
  background: #c22b30;
}
</style>