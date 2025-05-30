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
  <section class="BaseSection">
    <h1>Landsholdet</h1>

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