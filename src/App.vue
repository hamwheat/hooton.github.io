<template>
  <header class="nav-bar">
    <img alt="Logo" class="logo animate__animated animate__flip" src="./assets/images/logo.jpg" width="55" height="55" />
    <ThemeToggle @switchThemeClick="switchThemeClick"/>
  </header>
  <router-view/>
</template>
<script setup>
import ThemeToggle from "@/components/toggle/ThemeToggle.vue";
import {onMounted} from "vue";
// import { useThemeStore } from '@/stores/themeStore.js';
// const themeStore = useThemeStore();
// const { setTheme } = themeStore;

/**
 * 主题切换按钮子组件抛出的点击事件
 * @param e 事件对象(为了获取点击事件的坐标)
 */
function switchThemeClick(e) {
  // 执行切换主题的操作
  const transition = document.startViewTransition(() => {
    // 动画过渡切换主题色
    document.documentElement.classList.toggle("dark");
    // 保存主题设置
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    // setTheme(document.documentElement.classList.contains("dark"));
  });
  // startViewTransition返回一个Promise对象，表示动画的开始
  transition.ready.then(() => {
    // 获取点击事件的坐标
    const { clientX, clientY } = e;
    // 计算最大半径
    const radius = Math.hypot(
        Math.max(clientX, innerWidth - clientX),
        Math.max(clientY, innerHeight - clientY)
    );
    // 圆形扩散动画
    document.documentElement.animate(
        // 动画样式(从0%到最大半径的圆形)
        {
          clipPath: [
            `circle(0% at ${clientX}px ${clientY}px)`,
            `circle(${radius}px at ${clientX}px ${clientY}px)`,
          ],
        },
        // 设置时间和目标伪元素
        {
          duration: 300,
          pseudoElement: "::view-transition-new(root)",
        }
    );
  });
}

onMounted(() => {
  // 从localStorage加载主题设置
  const savedTheme = localStorage.getItem('theme');
  const toggleElement = document.getElementById('theme-toggle')
  switch (savedTheme) {
    case 'dark':
      document.documentElement.classList.add('dark');
      break;
    case 'light':
      document.documentElement.classList.remove('dark');
      break;
    default:
      // 如果没有设置主题，则根据系统主题设置
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
   }
})
</script>

<style>
.nav-bar {
  height: 60px;
  display: flex;
  align-items: center;
  color: var(--secondary-color);
  justify-content: space-between;
  background-color: var(--primary-color);
}

.logo {
  border-radius: 50%;
  transition: transform 0.3s ease;
}
</style>

