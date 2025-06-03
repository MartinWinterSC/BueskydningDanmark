<script setup>
import { ref } from 'vue'
import globalNavData from './globalNavData.js'

// Logo import
import BueskydningLogo from '@/assets/BueskydningLogo.svg'

// Mobile menu toggle
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header>
    <nav class="nav">
      <div class="navTopBar">
        <router-link to="/" class="navLogoContainer">
          <img src="@/assets/BueskydningLogo.svg" alt="Logo" class="navLogo" />
        </router-link>
        <button class="mobileToggle" @click="toggleMobileMenu" aria-label="Toggle navigation">
          <font-awesome-icon :icon="isMobileMenuOpen ? 'xmark' : 'bars'" class="mobileToggleIcon" />
        </button>
      </div>
    
      <ul class="navList" :class="{ open: isMobileMenuOpen }">
        <li v-for="item in globalNavData" :key="item.label" class="navItem">
            <router-link v-if="item.to" :to="item.to" class="navLink">
              <span>{{ item.label }}</span>
              <span v-if="item.children" class="navIcon">
                <font-awesome-icon icon="chevron-down" />
              </span>
            </router-link>
            <span v-else class="navLabel">
              {{ item.label }}
              <span v-if="item.children" class="navIcon">
                <font-awesome-icon icon="chevron-down" />
              </span>
            </span>
          
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
  display: flex;
}

.navInner {
  display: flex;
  /* grid-template-columns: auto .8fr; */
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
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

.navItem {
  position: relative;
  padding: var(--space-xs);
}

.navLink{
  
}

.navLink,
.navLabel {
  font-weight: bold;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
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

.navIcon{
  margin-left: var(--space-xs);
  display: inline-block;
}

.navItem:hover .navIcon{
  transform: rotate(180deg);
}

.dropdownLink, .dropdownLabel {
  display: block;
  padding: var(--space-xs);
  color: #fff;
  text-decoration: none;
}

.dropdownLink:hover {
  background: #c22b30;
}

.mobileToggle {
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  display: none; /* hidden on desktop */
}

.mobileToggleIcon {
  pointer-events: none;
}

.navTopBar{
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1200px) {
  .navInner {
    justify-content: space-between;
  }

  .nav{
    display: block;
  }

  .mobileToggle {
    display: block;
  }

  .navList {
    display: none;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    margin-top: 1rem;
  }

  .navList.open {
    display: flex;
  }

  .submenu {
    position: static;
    /* padding-left: 1rem; */
  }

  .navItem:hover .submenu {
    display: none;
  }

  .navItem .submenu {
    display: block;
  }

  .navItem:hover .submenu {
    display: block !important;
  }

  .navList{
    align-items: center;
    /* justify-content: center; */
  }

  .navIcon{
    display: none;
  }

  .navItem {
    text-align: center;
    margin-top: var(--space-md);
  }
}
</style>