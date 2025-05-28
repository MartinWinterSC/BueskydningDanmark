<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    subscribeNewsletter() {
      if (this.email) {
        alert(`Tak for tilmeldingen! Email: ${this.email}`)
        this.email = ''
      }
    }
  }
}
</script>

<template>
  <footer class="footer">
    <div class="footerContainer">
      <!-- Logo and Social Media Section -->
      <div class="footerSection">
        <div class="socialSection">
          <p class="followText">Følg os på</p>
          <div class="socialIcons"></div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="footerSection">
        <h3 class="sectionTitle">Kontakt</h3>
        <div class="contactInfo">
          <p><strong>Email:</strong> generic@email.com</p>
          <p><strong>Telefon:</strong> 123456789</p>
          <p><strong>Adresse:</strong> Brønby Stadion 20<br>2605 Brønby</p>
          <p><strong>CVR:</strong> 89262712</p>
        </div>
      </div>

      <!-- Links Section -->
      <div class="footerSection links-section">
        <h3 class="sectionTitle">Links</h3>
        <nav class="footerNav">
          <a href="#" class="footer-link">Fælleskab</a>
          <a href="#" class="footer-link">Kalender</a>
          <a href="#" class="footer-link">Stævner</a>
          <a href="#" class="footer-link">Træning</a>
          <a href="#" class="footer-link">Information</a>
          <a href="#" class="footer-link">Bredde</a>
          <a href="#" class="footer-link">Elite</a>
        </nav>
      </div>

      <!-- Newsletter Section -->
      <div class="footerSection newsletter-section">
        <h3 class="sectionTitle">Tilmeld vores newsletter</h3>
        <p class="newsletterDescription">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque.
        </p>
        <form @submit.prevent="subscribeNewsletter" class="newsletterForm">
          <input 
            type="email" 
            v-model="email" 
            placeholder="Din email adresse"
            class="newsletterInput"
            required
          >
          <button type="submit" class="newsletter-button">Tilmeld</button>
        </form>
      </div>
    </div>
  </footer>
</template>


<style scoped>
.footer {
  background-color: #98161D;
  color: white;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  width: 100%;
}

.footerContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  width: 100%;  /* Fylder hele .footer */
  box-sizing: border-box;
}

.footerSection {
  display: flex;
  flex-direction: column;
}

/* Logo Section */
.logoSection {
  gap: 20px;
}

.followText {
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 500;
}

.socialIcons {
  display: flex;
  gap: 15px;
}

.socialIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: white;
  color: #8B2635;
  border-radius: 50%;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.socialIcon:hover {
  transform: scale(1.1);
}

/* Contact Section */
.sectionTitle {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 0;
}

.contactInfo p {
  margin: 8px 0;
  line-height: 1.4;
}

/* Links Section */
.footerNav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footerLink {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s ease;
}

.footerLink:hover {
  opacity: 0.8;
  text-decoration: underline;
}

/* Newsletter Section */
.newsletterDescription {
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 20px;
}

.newsletterForm {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.newsletterInput {
  padding: 12px 16px;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  outline: none;
}

.newsletterButton {
  padding: 12px 20px;
  background-color: white;
  color: #98161D;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.newsletterButton:hover {
  background-color: #f0f0f0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footerContainer {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
  
  .logo {
    justify-content: center;
  }
  
  .socialIcons {
    justify-content: center;
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .footerContainer {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}
</style>