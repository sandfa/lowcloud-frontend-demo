<script setup lang="ts"></script>

<template>
  <div class="app-wrapper">
    <div class="background-gradient"></div>
    <div class="container">
      <h1 class="title">Welcome to Your lowcloud demo App</h1>
      <div class="glass-card">
        <div class="success-icon">🚀</div>
        <h2>Successfully Deployed!</h2>
        <p>Your Vue.js Demo application is now running on lowlcoud</p>
      </div>
      <div class="links">
        <a href="https://vuejs.org/" target="_blank" rel="noopener" class="glass-link">
          <span>Vue.js Docs</span>
        </a>
        <a href="https://lowcloud.io" target="_blank" rel="noopener" class="glass-link">
          <span>lowcloud.io</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Wrapper für gesamte App */
.app-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

/* Animierter Gradient-Hintergrund */
.background-gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 25%,
    #f093fb 50%,
    #4facfe 75%,
    #00f2fe 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  z-index: -1;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Glassmorphic Container */
.container {
  max-width: 600px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
}

/* Titel mit Glaseffekt */
.title {
  font-size: 3em;
  font-weight: 700;
  margin-bottom: 30px;
  color: #ffffff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  letter-spacing: -0.5px;
}

/* Glassmorphic Card */
.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 40px 30px;
  margin: 30px 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.success-icon {
  font-size: 4em;
  margin-bottom: 15px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.glass-card h2 {
  color: #ffffff;
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 15px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.glass-card p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1em;
  line-height: 1.6;
}

/* Links Container */
.links {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

/* Glassmorphic Link Buttons */
.glass-link {
  display: inline-block;
  padding: 12px 30px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95em;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.glass-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.glass-link:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 768px) {
  .title {
    font-size: 2em;
  }

  .glass-card {
    padding: 30px 20px;
  }

  .glass-card h2 {
    font-size: 1.5em;
  }

  .links {
    flex-direction: column;
    align-items: center;
  }

  .glass-link {
    width: 100%;
    max-width: 250px;
  }
}
</style>
