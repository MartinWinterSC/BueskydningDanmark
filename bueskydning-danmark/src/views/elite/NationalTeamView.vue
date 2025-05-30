<script setup>
import { ref, computed } from 'vue';
import AthleteCard from '@/components/Cards/AtheleteCard.vue';

const props = defineProps({
  id: String
})


const athletes = ref([
  { id: 1, name: 'Oliver Staudt', category: 'Herre recurve', elite: true, club: 'Aalborg', image: '/placeholder.svg' },
  { id: 2, name: 'Anna Hansen', category: 'Dame compound', elite: true, club: 'København', image: '/placeholder.svg' },
  { id: 3, name: 'Jonas Madsen', category: 'Herre recurve', elite: true, club: 'Odense', image: '/placeholder.svg' },
  { id: 4, name: 'Oliver Staudt', category: 'Herre recurve', elite: true, club: 'Aalborg', image: '/placeholder.svg' },
  { id: 5, name: 'Anna Hansen', category: 'Dame compound', elite: true, club: 'København', image: '/placeholder.svg' },
  { id: 6, name: 'Jonas Madsen', category: 'Herre recurve', elite: true, club: 'Odense', image: '/placeholder.svg' },
]);


function handleClick(athlete) {
  console.log('Athlete clicked:', athlete.name);
}
</script>

<template>
  <section class="BaseSection">
    <h1>Landsholdet {{ props.id }}</h1>

    <div class="Container">
      <AthleteCard
        v-for="athlete in athletes"
        :key="athlete.id"
        :athlete="athlete"
        @cardClicked="handleClick"
      />
    </div>
  </section>
</template>

<style scoped>

.BaseSection {
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.BaseSection h1 {
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

/* Responsive flex container */
.Container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

/* Each card item */
.Container > * {
  flex: 1 1 100%; 
  max-width: 100%;
}

/* Tablet: 2 columns */
@media (min-width: 640px) {
  .Container > * {
    flex: 1 1 calc(50% - 1rem);
    max-width: calc(50% - 1rem);
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .Container > * {
    flex: 1 1 calc(33.333% - 1rem);
    max-width: calc(33.333% - 1rem);
  }
}

</style>