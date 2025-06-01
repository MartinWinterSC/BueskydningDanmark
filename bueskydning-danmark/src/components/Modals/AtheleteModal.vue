<script setup>

const props = defineProps({
  athlete: Object,
  visible: Boolean
});

const emit = defineEmits(['close']);
</script>

<template>
  <div v-if="visible" class="modal-overlay" @click.self="emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="emit('close')">X</button>

      <!-- Athlete content -->
      <div class="athlete-profile">
        <img class="background" :src="athlete.background || ''" />
        <div class="left-panel">
          <img class="portrait" :src="athlete.image" />
          <div class="club-banner">
            <img :src="athlete.clubLogo || ''" />
          </div>
        </div>
        <div class="right-panel">
          <h2>{{ athlete.name }}</h2>
          <p><strong>Fødselsdag:</strong> {{ athlete.birthdate || 'Ikke oplyst' }}</p>
          <p><strong>Bue:</strong> {{ athlete.bow || 'Ukendt' }}</p>
          <p><strong>Klub:</strong> {{ athlete.club }}</p>
          <div class="socials">
            <a href="#"><img src="" /></a>
          </div>
        </div>

       <div class="stats-boxes">
          <div class="stat"><p>Bedste score</p><strong>{{ athlete?.bestScore || 'N/A' }}</strong></div>
          <div class="stat"><p>World Ranking</p><strong>{{ athlete?.worldRanking || 'N/A' }}</strong></div>
          <div class="stat"><p>Internationale stævner</p><a href="#"><strong>Klik her</strong></a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  background: white;
  width: 90%;
  max-width: 800px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
}

.athlete-profile {
  padding: 2rem;
}

.left-panel {
  float: left;
  width: 40%;
  text-align: center;
}

.right-panel {
  float: right;
  width: 60%;
}

.portrait {
  width: 120px;
  border-radius: 50%;
}

.stats-boxes {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
}

.stat {
  border: 2px solid #a00;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
}
</style>
