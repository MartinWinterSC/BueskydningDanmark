<script setup>
import { ref, onMounted } from 'vue';
import TextImageSection from '@/components/SectionComponents/TextImageSection.vue';
import BaseCard from '@/components/Cards/BaseCard.vue';
import StandardBtn from '@/components/Buttons/StandardBtn.vue';
import communityHero from '@/assets/Billeder/Community.png';

const Magasincards = ref([]);
const Newscards = ref([]);
const Forumscards = ref([]);

const baseURL = "https://www.mmd-s23-afsluttende-wp.dk/wp-json/wp/v2/";

onMounted(() => {
  fetch(baseURL + "news?per_page=3&_embed")
    .then(response => response.json())
    .then(data => {
      Newscards.value = data.map(post => ({
        variant: 'News',
        title: post.title.rendered,
        date: post.date?.slice(0, 10),
        summary: post.acf?.summary || '',
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
        link: post.link || '#'
      }));
    })
    .catch(error => console.error("News fetch error:", error));

  fetch(baseURL + "forum?per_page=3&_embed")
    .then(response => response.json())
    .then(data => {
      Forumscards.value = data.map(post => ({
        variant: 'Simple',
        title: post.title.rendered,
        summary: post.acf?.summary || '',
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
        link: post.link || '#'
      }));
    })
    .catch(error => console.error("Forum fetch error:", error));

    fetch(baseURL + "print?per_page=3&_embed")
    .then(response => response.json())
    .then(data => {
      Magasincards.value = data.map(post => ({
        variant: 'Simple',
        title: post.title.rendered,
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
        link: post.acf?.print_pdf?.url || '#'
      }));
    })
    .catch(error => console.error("Print fetch error:", error));
});
</script>



<template>
    <main>
    <section class="headerSection">
       <div class="headerSection">
        <div class="titleWithLine">
            <h1>Fællesskabet</h1>
            <div class="line"></div>
        </div>
       </div>
      <TextImageSection 
        Breadtekst="Velkommen til Fællesskabet. Dette er stedet, hvor du kan holde dig opdateret med  nyheder fra bueskydningsverdenen, dykke ned i inspirerende magasiner, udforske tidligere indhold og deltage i forummet, hvor du kan stille spørgsmål, dele erfaringer og hjælpe andre bueskyttere."
        :image="communityHero" 
      />
    </section>

    <section class="headerSection"> 
        <div class="titleWithLine">
          <h2>News</h2>
          <div class="line"></div>
        </div>
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

    <section class="headerSection"> 
        <div class="titleWithLine">
         <h2>Forum</h2>
         <div class="line"></div>
        </div>
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

    <section class="headerSection" id="print"> 
      <div class="titleWithLine">
        <h2>Magasiner</h2>
        <div class="line"></div>
      </div>
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

.seeMoreBtnContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem
}

.cardGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  justify-content: center;
  max-width: 1000px;
  margin-top: 1rem;
  
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