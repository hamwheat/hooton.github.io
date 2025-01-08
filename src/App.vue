<template>
  <!-- 导航栏 -->
  <header class="navbar">
    <div class="navbar-wrapper">
      <div class="navbar-left">
        <img alt="Logo" class="logo" src="./assets/images/logo.jpg" width="40"
             height="40" @click="logoClick"/>
      </div>
      <div class="navbar-right">
        <ul class="navbar-tabs">
          <li>
            <a href="javascript:void(0)" @click="tabClick" v-text="'<Main />'"></a>
          </li>
          <li>
            <a href="javascript:void(0)" @click="tabClick" v-text="'<Blog />'"></a>
          </li>
          <li>
            <a href="javascript:void(0)" @click="tabClick" v-text="'<CodeSpace />'"></a>
          </li>
        </ul>
        <ThemeToggle @switchThemeClick="switchThemeClick"/>
      </div>
    </div>
  </header>
  <main class="page-content">
    <router-view/>
  </main>
</template>

<script setup>
import ThemeToggle from "@/components/toggle/ThemeToggle.vue";
import SideBarToggle from "@/components/toggle/SideBarToggle.vue";
import {ref, onMounted} from "vue";
import router from "@/router/index.js";
import {useRoute} from "vue-router";

function logoClick() {
  router.push('/')
}

function tabClick() {
  router.push('/')
}

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

/**
 * 根据路由判断哪个tab被选中
 */
function checkTabActive() {
  const route = useRoute();
  console.log('route.name', route.name);
  switch (route.name) {
    case 'main':
      document.querySelector('.navbar-tabs li a').classList.add('active');
      break;
    case 'blog':
      document.querySelector('.navbar-tabs li a:nth-child(2)').classList.add('active');
      break;
    case 'codespace':
      document.querySelector('.navbar-tabs li a:nth-child(3)').classList.add('active');
      break;
    default:
      document.querySelector('.navbar-tabs li a').classList.add('active');
      break;
  }
}

onMounted(() => {
  // 从localStorage加载主题设置
  const savedTheme = localStorage.getItem('theme'); // 获取本地存储的主题设置
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
  checkTabActive();
})
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: var(--nav-z-index);
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.navbar-wrapper {
  height: var(--nav-height);
  width: 80%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--secondary-color);
  border: 1px solid var(--border-color);
  border-radius: 50px;
  /* 毛玻璃效果 */
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  -webkit-backdrop-filter: saturate(50%) blur(4px);
  background-image: radial-gradient(transparent 1px, var(--secondary-color) 1px);
}

.logo {
  border-radius: 50%;
  margin-right: 12px;

  &:hover {
    animation: flip 0.5s;
  }
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0 48px;
  font-size: 18px;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    a {
      margin: 0 24px;
      color: var(--text-color);
      text-decoration-line: none;

      &:hover {
        color: var(--primary-color);
        transition: color 0.3s ease;
      }
    }
    &.active {
      a {
        color: var(--primary-color);
      }
    }
  }
}

.page-content {
  transition: margin-left 0.3s ease;
}

@media screen and (min-width: 1680px) {
  .navbar-wrapper {
    padding: 0 48px !important;
  }
}

@media screen and (min-width: 1280px) {
  .navbar-wrapper {
    padding: 0 32px !important;
  }
}

@media screen and (min-width: 768px) {
  .navbar-wrapper {
    padding: 0 32px !important;
  }
}
</style>
