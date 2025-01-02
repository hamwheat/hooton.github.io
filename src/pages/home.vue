<!--
 * @Author: yang
 * @Date: 2024-12-31 14:41:49
 * @LastEditors: yang
 * @LastEditTime: 2025-01-02 11:03:26
 * @Description: 
 -->
<template>
  <header>
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
    <button @click="toggleTheme" class="theme-toggle">Toggle Theme</button>
    <div class="wrapper">
      <HelloWorld msg="Welcome to My Personal Website!" />
    </div>
  </header>

  <main>
    <section class="content">
      <h1>About Me</h1>
      <p>This is a brief introduction about myself.</p>
    </section>
    <section class="content">
      <h1>Projects</h1>
      <p>Here are some of my projects.</p>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

const isDarkTheme = ref(false);

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  document.documentElement.setAttribute('data-theme', isDarkTheme.value ? 'dark' : 'light');
  localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
};

onMounted(() => {
  // 从localStorage加载主题设置
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkTheme.value = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});
</script>

<style scoped>
:root {
  --background-color: #ffffff;
  --text-color: #000000;
  --primary-color: #42b983;
}

[data-theme="dark"] {
  --background-color: #121212;
  --text-color: #ffffff;
  --primary-color: #4caf50;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  text-align: center;
  padding: 1rem;
  background-color: var(--primary-color);
}

.logo {
  margin-bottom: 1rem;
}

.theme-toggle {
  background-color: transparent;
  border: none;
  color: var(--text-color);
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
}

.theme-toggle:hover {
  text-decoration: underline;
}

.wrapper {
  margin-bottom: 1rem;
}

main {
  padding: 1rem;
}

.content {
  margin-bottom: 2rem;
}

.content h1 {
  color: var(--primary-color);
}

@media (min-width: 768px) {
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .theme-toggle {
    margin-bottom: 0;
    margin-top: 1rem;
  }

  .wrapper {
    margin-bottom: 2rem;
  }

  main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .content {
    flex: 1;
    margin: 0 1rem;
  }
}

@media (min-width: 1024px) {
  header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .theme-toggle {
    margin-left: 1rem;
  }

  .wrapper {
    margin-left: 1rem;
  }
}
</style>
