<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import BaseCard from '@/components/Cards/BaseCard.vue';

const router = useRouter();

function handleClick(team) {
  router.push({ name: 'NationalTeamView', params: { id: team.id } });
}

const NationalTeams = ref([
  { id: 1, name: 'Recurve landsholdet', image: '/placeholder.svg' },
  { id: 2, name: 'Compound landsholdet', image: '/placeholder.svg' },
  { id: 3, name: '3D landsholdet', image: '/placeholder.svg' },
  { id: 4, name: 'Herre landsholdet', image: '/placeholder.svg' },
  { id: 5, name: 'Kvinde landsholdet', image: '/placeholder.svg' },
  { id: 6, name: 'Ungdoms landsholdet', image: '/placeholder.svg' },
]);

</script>

<template>
  <main>
     <div class="headerSection">
    <div class="titleWithLine">
         <h1>Landshold</h1>
        <div class="line"></div>
    </div>
  </div>

  <section class="BaseSection">
    <div class="Container">
      <BaseCard
        v-for="team in NationalTeams"
        :key="team.id"
        :variant="'Simple'"
        :title="team.name"
        :image="team.image"
        @click="handleClick(team)"
        />
    </div>
  </section>
  </main>
  

</template>

<style scoped>

.BaseSection {
  padding: 2rem;
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