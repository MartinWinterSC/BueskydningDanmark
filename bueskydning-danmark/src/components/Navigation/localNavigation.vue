<template>
  <div class="localNnavigation">
    <div class="navContainer">
      <a href="/bue-udregner" class="navItem">
        <div class="navIcon">
          
        </div>
        <span class="navText">Bue udregner</span>
      </a>
      
      <a href="/kalender" class="navItem">
        <div class="navIcon">
          
        </div>
        <span class="navText">Kalender</span>
      </a>
      
      <a href="/faelleskabbet" class="navItem">
        <div class="navIcon">
          
        </div>
        <span class="navText">Fælleskabbet</span>
      </a>
      
      <a href="/resultater" class="navItem">
        <div class="navIcon">
          
        </div>
        <span class="navText">Resultater</span>
      </a>
    </div>
  </div>
</template>

<style scoped>

.localNavigation {
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 0 auto;
}

.navContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  border-radius: 20px;
  background-color: #064373;
}

.navItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  background-color: #064373;
  padding: 16px 12px;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
}

.navItem:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.navIcon {
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navText {
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: white;
  line-height: 1.3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .localNavigation {
    padding: 16px;
    border-radius: 12px;
  }
  
  .navContainer {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  
  .navItem {
    padding: 12px 8px;
  }
  
  .navIcon {
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
  }
  
  .navText {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .navContainer {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  
  .navItem {
    padding: 10px 6px;
  }
  
  .navIcon {
    width: 28px;
    height: 28px;
  }
  
  .navText {
    font-size: 11px;
  }
}
</style>