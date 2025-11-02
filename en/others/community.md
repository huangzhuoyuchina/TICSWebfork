---
sidebar: false
---

# Join the Discord

Welcome to our discord! Here, you can learn how to join and participate in activities. We look forward to growing, learning, and sharing with you.

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const toggleRules = () => isOpen.value = !isOpen.value

const qqGroups = [
  { name: "Discord Channel", number: "ajnYST4j", link: "https://discord.gg/ajnYST4j" },
]
</script>

<div class="community-component">
  <h2>How to Join</h2>
  <div class="join-methods">
    <div v-for="group in qqGroups" :key="group.number" class="qq-group">
      <a :href="group.link" target="_blank" rel="noopener noreferrer">
        <h3>{{ group.name }}</h3>
        <p>{{ group.number }}</p>
      </a>
    </div>
  </div>

  <h2>Group Chat Rules</h2>
  <div class="rules-card" :class="{ 'is-open': isOpen }">
    <div class="rules-header" @click="toggleRules">
      <h3>Teyvat Institute of Culture and Science Chat Room Group Guidelines</h3>
      <span class="toggle-icon">{{ isOpen ? '▲' : '▼' }}</span>
    </div>
    
      Group members refer to official members who have joined the group chat 
      through legal means and in accordance with regulations.
          Rights and obligations: Group members enjoy the rights 
          protected by group rules and laws and must fulfill the 
          corresponding obligations.
          Group members must adhere to the following provisions:
            
              Abide by laws and regulations, and voluntarily supervise the 
              implementation of group rules and laws.
              Take legal responsibility for posted content and support the 
              leadership of the Communist Party of China and the central 
              government.
              Supervise group management actions and have a collective sense 
              of responsibility.
            
          
          All group members are equal under the law and group rules.
          Any form of behavior that insults or defames others and violates their 
          personal dignity is prohibited.
          Propaganda of serious illegal acts such as attacking or subverting the 
          party’s regime is strictly forbidden.
          Posting inappropriate content 
          (spam, content inappropriate for minors, etc.) is prohibited.
          The spread of cults and harmful cultural content is prohibited.
          Do not incite discord or cause trouble within the group.
          Posting illegal or rule-violating content such as pornography, 
          gambling, multi-level marketing, etc., is prohibited.
          Do not post advertising information without consent.
      
    
  </div>
</div>


<style scoped>
.join-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.qq-group a {
  display: block;
  background-color: var(--vp-c-bg-soft);
  padding: 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.3s ease;
  text-align: center;
  border: 1px solid var(--vp-c-divider);
}

.qq-group a:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.qq-group h3 {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  color: var(--vp-c-brand);
}

.qq-group p {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.rules-card {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
  transition: all 0.3s ease;
}

.rules-header {
  background-color: var(--vp-c-brand);
  color: white;
  padding: 0.8rem 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}



.rules-header h3 {
  margin: 0;
  font-size: 1rem;
}

.toggle-icon {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.rules-card.is-open .toggle-icon {
  transform: rotate(180deg);
}

.rules-content {
  padding: 1rem;
  display: none;
}

.rules-card.is-open .rules-content {
  display: block;
}

.rules-content ol {
  padding-left: 1.2rem;
}

.rules-content li {
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
}

.rules-content ul {
  padding-left: 1.2rem;
  list-style-type: disc;
}

@media (max-width: 640px) {
  .join-methods {
    grid-template-columns: 1fr;
  }
  
  .rules-header h3 {
    font-size: 0.9rem;
  }
  
  .rules-content li {
    font-size: 0.8rem;
  }
}
</style>