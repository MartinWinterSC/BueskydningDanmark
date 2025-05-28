<script setup>
const props = defineProps({
    Breadtekst: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
})
</script>

<template>
    <div class="TextImageSection">
        <div class="TextImageContent">
            <div class="TextContent">
                <p>{{ Breadtekst }}</p>
            </div>
            <div class="ImageContent">
                <img :src="image" alt="Section Image" />
            </div>
        </div>
    </div>
</template>


<style scoped> 

.TextImageSection {
    width: 100%;
    margin: 20px 0;
}

.TextImageContent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

.TextContent p {
    font-size: 1rem;
    line-height: 1.6;
    color: #e2e8f0;
    margin: 0;
}

.ImageContent {
    display: flex;
    justify-content: center;
}

.ImageContent img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
}

/* Mobile responsivt */
@media (max-width: 768px) {
    .TextImageContent {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .TextContent {
        order: 2;
    }
    
    .ImageContent {
        order: 1;
    }
}
</style>