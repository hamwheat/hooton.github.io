<template>
  <header class="navbar">
    <div class="navbar-wrapper">
      <div class="navbar-brand">
        <img alt="Logo" class="logo" src="./assets/images/logo.jpg" width="40"
             height="40"/>
        <SideBarToggle />
      </div>

      <ThemeToggle @switchThemeClick="switchThemeClick"/>
    </div>
  </header>
  <main class="page-content">
    <router-view/>
  </main>
</template>

<script setup>
import ThemeToggle from "@/components/toggle/ThemeToggle.vue";
import SideBarToggle from "@/components/toggle/SideBarToggle.vue";
import {onMounted} from "vue";

/**
 * 主题切换按钮子组件抛出的点击事件
 * @param e 事件对象(为了获取点击事件的坐标)
 */
function switchThemeClick(e) {
  // 如果是pc端
  if (window.innerWidth > 768) {
    // 执行切换主题的操作
    const transition = document.startViewTransition(() => {
      // 动画过渡切换主题色
      document.documentElement.classList.toggle("dark");
      // 保存主题设置
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    // startViewTransition返回一个Promise对象，表示动画的开始
    transition.ready.then(() => {
      // 获取点击事件的坐标
      const {clientX, clientY} = e;
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
  } else {
    // 如果是移动端直接变色
    document.documentElement.classList.toggle("dark");
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }
}

onMounted(() => {
  // 从localStorage加载主题设置
  const savedTheme = localStorage.getItem('theme'); // 获取本地存储的主题设置
  const toggleElement = document.getElementById('theme-toggle')  // 获取主题切换按钮的元素
  const toggleInputElement = document.getElementById('theme-toggle-checkbox') // 获取主题切换按钮的输入元素
  switch (savedTheme) {
    case 'dark':
      document.documentElement.classList.add('dark');
      toggleInputElement.checked = true;
      break;
    case 'light':
      document.documentElement.classList.remove('dark');
      toggleInputElement.checked = false;
      break;
    default:
      // 如果没有设置主题，则根据系统主题设置
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        toggleInputElement.checked = true;
      } else {
        document.documentElement.classList.remove('dark');
        toggleInputElement.checked = false;
      }
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  top: 0;
  left: 0;
  width: 100%;
  position: sticky;
  height: var(--nav-height);
  z-index: var(--nav-z-index);
}

.navbar-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  color: var(--secondary-color);
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  /* 毛玻璃效果 */
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  -webkit-backdrop-filter: saturate(50%) blur(4px);
  background-image: radial-gradient(transparent 1px, var(--background-color) 1px);
}
.logo {
  border-radius: 50%;
  margin-right: 12px;

  &:hover {
    animation: flip 0.5s;
  }
}
.navbar-brand {
  display: flex;
  align-items: center;
}

.page-content {
  padding-top: var(--nav-height); /* 确保内容不被导航栏遮挡 */
}

@media screen and (min-width: 1680px) {
  .navbar-wrapper {
    padding: 0 48px;
  }
}

@media screen and (min-width: 1280px) {
  .navbar-wrapper {
    padding: 0 32px;
  }
}

@media screen and (min-width: 768px) {
  .navbar-wrapper {
    padding: 0 12px 0 32px;
  }
}
</style>
