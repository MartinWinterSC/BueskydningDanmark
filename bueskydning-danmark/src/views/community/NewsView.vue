<script setup>
import { ref } from 'vue';
import BaseCard from '@/components/Cards/BaseCard.vue';
import StandardBtn from '@/components/Buttons/StandardBtn.vue';
import NewsletterModal from '@/components/Modals/NewsletterModal.vue';

const showNewsletterModal = ref(false)

const readMore = (id) => {
};

const signupNewsletter = () => {
};

const openNewsletterModal = () => {
  showNewsletterModal.value = true
}

const handleNewsletterSubmit = (formData) => {
  console.log('Newsletter signup data:', formData)
}
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
        <div class="SubHeaderSection">
          <h2>Seneste nyheder</h2>
        </div>

        <div class="featuredNews" @click="readMore('main-article')">
          <div class="newsImage">
            <img src="" alt="DM-UGEN Aalborg" />
          </div>
          <div class="newsContent">
            <h3 class="newsTitle">HOLD DM 2025 – DIF DM-UGEN</h3>
            <p class="newsExcerpt">
              Bueskydning Danmark ser igen i 2025 frem til KÆMPE......
            </p>
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
            variant="horizontalNews"
            title="Koldt hoved og god teknik"
            summary="Nedenstående artikel er bragt i bladet BUESKYDNING i..."
            date="Maj 2025"
            image="https://via.placeholder.com/120x80"
            @click="readMore('sidebar-1')"
          />

          <BaseCard
            variant="horizontalNews"
            title="Invitation til Sommerskydning 2025"
            summary="Bueskydning Danmark er klar med invitationen for..."
            date="April 2025"
            image="https://via.placeholder.com/120x80"
            @click="readMore('sidebar-2')"
          />
        </div>
      </aside>
    </div>

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
  background-color: #f3f4f6;
  padding: var(--space-lg);
  border-radius: 8px;
}

.newsletterTitle {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: var(--space-sm);
}

.newsletterText {
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: var(--space-md);
}

.sidebarNews {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
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
