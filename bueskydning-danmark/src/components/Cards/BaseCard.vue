<script setup>
const props = defineProps({
    // Define any props if needed
    variant: {
        type: String,
       required: true,
    },
     title:{
        type: String,
        required: false,
        default: ''
    },
    summary: {
        type: String,
        required: false,
        default: ''
    },
    date: {
        type: String,
        required: false,
        default: ''
    },
    image: {
        type: String,
        required: true,
    }

});
</script>

<template>
   <div class="Card" :class="variant">

    <div class="CardImage">
        <img :src="image" alt="Card Image" />
    </div>

    <div class="CardContent">
        <h3 class="cardTitle"> {{ title }}</h3>
<!-- Conditional rendering baseret på variant - hvis det er news vises date og summart-->
        <template v-if="variant === 'News'">
            <p class="CardDate">{{ date }}</p>
            <p class ="CardSummary">{{ summary }}</p>
        </template>

        <template v-else-if="variant === 'Simple'"></template>
    </div>

    <div class="CardFooter">
        
    </div>

    </div>
</template>


<style scoped>
.Card {
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%; /* Sørger for at kortet tilpasser gridens bredde */
  margin: 0 auto; /* Bruges hvis kortet står alene i 1fr grid */
}

.CardImage {
  width: 100%;
  height: 160px;
  object-fit: cover;
    display: block;
}

.CardContent {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cardTitle {
  font-size: 1.1rem;
  color: black;
  font-weight: bold;
}

.CardDate {
  font-size: 0.9rem;
  color: black;
}

.CardSummary {
  font-size: 0.95rem;
  color: black;
  flex-grow: 1;
}

</style>