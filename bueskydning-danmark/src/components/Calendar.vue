<script setup>
import { ref, computed } from 'vue'

const today = new Date()
const currentDate = ref(new Date())
const events = ref({}) // key: 'YYYY-MM-DD', value: [events]

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const currentMonthYear = computed(() => {
  return currentDate.value.toLocaleDateString('default', {
    month: 'long',
    year: 'numeric',
  })
})

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = getDaysInMonth(year, month)

  const days = []

  // Add padding before first day
  for (let i = 0; i < firstDay; i++) {
    days.push({ day: '', date: '', events: [] })
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    days.push({
      day: d,
      date: dateStr,
      events: events.value[dateStr] || [],
    })
  }

  return days
})

const addEvent = (date) => {
  if (!date) return
  const text = prompt(`Add event for ${date}`)
  if (text) {
    if (!events.value[date]) {
      events.value[date] = []
    }
    events.value[date].push(text)
  }
}

const isToday = (dateStr) => {
  const date = new Date(dateStr)
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

const prevMonth = () => {
  const date = new Date(currentDate.value)
  date.setMonth(date.getMonth() - 1)
  currentDate.value = date
}

const nextMonth = () => {
  const date = new Date(currentDate.value)
  date.setMonth(date.getMonth() + 1)
  currentDate.value = date
}
</script>

<template>
  <div class="calendar">
    <div class="header">
      <button @click="prevMonth">‹</button>
      <h2>{{ currentMonthYear }}</h2>
      <button @click="nextMonth">›</button>
    </div>

    <div class="weekdays">
      <div v-for="day in weekdays" :key="day">{{ day }}</div>
    </div>

    <div class="days">
      <div
        v-for="day in calendarDays"
        :key="day.date"
        class="day"
        :class="{ today: isToday(day.date) }"
        @click="addEvent(day.date)"
      >
        <div class="date-number">{{ day.day }}</div>
        <ul class="events">
          <li v-for="(event, index) in day.events" :key="index">{{ event }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>



<style scoped>
.calendar {
  max-width: 600px;
  margin: auto;
  font-family: sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.weekdays, .days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
}

.weekdays div {
  font-weight: bold;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
}

.day {
  border: 1px solid #eee;
  padding: 0.5rem;
  min-height: 80px;
  cursor: pointer;
  position: relative;
}

.day.today {
  background-color: #d0f0ff;
  border: 2px solid #00aaff;
}

.date-number {
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.events {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.75rem;
}

.events li {
  background: #f0f0f0;
  margin-top: 2px;
  padding: 2px 4px;
  border-radius: 4px;
}
</style>
