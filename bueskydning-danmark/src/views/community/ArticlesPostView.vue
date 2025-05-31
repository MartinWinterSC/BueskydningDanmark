<script setup>
import { ref } from 'vue'

// Reactive state
const isLiked = ref(false)
const isBookmarked = ref(false)

// Placeholder data til post som skal erstattes med aktuelt data fra wordpress eller API
const post = ref({
  title: "Emne: Træningsips til bedre fokus og stabilitet - hvad virker for jer?",
  image: "https://via.placeholder.com/500x300",
  imageAlt: "Training exercise demonstration",
  content: [
    "Hej alle sammen!",
    "Jeg vil gerne få skytte og har været i gang i lidt over 3 måneder nu. Jeg har altid på det grundlæggende, men jeg synes stadig at have fokus og stabilitet, især når jeg skyder flere serier i træk.",
    "Jeg vil rigtig gerne høre jeres bedste træningsips, både fysisk og mentalt.",
    "Hvordan arbejder I med fx:"
  ],
  bulletPoints: [
    "At holde kroppen afslappet men stabil?",
    "At fastholde koncentrationen under en hel træning?",
    "At arbejde med vejrtrækning - og hvordan bruger I det?",
    "Jeg er især interesseret i enkle øvelser eller rutiner, man kan bruge som del af opvarmning eller hjemmetræning.",
    "Gerne mig til at have jeres erfaringer og måske få lidt inspiration til næste træningspass!",
    "Bedste hilsner,",
    "Mads"
  ]
})

const comments = ref([
  {
    id: 1,
    username: "Mads",
    timestamp: "6 måneder",
    avatar: "/placeholder.svg?height=40&width=40",
    text: "Velkommen til sporten - fedt at høre om din motivation! Et par hurtige tips: Du kan prøve vejrtrækningsøvelser, det hjælper både med ro og koncentration. Sørg for at få trænet med stabilitet af at styrke alle små muskler i fitness, især mavemuskler! Og rytmisk, så man meget bruger som til at hvile og træk stille. Mvh Brian"
  },
  {
    id: 2,
    username: "Marianne",
    timestamp: "6 måneder",
    avatar: "/placeholder.svg?height=40&width=40",
    text: "Fedt at høre om din træning! Jeg har haft god gavn af at styrketræning og balanceøvelser - især core og ben. Træntræning med fokus på åftræk og sige hjælper også med at holde teknikken skarp. For koncentration bruger jeg faste rutiner og små mentale pauser mellem serier. Hilsen Marianne"
  }
])

const sidebarItems = ref([
  {
    id: 1,
    title: "Emme: Lær det rette mindset til bueskydning",
    image: "/placeholder.svg?height=120&width=200"
  },
  {
    id: 2,
    title: "Emme: Bueskydning i naturen",
    image: "/placeholder.svg?height=120&width=200"
  },
  {
    id: 3,
    title: "Emme: Salg af brugt udstyr den 2016",
    image: "/placeholder.svg?height=120&width=200"
  },
  {
    id: 4,
    title: "Emme: Recurvebue sælges",
    image: "/placeholder.svg?height=120&width=200"
  }
])

// Methods
const toggleLike = () => {
  isLiked.value = !isLiked.value
}

const toggleBookmark = () => {
  isBookmarked.value = !isBookmarked.value
}
</script>

<template>
  <main>
  <div class="PostContainer">
    <div class="headerSection">
    <div class="titleWithLine">
         <h1>Post Name</h1>
        <div class="line"></div>
    </div>
  </div>

    <!-- Flyttes evt til eget resuable component (breadcrumbs) -->
    <nav class="navigation">
      <a href="#" class="backLink">
        <span class="backArrow">‹</span> Tilbage
      </a>
    </nav>

    <div class="postLayout">
      <!-- Main Content -->
      <section class="mainContent">
        <!-- Post Image -->
        <div class="postImageContainer">
          <img 
            :src="post.image" 
            :alt="post.imageAlt"
            class="postImage"
          />
        </div>

        <!-- Post Actions -->
        <div class="postActions">
          <button 
            class="actionBtn"
            :class="{ active: isLiked }"
            @click="toggleLike"
          >
            <span class="heartIcon"></span>
          </button>
          <button 
            class="actionBtn"
            :class="{ active: isBookmarked }"
            @click="toggleBookmark"
          >
            <span class="bookmarkIcon">🏷</span>
          </button>
        </div>

        <!-- Post Content -->
        <article class="postContent">
          <h2 class="postTitle">{{ post.title }}</h2>
          <div class="postBody">
            <p v-for="(paragraph, index) in post.content" :key="index">
              {{ paragraph }}
            </p>
            <ul v-if="post.bulletPoints" class="bullet-points">
              <li v-for="(point, index) in post.bulletPoints" :key="index">
                {{ point }}
              </li>
            </ul>
          </div>
        </article>

        <!-- Comment Section -->
        <section class="commentsSection">
          <button class="commentBtn">Skriv en kommentar</button>
          
          <div class="commentsList">
            <div 
              v-for="comment in comments" 
              :key="comment.id"
              class="comment"
            >
              <div class="commentAvatar">
                <img :src="comment.avatar" :alt="comment.username" />
              </div>

              <div class="commentContent">
                <div class="commentHeader">
                  <span class="commentUsername">{{ comment.username }}</span>
                  <span class="commentTime">{{ comment.timestamp }}</span>
                </div>
                <p class="commentText">{{ comment.text }}</p>
              </div>

            </div>
          </div>
        </section>
      </section>

      <!-- Sidebar -->
      <aside class="sidebar">
        <div 
          v-for="item in sidebarItems" 
          :key="item.id"
          class="sidebarCard"
        >
          <img :src="item.image" :alt="item.title" class="sidebarImage" />
          <div class="sidebarContent">
            <h3 class="sidebarTitle">{{ item.title }}</h3>
          </div>
        </div>
      </aside>


    </div>
  </div>
  </main>
</template>


<style scoped>
.PostContainer {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-lg);
  font-family: var(--font-family);
  background-color: var(--color-background);
}

.postHeader {
  margin-bottom: var(--space-md);
}

.postTitle {
  font-size: 24px;
  font-weight: bold;
  color: var(--headerFont);
  margin-bottom: var(--space-xs);
}

.navigation {
  margin-bottom: var(--space-md);
}

.backLink {
  color: #666;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.backLink:hover {
  color: var(--font-color);
}

.backArrow {
  font-size: 18px;
}

.postLayout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: var(--space-lg);
}

.mainContent {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.postImageContainer {
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}

.postImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #e9ecef;
}

.postActions {
  padding: var(--space-md);
  display: flex;
  gap: var(--space-sm);
  border-bottom: 1px solid #eee;
}

.actionBtn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: var(--space-xs);
  border-radius: 4px;
  transition: background-color 0.2s;
}

.actionBtn:hover {
  background-color: #f0f0f0;
}

.actionBtn.active .heartIcon {
  color: #dc3545;
}

.actionBtn.active .bookmarkIcon {
  color: var(--BtnColor);
}

.postContent {
  padding: var(--space-md);
}

.postBody p {
  margin-bottom: var(--space-sm);
  line-height: var(--text-line-Height);
  color: var(--textFont);
}

.bullet-points {
  margin: var(--space-md) 0;
  padding-left: var(--space-md);
}

.bullet-points li {
  margin-bottom: var(--space-xs);
  line-height: var(--text-line-Height);
  color: var(--textFont);
}

/* Kommentare Section */
.commentsSection {
  border-top: 1px solid #eee;
  padding: var(--space-md);
}

.commentBtn {
  background-color: #e9ecef;
  border: none;
  padding: var(--space-sm) var(--space-md);
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  margin-bottom: var(--space-md);
  transition: background-color 0.2s;
  width: 100%;
  text-align: left;
}

.commentBtn:hover {
  background-color: #dee2e6;
}

.commentsList {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.comment {
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-sm);
  background-color: #f8f9fa;
  border-radius: 8px;
}

.commentAvatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #dee2e6;
}

.commentContent {
  flex: 1;
}

.commentHeader {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-xs);
}

.commentUsername {
  font-weight: 600;
  color: var(--font-color);
  font-size: 14px;
}

.commentTime {
  color: #666;
  font-size: 12px;
}

.commentText {
  margin: 0;
  line-height: 1.5;
  color: var(--textFont);
  font-size: 14px;
}


/*Side artikler  */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.sidebarCard {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.2s;
}

.sidebarCard:hover {
  transform: translateY(-2px);
}

.sidebarImage {
  width: 100%;
  height: 120px;
  object-fit: cover;
  background-color: #e9ecef;
}

.sidebarContent {
  padding: var(--space-sm);
  background-color: var(--BtnColor);
  color: var(--BtnTextColor);
}

.sidebarTitle {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}


/* Media queries */
@media (max-width: 768px) {
  .postLayout {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }

  .sidebar {
    order: -1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-sm);
  }

  .comment {
    flex-direction: column;
  }

  .commentHeader {
    flex-direction: column;
    align-items: flex-start;
  }
}

</style>