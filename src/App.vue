<template>
  <!-- 导航栏 -->
  <header class="navbar">
    <div class="navbar-wrapper">
      <div class="navbar-left">
        一个测试页面
        <!--        <img alt="Logo" class="logo" src="./assets/images/logo.jpg" width="40"-->
        <!--             height="40" @click="logoClick"/>-->
      </div>
      <div class="navbar-right">
        <ul class="navbar-tabs-pc">
          <li :class="{ active: activeTab === 'main' }">
            <a href="/hooton.github.io/#/" @click="tabClick" v-text="'<Main />'"></a>
          </li>
          <li :class="{ active: activeTab === 'blog' }">
            <a href="/hooton.github.io/#/blog" @click="tabClick" v-text="'<Blog />'"></a>
          </li>
          <li :class="{ active: activeTab === 'codeSpace' }">
            <a href="/hooton.github.io/#/codeSpace" @click="tabClick" v-text="'<CodeSpace />'"></a>
          </li>
        </ul>
        <ThemeToggle @switchThemeClick="switchThemeClick"/>
        <div class="navbar-tabs-mobile">
          <SideBarToggle/>
        </div>
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
import {ref, onMounted, watch} from "vue";
import router from "@/router/index.js";
import {useRoute} from "vue-router";

const activeTab = ref('main'); // 默认激活的tab

/**
 * logo点击
 */
function logoClick() {
  router.push('/');
}

/**
 * tab点击
 * @param event 事件对象
 */
function tabClick(event) {
  const tabName = event.target.textContent.trim().replace(/<|>/g, '');
}

/**
 * 切换主题
 * @param e 事件对象
 */
function switchThemeClick(e) {
  // 非移动端，使用视图转换动画
  if (window.innerWidth > 768) {
    // 使用视图转换动画
    const transition = document.startViewTransition(() => {
      // 切换主题并放到本地存储
      document.documentElement.classList.toggle("dark");
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    // 使用视图转换动画的回调函数
    transition.ready.then(() => {
      // 计算当前坐标并计算最大扩散半径
      const {clientX, clientY} = e;
      const radius = Math.hypot(
          Math.max(clientX, innerWidth - clientX),
          Math.max(clientY, innerHeight - clientY)
      );
      // 创建动画
      document.documentElement.animate(
          {
            clipPath: [
              `circle(0% at ${clientX}px ${clientY}px)`,
              `circle(${radius}px at ${clientX}px ${clientY}px)`,
            ],
          },
          {
            duration: 300,
            pseudoElement: "::view-transition-new(root)",
          }
      );
    });
  } else {
    // 移动端不整这么花哨的
    document.documentElement.classList.toggle("dark");
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }
}

/**
 * 检查主题设置
 */
function checkTheme() {
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
}

/**
 * 检查当前路由并设置激活的tab
 * @param currentRoute 当前路由对象
 */
function checkTabActive(currentRoute) {
  activeTab.value = currentRoute.name || '';
}

const route = useRoute();

onMounted(() => {
  checkTheme();
  checkTabActive(route);
  // 监听路由变化并更新激活的tab
  watch(route, (newRoute) => {
    checkTabActive(newRoute);
  });
});
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
  width: 75%;
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

  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 0 20px;
  }

  @media screen and (max-width: 1280px) {
    padding: 0 32px;
  }

  @media screen and (max-width: 1680px) {
    padding: 0 48px;
  }

}

.logo {
  border-radius: 50%;
  margin-right: 8px;

  @media screen and (max-width: 768px) {
    margin-right: 12px;
  }
}

.navbar-left {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: var(--text-color);
}

.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-tabs-pc {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0 48px;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 1280px) {
    font-size: 20px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    a {
      margin: 0 12px;
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

.navbar-tabs-mobile {
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    margin-left: 12px;
  }
}

.page-content {
  margin: 0 auto;
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}

</style>
