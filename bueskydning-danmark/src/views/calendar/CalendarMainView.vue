<script setup>
import EventCard from '@/components/Cards/CalendarCards.vue'
import Calendar from '@/components/Calendar.vue';
</script>

<template>
    <main>
        <div class="headerSection">
    <div class="titleWithLine">
         <h1>Kalender</h1>
        <div class="line"></div>
    </div>

    <Calendar />
  </div>
        
        <EventCard 
        image=""
        title="Event Title"
        description="This is a description of the event."
        date="2023-10-01"
        time="12:00 PM"
        location="Event Location"
        buttonText="Læs mere" />

        <EventCard 
        image=""
        title="Event Title"
        description="This is a description of the event."
        date="2023-10-01"
        time="12:00 PM"
        location="Event Location"
        buttonText="Læs mere" />
    </main>



</template>

<style>

</style>