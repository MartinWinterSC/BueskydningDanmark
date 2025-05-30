<script setup>
import EventCard from '@/components/Cards/CalendarCards.vue'
</script>

<template>
    <main>
        <div class="headerSection">
            <h1>Kalender</h1>
        </div>
        
        <EventCard 
        image="https://via.placeholder.com/150"
        title="Event Title"
        description="This is a description of the event."
        date="2023-10-01"
        time="12:00 PM"
        location="Event Location"
        buttonText="Læs mere" />

        <EventCard 
        image="https://via.placeholder.com/150"
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