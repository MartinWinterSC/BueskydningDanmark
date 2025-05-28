<script setup>
import TextImageSection from '@/components/SectionComponents/TextImageSection.vue';
import BaseCard from '@/components/Cards/BaseCard.vue';
import localNavigation from '@/components/Navigation/localNavigation.vue';

import instrucktorImg from '@/assets/Billeder/BoernOgInstruktoerBueskydning.jpeg';
import HeroImage from '@/assets/Billeder/heroImage.png';
import nySkytteImg from '@/assets/Billeder/nySkytte.png';


const cards = [
  {
    variant: 'News',
    title: 'Testing',
    date: '2023-10-01',
    summary: 'this is a test so far, I just wanna see if this works',
    image: 'https://via.placeholder.com/150'
  },
  {
    variant: 'News',
    title: 'Testing 2',
    date: '2023-10-01',
    summary: 'this is a test so far, I just wanna see if this works',
    image: 'https://via.placeholder.com/150'
  },
   {
    variant: 'News',
    title: 'Testing 3',
    date: '2023-10-01',
    summary: 'this is a test so far, I just wanna see if this works',
    image: 'https://via.placeholder.com/150'
  },
];
</script>

<template>

   <section class="HeroSection">
      <img :src="HeroImage" alt="Hero Image" class="HeroImage" />
      <div class="HeroContent">
        <h1>Bueskydning Danmark</h1>
        <h4>Det er sjovt at skyde med bue!</h4>
      </div>
      <div class="LocalNav">
        <localNavigation />
      </div>
    </section>

  <main>
    <section class="HomeSection">
      <h1>Om Bueskydning Danmark</h1>
      <TextImageSection 
        Breadtekst="Bueskydning Danmark er øverste faglige myndighed inden for Bueskydning i Danmark. Vi har en høj standart inden for vidensområderne; sikkerhed og regler, træningslære og afvikling af konkurrencer. Vi tilbyder bueskydning til alle niveauer. Vi ønsker at fremme bueskydning som amatøridræt såvel praktisk som teoretisk samt understøtte de skytter, som ønsker at dygtiggøre sig imod eliteskydning. Vi ønsker at engagere de skytter, der ønsker fællesskabet, og de skytter, der finder motivation i det autonome medlemskab via tilbud, som gør bueskydning relevant og nærværende."
         :image="instrucktorImg"
      />
    </section>

    <section class="newArcherSection">
      <div class="NewArcherImg">
        <img :src="nySkytteImg" alt="New Archer Image" />
      </div>
      <div class="NewArcherBlock">
        <div class="NewArcherContent">
          <h2>Er du ny skytte?</h2>
          <p>Drømmer du om at prøve kræfter med bueskydning? Uanset om du er barn, voksen eller noget midt imellem, er bueskydning en sport for alle. Som ny skytte bliver du en del af et fællesskab, hvor der er plads til både sjov, fordybelse og personlig udvikling.</p>
          <p>Find ud af hvor du kan afprøve bueskydning henne tæt på dig</p>
        </div>
        <button class="NewArcherButton">Se klub oversigt</button>
      </div>
    </section>

     <section class="HomeSection">
      <h1>Kalender</h1>
    </section>

    <section class="HomeSection">
      <h1>Nyheder</h1>
       <div class="cardGrid">
        <BaseCard 
          v-for="(card,index) in cards"
          :key="card.title"
          v-bind="card"/>
      </div>
    </section>
  </main>
</template>


<style scoped>

.HomeSection {
  margin-bottom: 60px;
}

.HomeSection h1 {
  font-size: 2.5rem;
  font-weight: bold;
  position: relative;
  padding-bottom: 1rem;
   padding-top: 1.5rem;
}

/*Det her er til at lave linjen under titler */
.HomeSection h1::after {
  content: '';
  position: absolute;
  left:0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: #98161D;
}

/* Hero sektion */
.HeroSection {
  position: relative;
  width: 100%;
  overflow: hidden; /* prevents sidescrolling */
}

.HeroImage {
  width: 100%;
  height: 30rem;
  display: block;
  object-fit: cover;
}

.HeroContent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 1;
  padding: 1rem;
}

.LocalNav {
  position: absolute;
  width: 70%;
  bottom: 0rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.newArcherSection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;
  padding: 40px 0;
}

.NewArcherImg {
 width: auto;
 height: auto;
}

.NewArcherImg img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
}

.NewArcherBlock {
  background-color: #98161D;
  padding: 3rem;
  border-radius: 12px;
  position: relative;
}

.NewArcherContent h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
}

.NewArcherContent p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 15px;
  color: white;
}

.NewArcherButton {
  background-color: #1e40af;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.NewArcherButton:hover {
  background-color: #1d4ed8;
}

.cardGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
}

/* Media queries */
@media (max-width: 768px) {
  .newArcherSection {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .NewArcherBlock {
    padding: 30px;
  }
  
  .NewArcherContent h2 {
    font-size: 1.5rem;
  }
  
  .HomeSection h1 {
    font-size: 2rem;
  }
}

/* Tablet: 2 kolonner */
@media (min-width: 640px) {
  .cardGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3 kolonner */
@media (min-width: 1024px) {
  .cardGrid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>