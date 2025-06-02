<script setup>
import TextImageSection from '@/components/SectionComponents/TextImageSection.vue';
import BaseCard from '@/components/Cards/BaseCard.vue';
import localNavigation from '@/components/Navigation/localNavigation.vue';
import Calendar from '@/components/Calendar.vue';
import instrucktorImg from '@/assets/Billeder/BoernOgInstruktoerBueskydning.jpeg';
import HeroImage from '@/assets/Billeder/heroImage.png';
import nySkytteImg from '@/assets/Billeder/nySkytte.png';
import StandardBtn from '@/components/Buttons/StandardBtn.vue';
import UptoTopBtn from '@/components/Buttons/UptoTopBtn.vue';


const cards = [
  {
    variant: 'News',
    title: 'Testing',
    date: '2023-10-01',
    summary: 'this is a test so far, I just wanna see if this works',
    image: ''
  },
  {
    variant: 'News',
    title: 'Testing 2',
    date: '2023-10-01',
    summary: 'this is a test so far, I just wanna see if this works',
    image: ''
  },
   {
    variant: 'News',
    title: 'Testing 3',
    date: '2023-10-01',
    summary: 'this is a test so far, I just wanna see if this works',
    image: ''
  },
];

const breadtekst = `Bueskydning Danmark er øverste faglige myndighed inden for Bueskydning i Danmark. Vi har en høj standart inden for vidensområderne; sikkerhed og regler, træningslære og afvikling af konkurrencer. Vi tilbyder bueskydning til alle niveauer. Vi ønsker at fremme bueskydning som amatøridræt såvel praktisk som teoretisk samt understøtte de skytter, som ønsker at dygtiggøre sig imod eliteskydning. Vi ønsker at engagere de skytter, der ønsker fællesskabet, og de skytter, der finder motivation i det autonome medlemskab via tilbud, som gør bueskydning relevant og nærværende.


Bueskydning Danmark er en del af et større fællesskab via medlemsskab af Danmarks Idrætsforbund (DIF) samt det internationale, europæiske og nordiske forbund i bueskydning; World Archery (WA), World Archery Europe (WAE) og World Archery Nordic (WAN). Via disse medlemsskaber og vores position, som værende den øverste faglige myndighed indenfor Bueskydning i Danmark, har vi ansvaret for at repræsentere dansk bueskydning samt vores foreninger i som udenfor Danmark.`;

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

    <div class="headerSection">
    <div class="titleWithLine">
         <h1>Om Bueskydning Danmark</h1>
        <div class="line"></div>
    </div>
    </div>

    <section class="HomeSection">
      <TextImageSection 
        :Breadtekst= breadtekst
         :image="instrucktorImg"
      />
    </section>

    <section class="newArcherSection">
    <img :src="nySkytteImg" alt="New Archer Image" class="newArcherImg" />
    <div class="newArcherContainer">

      <div class="newArcherContent">
        <h2>Er du ny skytte?</h2>
        <div class="NewArcherContentText">
          <p>
            Drømmer du om at prøve kræfter med bueskydning? Uanset om du er barn, voksen eller noget midt imellem, er bueskydning en sport for alle.
            Som ny skytte bliver du en del af et fællesskab, hvor der er plads til både sjov, fordybelse og personlig udvikling.
          </p>
          <p>Find ud af hvor du kan afprøve bueskydning henne tæt på dig</p>
        </div>
      </div>

      <div class="NewArcherContentFooter">
        <StandardBtn variant="primary" @click="$router.push('klubOversigtView')">Se klub oversigt</StandardBtn>
      </div>
      
    </div>

  </section>

  <section class="headerSection">
    <div class="titleWithLine">
         <h2>Kalender</h2>
        <div class="line"></div>
    </div>
    <div>
      <Calendar />
    </div>
    </section>

    <section class="headerSection"> 
        <div class="titleWithLine">
         <h2>Nyeste Nyheder</h2>
         <div class="line"></div>
        </div>
       <div class="cardGrid">
        <BaseCard 
          v-for="(card,index) in cards"
          :key="card.title"
          v-bind="card"/>
      </div>
    </section>
    <UptoTopBtn />
  </main>
</template>


<style scoped>
/* Hero sektion */
.HeroSection {
  position: relative;
  width: 100%;
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
  padding: 1rem
}

.HeroContent h1 {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 0.5rem;
}

.LocalNav {
  position: absolute;
  width: 65%;
  bottom: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  padding-bottom: 1.5rem;
}

.newArcherSection {
  display: grid;
  grid-template-columns: 1fr 400px 400px;
  position: relative;
  margin: 0 5vw;
}

.newArcherImg {
  grid-column: 1 / span 2;
  height: 60vh;
  position: relative;
  z-index: 1;
  object-fit: cover;
  width: 100%;
}

.newArcherContainer * {
  margin: 25px 0;
}

.newArcherContainer {
  grid-column: 2 / span 2;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 2;
  background-color: #98161D;
  padding: 40px;
  border-radius: 15px;
}


.NewArcherContentText{
  max-width: 60ch;
  margin: 0 auto;   
}

.newArcherContainer h2,
.newArcherContainer p {
  color: white;
  margin-top: 0;
}

.newArcherContent{
  margin: 0;
}

.newArcherContent p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: var(--space-md);
  color: white;
}

.NewArcherContentFooter{
  display: flex;
  justify-content: center;
  margin: 0;
}
.NewArcherContentFooter *{
  margin: 0;
}

.cardGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
}

/* Media queries */
@media (max-width: 768px) {
  .newArcherSection {
    display: flex;
    flex-direction: column;
  }
  
  .NewArcherContent h2 {
    font-size: 1.5rem;
  }
  
  .HomeSection h1 {
    font-size: 2rem;
  }

   .newArcherContainer {
    position: relative;
    top: unset;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    margin-top: -20px;
    border-radius: 15px;
    padding: 20px;
  }

   .newArcherImg {
    width: 100%;     /* Make image full width */
    height: auto;    /* Let height adjust automatically */
    border-radius: 15px;
    margin-bottom: -20px;
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