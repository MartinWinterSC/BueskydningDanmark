<script setup>
import BaseCard from '@/components/Cards/BaseCard.vue';
import EventCard from '@/components/Cards/CalendarCards.vue'

const cards = [
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
</script>

<template>
 <div class="NewsRow">
  <BaseCard 
    v-for="(card,index) in cards"
    :key="index"
    v-bind="card"/>
 </div>

<EventCard 
    image="https://via.placeholder.com/150"
    title="Event Title"
    description="This is a description of the event."
    date="2023-10-01"
    time="12:00 PM"
    location="Event Location"
    buttonText="Læs mere" />

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
  
.NewsRow {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

</style>
