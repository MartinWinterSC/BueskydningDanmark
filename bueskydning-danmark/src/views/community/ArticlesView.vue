<script setup>
import BaseCard from '@/components/Cards/BaseCard.vue';

const readMore = (id) => {
};

const signupNewsletter = () => {
};
</script>

<template>
  <main>
  <div class="headerSection">
    <h1>Artikler</h1>
  </div>

  <div class="contentWrapper">
    <section class="mainContent">
      <div class="sectionHeader">
        <h2 class="sectionTitle">De nyeste artikler</h2>
        <div class="sectionDivider"></div>
      </div>

      <!-- Featured News Article -->
      <BaseCard
        variant="News"
        title="HOLD DM 2025 – DIF DM-UGEN"
        summary="Bueskydning Danmark ser igen i 2025 frem til KÆMPE......"
        date="2025"
        image=""
        @click="readMore('main-article')"
      />
    </section>

    <!-- Sidebar -->
    <aside class="sidebar">

      <!-- Newsletter Signup -->
      <div class="newsletterSection">
        <h3 class="newsletterTitle">Tilmeld dig vores nyhedsbrev her</h3>
        <p class="newsletterText">
          Skriv dig op til vores nyhedsbrev og hold dig opdateret på det nyeste som sker
        </p>
        <button class="newsletterBtn" @click="signupNewsletter">Tilmeld nyhedsbrev</button>
      </div>

      <!-- Additional News Articles -->
      <div class="sidebarArticles">
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
</main>
</template>


<style scoped>

.siteTitle {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--headerFont);
  margin-bottom: var(--space-md);
}

.contentWrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--section-gap);
  align-items: start;
}

.sectionHeader {
  margin-bottom: var(--space-lg);
}

.sectionTitle {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--headerFont);
  margin-bottom: var(--space-xs);
}

.sectionDivider {
  height: 4px;
  width: 100%;
  background-color: var(--Main-color);
}

.featuredArticle {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.articleImage img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.articleContent {
  display: flex;
  flex-direction: column;
}

.articleTitle {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: var(--space-sm);
}

.articleExcerpt {
  color: var(--textFont);
  margin-bottom: var(--space-md);
  line-height: var(--text-line-Height);
}

.readMoreBtn {
  background-color: var(--BtnColor);
  color: var(--BtnTextColor);
  border: none;
  padding: var(--space-sm) var(--space-lg);
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  align-self: flex-start;
}

.readMoreBtn:hover {
  background-color: var(--BtnColorhover);
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

.newsletterBtn {
  background-color: var(--BtnColor);
  color: var(--BtnTextColor);
  padding: var(--space-sm) var(--space-md);
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
}

.newsletterBtn:hover {
  background-color: var(--BtnColorhover);
}

.sidebarArticles {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.sidebarArticle {
  display: flex;
  gap: var(--space-md);
  padding-bottom: var(--space-md);
  border-bottom: 1px solid #e5e7eb;
}

.sidebarArticle:last-child {
  border-bottom: none;
}

.sidebarArticleImage {
  width: 120px;
  height: 80px;
  flex-shrink: 0;
}

.sidebarArticleImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.sidebarArticleContent {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.sidebarArticleTitle {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: var(--space-xs);
}

.sidebarArticleExcerpt {
  font-size: 0.85rem;
  line-height: 1.4;
  flex: 1;
  margin-bottom: var(--space-sm);
}

.sidebarReadMore {
  background-color: var(--BtnColor);
  color: var(--BtnTextColor);
  padding: var(--space-xs) var(--space-md);
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  align-self: flex-start;
}

.sidebarReadMore:hover {
  background-color: var(--BtnColorhover);
}

/* Responsive tweaks */
@media (max-width: 1024px) {
  .contentWrapper {
    grid-template-columns: 1fr;
  }
  .sidebar {
    order: 1;
  }
}

@media (max-width: 767px) {
  .sidebarArticle {
    flex-direction: column;
  }

  .sidebarArticleImage {
    width: 100%;
    height: 180px;
  }
}

</style>