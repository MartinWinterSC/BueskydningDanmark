<script setup>
import BaseCard from '@/components/Cards/BaseCard.vue';


const Forumscards = [
  {
    variant: 'Simple',
    title: 'Testing',
    summary: 'this is a test so far, I just wanna see if this works',
    image: 'https://via.placeholder.com/150'
  },
  {
    variant: 'Simple',
    title: 'Testing 2',
    summary: 'this is a test so far, I just wanna see if this works',
    image: 'https://via.placeholder.com/150'
  },
   {
    variant: 'Simple',
    title: 'Testing 3',
    summary: 'this is a test so far, I just wanna see if this works',
    image: 'https://via.placeholder.com/150'
  },
];
</script>

<template>
  <main>
    <div class="headerSection">
      <h1>Forum</h1>
    </div>
    
    <section class="forumSection">
         <h2>Nye posts</h2>
        <div class="cardGrid">
        <BaseCard 
          v-for="(Forumscards,index) in Forumscards"
          :key="Forumscards.title"
          v-bind="Forumscards"/>
      </div>
    </section>

    <section class="forumSection">
         <h2>Populære posts</h2>
        <div class="cardGrid">
        <BaseCard 
          v-for="(Forumscards,index) in Forumscards"
          :key="Forumscards.title"
          v-bind="Forumscards"/>
      </div>
    </section>

  </main>



</template>

<style>
.cardGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
}

/* Tablet: 2 kolonner */
@media (min-width: 640px) {
  .cardGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3 kolonner */
@media (min-width: 1024px) {
  .cardGrid {
    grid-template-columns: repeat(3, 1fr);
  }
  
}
</style>