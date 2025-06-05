<script setup>
import { ref, onMounted } from 'vue';
import BaseCard from '@/components/Cards/BaseCard.vue';
import StandardBtn from '@/components/Buttons/StandardBtn.vue';
import NewsletterModal from '@/components/Modals/NewsletterModal.vue';

const showNewsletterModal = ref(false);

const featuredNews = ref(null);
const sidebarNews = ref([]);
const articleCards = ref([]);

const baseURL = "https://www.mmd-s23-afsluttende-wp.dk/wp-json/wp/v2/";

const readMore = (id) => {
  console.log("Navigate to post ID:", id);
  // Example: router.push({ name: 'ArticlesPostView', params: { id } });
};

const openNewsletterModal = () => {
  showNewsletterModal.value = true;
};

const handleNewsletterSubmit = (formData) => {
  console.log('Newsletter signup data:', formData);
};

onMounted(() => {
  fetch(`${baseURL}news?per_page=100&_embed`)
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        featuredNews.value = data[0];
        sidebarNews.value = data.slice(1, 3);
        articleCards.value = data.slice(3);
      }
    })
    .catch(err => console.error("News fetch error:", err));
});
</script>

<template>
  <main>
    <div class="headerSection">
      <div class="titleWithLine">
        <h1>Nyheder</h1>
        <div class="line"></div>
      </div>
    </div>

    <div class="contentWrapper">
      <section class="contentSection">
       <div class="headerSection">
      <div class="titleWithLine">
        <h2>Seneste Nyheder</h2>
        <div class="line"></div>
      </div>
    </div>

        <div
          class="featuredNews"
          v-if="featuredNews"
          @click="readMore(featuredNews.id)"
        >
          <div class="newsImage">
            <img
              :src="featuredNews._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''"
              :alt="featuredNews.title.rendered"
            />
          </div>
          <div class="newsContent">
            <h3 class="newsTitle" v-html="featuredNews.title.rendered"></h3>
            <p class="newsExcerpt" v-html="featuredNews.excerpt?.rendered || ''"></p>
            <StandardBtn class="readMoreBtn" variant="primary">Læs mere</StandardBtn>
          </div>
        </div>
      </section>

      <aside class="sidebar">
        <div class="newsletterSection">
          <h3 class="newsletterTitle">Tilmeld dig vores nyhedsbrev her</h3>
          <p class="newsletterText">
            Skriv dig op til vores nyhedsbrev og hold dig opdateret på det nyeste som sker
          </p>
          <StandardBtn variant="primary" @click="openNewsletterModal">Tilmeld nyhedsbrev</StandardBtn>
        </div>

        <div class="sidebarNews">
          <BaseCard
            v-for="post in sidebarNews"
            :key="post.id"
            variant="horizontalNews" 
            :title="post.title.rendered"
            :summary="post.excerpt?.rendered"
            :date="new Date(post.date).toLocaleDateString('da-DK')"
            :image="post._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''"
            @click="readMore(post.id)"
          />
          
        </div>
      </aside>
    </div>

    <section>
     <div class="headerSection">
      <div class="titleWithLine">
        <h2>Alle Nyheder</h2>
        <div class="line"></div>
      </div>
    </div>
      <div class="cardGrid">
        <BaseCard
          v-for="post in articleCards"
          :key="post.id"
          variant="News"
          :title="post.title.rendered"
          :summary="post.excerpt?.rendered"
          :date="new Date(post.date).toLocaleDateString('da-DK')"
          :image="post._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''"
          @click="readMore(post.id)"
        />
      </div>
    </section>

    <NewsletterModal
      v-model="showNewsletterModal"
      @submit="handleNewsletterSubmit"
    />
  </main>
</template>

<style scoped>
.contentWrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--section-gap);
  align-items: start;
}

.featuredNews {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  cursor: pointer;
}

.newsImage img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.newsContent {
  display: flex;
  flex-direction: column;
}

.newsTitle {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: var(--space-sm);
}

.newsExcerpt {
  color: var(--textFont);
  margin-bottom: var(--space-md);
  line-height: var(--text-line-Height);
}

.readMoreBtn {
  padding: var(--space-sm) var(--space-lg);
  align-self: flex-start;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.newsletterSection {
  background-color: #98161D;
  color: white;
  padding: var(--space-lg);
  border-radius: 8px;
}

.newsletterTitle {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: var(--space-sm);
}

.newsletterText {
  color: white;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: var(--space-md);
}

.sidebarNews {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.cardGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-lg);
  margin-top: var(--space-md);
}

/* Responsive */
@media (max-width: 1024px) {
  .contentWrapper {
    grid-template-columns: 1fr;
  }
  .sidebar {
    order: 1;
  }
}
</style>