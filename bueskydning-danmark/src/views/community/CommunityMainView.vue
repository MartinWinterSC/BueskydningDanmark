<script setup>
import TextImageSection from '@/components/SectionComponents/TextImageSection.vue';
import BaseCard from '@/components/Cards/BaseCard.vue';
import AthleteCard from '@/components/Cards/AtheleteCard.vue';
import StandardBtn from '@/components/Buttons/StandardBtn.vue';

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
    <section class="headerSection">
      <h1>Fællesskabet</h1>
      <TextImageSection 
        Breadtekst="Velkommen til Fællesskabet. Dette er stedet, hvor du kan holde dig opdateret med  nyheder fra bueskydningsverdenen, dykke ned i inspirerende magasiner, udforske tidligere indhold og deltage i forummet, hvor du kan stille spørgsmål, dele erfaringer og hjælpe andre bueskyttere. "
        Image="https://via.placeholder.com/150" 
      />
    </section>

    <section class="CardSection">
         <h2>News</h2>
        <div class="cardGrid">
        <BaseCard 
          v-for="(Newscards,index) in Newscards"
          :key="Newscards.title"
          v-bind="Newscards"/>
      </div>
      <div class="seeMoreBtnContainer">
         <StandardBtn variant="primary">Se flere Nyheder</StandardBtn>
      </div>
    </section>

    <section class="CardSection">
         <h2>Forum posts</h2>
        <div class="cardGrid">
        <BaseCard 
          v-for="(Forumscards,index) in Forumscards"
          :key="Forumscards.title"
          v-bind="Forumscards"/>
      </div>
       <div class="seeMoreBtnContainer">
         <StandardBtn variant="primary">Se flere Posts</StandardBtn>
      </div>
    </section>

     <section class="CardSection">
        <h2>Magsiner</h2>
         <div class="cardGrid">
        <BaseCard 
          v-for="(Magasincards,index) in Magasincards"
          :key="Magasincards.title"
          v-bind="Magasincards"/>
      </div>
      <div class="seeMoreBtnContainer">
         <StandardBtn variant="primary">Se flere magasiner</StandardBtn>
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

.headerSection h1 {
  font-size: 2.5rem;
  font-weight: bold;
  position: relative;
  padding-bottom: var(--space-md);
}

.headerSection {
  margin-bottom: var(--space-lg);
}

h1{
   padding-top:var(--space-lg);
}

/*Det her er til at lave linjen under titler */
.headerSection h1::after {
  content: '';
  position: absolute;
  left:0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: #98161D;
}


.seeMoreBtnContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem
}

.CardSection h2 {
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  padding-bottom: var(--space-md);
}

h2{
   padding-top:var(--space-lg);
}

/*Det her er til at lave linjen under titler */
.CardSection h2::after {
  content: '';
  position: absolute;
  left:0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: #98161D;
}

.CardSection {
  margin-bottom: var(--space-lg);
}

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