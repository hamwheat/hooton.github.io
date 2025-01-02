<!--
 * @Author: yang
 * @Date: 2024-12-31 14:41:49
 * @LastEditors: yang
 * @LastEditTime: 2025-01-02 11:22:01
 * @Description: 
 -->
<template>
  <header class="header">
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
    <button @click="toggleTheme" class="theme-toggle">切换主题</button>
    <div class="greeting">
      <HelloWorld msg="欢迎！" />
    </div>
  </header>

  <main class="main-content">
    <section class="content about">
      <h1>关于我</h1>
      <p>
        大家好！
      </p>
    </section>
    <section class="content projects">
      <h1>项目</h1>
      <p>
        这里是
      </p>
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
  } else {
    isDarkTheme.value = false;
    document.documentElement.setAttribute('data-theme', 'light');
  }
});
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  text-align: center;
}

.logo {
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
}

.theme-toggle {
  background-color: transparent;
  border: none;
  color: var(--secondary-color);
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: color 0.3s ease;
}

.theme-toggle:hover {
  color: var(--accent-color);
}

.greeting {
  margin-top: 1rem;
}

.main-content {
  padding: 2rem;
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  max-width: 800px;
  width: 100%;
  margin-bottom: 2rem;
  background-color: var(--background-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.content:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.content h1 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.content p {
  line-height: 1.6;
}

@media (min-width: 768px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .greeting {
    margin-top: 0;
  }

  .main-content {
    flex-direction: row;
    justify-content: space-around;
  }

  .content {
    margin-bottom: 0;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  .content:last-child {
    margin-right: 0;
  }
}

@media (min-width: 1024px) {
  .header {
    padding: 3rem;
  }

  .main-content {
    padding: 3rem;
  }

  .content {
    padding: 3rem;
  }
}
</style>
