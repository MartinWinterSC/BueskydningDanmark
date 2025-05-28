<script setup>
import TextImageSection from '@/components/SectionComponents/TextImageSection.vue';
import BaseCard from '@/components/Cards/BaseCard.vue';

const Newscards = [
  {
    variant: 'News',
    title: 'Testing',
    date: '2023-10-01',
    summary: 'this is a test so far, I just wanna see if this works',
    image: 'https://via.placeholder.com/150'
  },
  {
    variant: 'News',
    title: 'Testing 2',
    date: '2023-10-01',
    summary: 'this is a test so far, I just wanna see if this works',
    image: 'https://via.placeholder.com/150'
  },
   {
    variant: 'News',
    title: 'Testing 3',
    date: '2023-10-01',
    summary: 'this is a test so far, I just wanna see if this works',
    image: 'https://via.placeholder.com/150'
  },
];

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

const Magasincards = [
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
        <section class="HomeSection">
      <h1>Om Bueskydning Danmark</h1>
      <TextImageSection 
        Breadtekst="Velkommen til Fællesskabet. Dette er stedet, hvor du kan holde dig opdateret med  nyheder fra bueskydningsverdenen, dykke ned i inspirerende magasiner, udforske tidligere indhold og deltage i forummet, hvor du kan stille spørgsmål, dele erfaringer og hjælpe andre bueskyttere. "
        Image="https://via.placeholder.com/150" 
      />
    </section>

    <section class="newsSection">
         <h2>News</h2>
        <div class="cardGrid">
        <BaseCard 
          v-for="(Newscards,index) in Newscards"
          :key="Newscards.title"
          v-bind="Newscards"/>
      </div>
    </section>

    <section class="forumSection">
         <h2>Forum posts</h2>
        <div class="cardGrid">
        <BaseCard 
          v-for="(Forumscards,index) in Forumscards"
          :key="Forumscards.title"
          v-bind="Forumscards"/>
      </div>
    </section>

     <section class="magasineSection">
        <h2>Magsiner</h2>
         <div class="cardGrid">
        <BaseCard 
          v-for="(Magasincards,index) in Magasincards"
          :key="Magasincards.title"
          v-bind="Magasincards"/>
      </div>
    </section>
    </main>
 
          
</template>

<style scoped>

.cardGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
}
</style>