<script setup>
import { ref, computed } from 'vue';
import AthleteCard from '@/components/Cards/AtheleteCard.vue';
import AtheleteModal from '@/components/Modals/AtheleteModal.vue';


const props = defineProps({
  id: String
})

const selectedAthlete = ref(null);
const showModal = ref(false);

//temp Data
const athletes = ref([
  {
    id: 1,
    name: 'Oliver Staudt',
    category: 'Herre recurve',
    elite: true,
    club: 'Aalborg',
    image: '',
    Banner: '',
    clubLogo: '',
    birthdate: '1998-06-15',
    bow: 'Recurve',
    bestScore: 683,
    worldRanking: 42
  },
  {
    id: 2,
    name: 'Anna Hansen',
    category: 'Dame compound',
    elite: true,
    club: 'København',
     image: '',
    Banner: '',
    clubLogo: '',
    birthdate: '2001-03-22',
    bow: 'Compound',
    bestScore: 705,
    worldRanking: 18
  },
  {
    id: 3,
    name: 'Jonas Madsen',
    category: 'Herre recurve',
    elite: true,
    club: 'Odense',
    image: '',
    Banner: '',
    clubLogo: '',
    birthdate: '1995-11-04',
    bow: 'Recurve',
    bestScore: 665,
    worldRanking: 57
  },
  {
    id: 4,
    name: 'Frederikke Olsen',
    category: 'Dame recurve',
    elite: true,
    club: 'Viborg',
    image: '',
    Banner: '',
    clubLogo: '',
    birthdate: '2002-08-30',
    bow: 'Recurve',
    bestScore: 672,
    worldRanking: 30
  },
  {
    id: 5,
    name: 'Emil Thomsen',
    category: 'Herre compound',
    elite: true,
    club: 'Aarhus',
    image: '',
    Banner: '',
    clubLogo: '',
    birthdate: '1993-05-12',
    bow: 'Compound',
    bestScore: 712,
    worldRanking: 25
  },
  {
    id: 6,
    name: 'Sofie Jensen',
    category: 'Dame recurve',
    elite: true,
    club: 'Esbjerg',
    image: '',
    Banner: '',
    clubLogo: '',
    birthdate: '2000-12-10',
    bow: 'Recurve',
    bestScore: 678,
    worldRanking: 39
  }
]);


function handleClick(athlete) {
  selectedAthlete.value = athlete;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>

<template>
   <div class="headerSection">
    <div class="titleWithLine">
          <h1>Landsholdet {{ props.id }}</h1>
        <div class="line"></div>
    </div>
  </div>

  <section class="BaseSection">
    <div class="Container">
      <AthleteCard
        v-for="athlete in athletes"
        :key="athlete.id"
        :athlete="athlete"
        @cardClicked="handleClick"
      />
    </div>
  </section>
  <AtheleteModal
  :athlete="selectedAthlete"
  :visible="showModal"
  @close="closeModal"
/>
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