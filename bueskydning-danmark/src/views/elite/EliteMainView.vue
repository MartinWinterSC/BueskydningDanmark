<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import BaseCard from '@/components/Cards/BaseCard.vue';

const router = useRouter();

const EliteNavPoints = ref([
  { id: 1, name: 'Landsholdet', image: '/placeholder.svg' },
  { id: 2, name: 'Skytterepræsentant', image: '/placeholder.svg' },
  { id: 3, name: 'Talecenter', image: '/placeholder.svg' },
  { id: 4, name: 'Talentudvikling', image: '/placeholder.svg' },
  { id: 5, name: 'Skole og uddannelse', image: '/placeholder.svg' },
  { id: 6, name: 'Antidoping', image: '/placeholder.svg' },
]);

function handleClick(NavPoint) {
  router.push({ name: 'NationalTeamOverviewView', params: { id: NavPoint.id } });
}
</script>

<template>
  <main>
 <section class="BaseSection">
    <h1>Elite </h1>

    <section>
      <img src="" alt="" />
      <div class="TextContainer">
        <div class></div>
          <p>Alle bruttolandsholdsskytter indgår en aftale med Bueskydning Danmark, som skal sikre et ordentligt samarbejde mellem skytte og forbund.</p>
          <p><span><strong>OBS! :</strong></span>  Praktiske regler for selvfinansiering på internationale opgaver
            Bueskydning Danmark har besluttet at opkræve et acontobeløb for selvfinansieret deltagelse på internationale opgaver. Opkrævningen udsendes og skal betales umiddelbart efter bindende tilmelding til opgaven. Efter holdlederens afslutning af rejseafregningen, afregnes endeligt (+/-) med selvfinansierede skytter. Dette vil ske 2-3 uger efter hjemkomst.</p>
          <p><span><strong>OBS! :</strong></span>  Landsholds-T-shirts må benyttes til nationale stævner
            Dommerudvalget har godkendt at skytter der er på bruttolandsholdene kan anvende deres landsholds-t-shirts med sponsor tryk ved nationale stævner. Dommerne vil være informeret om dette og der skal altså ikke fremvises individuelle sponsorkontrakter for dette. Når en skytte udtræder af bruttotruppen må tøjet med sponsor-tryk ikke længere benyttes, med mindre der laves en individuel sponsorkontrakt, mellem skytten og sponsoren – i dette tilfælde Danage. </p>
      </div>
    </section>

    <div class="Container">
      <BaseCard
        v-for="NavPoint in EliteNavPoints"
        :key="NavPoint.id"
        :variant="'Simple'"
        :title="NavPoint.name"
        :image="NavPoint.image"
        @click="() => handleClick(NavPoint)"
        />
    </div>
  </section>

  </main>
 

</template>

<style scoped>

.BaseSection {
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 16px;
  
}

.BaseSection h1 {
  font-size: 2.5rem;
  font-weight: bold;
  position: relative;
  padding-bottom: var(--space-md);
}

.BaseSection h1::after {
  content: '';
  position: absolute;
  left:0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: #98161D;
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

.TextContainer{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: var(--space-md);
  max-width: 100ch;
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