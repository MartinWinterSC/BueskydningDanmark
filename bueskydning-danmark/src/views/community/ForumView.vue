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

</template>

<style>

</style>