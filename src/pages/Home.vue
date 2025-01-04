<!--
 * @Author: yang
 * @Date: 2024-12-31 14:41:49
 * @LastEditors: yang
 * @LastEditTime: 2025-01-04 16:20:34
 * @Description: 主页
 -->
<template>
  <div class="main-content">
    <div class="content">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <img :src="imageSrc" :alt="imageAlt" class="welcome-image" />

      <h2>{{ section1Title }}</h2>
      <p>{{ section1Description }}</p>
      <img :src="section1ImageSrc" :alt="section1ImageAlt" class="section-image" />

      <h2>{{ section2Title }}</h2>
      <p>{{ section2Description }}</p>
      <img :src="section2ImageSrc" :alt="section2ImageAlt" class="section-image" />

      <h2>{{ section3Title }}</h2>
      <p>{{ section3Description }}</p>
      <img :src="section3ImageSrc" :alt="section3ImageAlt" class="section-image" />

      <h2>{{ section4Title }}</h2>
      <p>{{ section4Description }}</p>
      <img :src="section4ImageSrc" :alt="section4ImageAlt" class="section-image" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const title = ref('欢迎来到我们的网站');
const description = ref('这是一个内容丰富的欢迎页面，旨在为您提供最佳的浏览体验。无论白天还是夜晚，我们都能为您呈现最舒适的主题。');

const imageSrc = ref('./assets/images/welcome.jpg'); // 请确保该图片路径正确
const imageAlt = ref('欢迎图片');

const section1Title = ref('关于我们');
const section1Description = ref('我们是一家致力于提供优质服务和技术支持的公司。我们的团队由一群充满激情和经验丰富的专业人士组成，致力于为客户提供最优质的产品和服务。');
const section1ImageSrc = ref('./assets/images/about.jpg'); // 请确保该图片路径正确
const section1ImageAlt = ref('关于我们图片');

const section2Title = ref('我们的服务');
const section2Description = ref('我们提供多种服务，包括但不限于软件开发、技术支持、咨询服务等。我们的服务旨在帮助客户解决实际问题，提高业务效率。');
const section2ImageSrc = ref('./assets/images/services.jpg'); // 请确保该图片路径正确
const section2ImageAlt = ref('我们的服务图片');

const section3Title = ref('客户评价');
const section3Description = ref('我们的客户对我们的服务给予了高度评价。以下是一些客户的反馈：\n\n“非常满意，服务非常专业。” —— 张三\n“技术支持非常到位，解决问题很快。” —— 李四');
const section3ImageSrc = ref('./assets/images/testimonials.jpg'); // 请确保该图片路径正确
const section3ImageAlt = ref('客户评价图片');

const section4Title = ref('联系我们');
const section4Description = ref('如果您有任何问题或需要帮助，请随时联系我们。\n\n电话：123-456-7890\n邮箱：contact@example.com\n地址：XX市XX区XX路XX号');
const section4ImageSrc = ref('./assets/images/contact.jpg'); // 请确保该图片路径正确
const section4ImageAlt = ref('联系我们图片');

onMounted(() => {
  // 根据主题调整图片或其他内容
  const isDarkTheme = document.documentElement.classList.contains('dark');
  if (isDarkTheme) {
    imageSrc.value = './assets/images/welcome-dark.jpg'; // 夜晚主题下的图片
    section1ImageSrc.value = './assets/images/about-dark.jpg'; // 夜晚主题下的图片
    section2ImageSrc.value = './assets/images/services-dark.jpg'; // 夜晚主题下的图片
    section3ImageSrc.value = './assets/images/testimonials-dark.jpg'; // 夜晚主题下的图片
    section4ImageSrc.value = './assets/images/contact-dark.jpg'; // 夜晚主题下的图片
  } else {
    imageSrc.value = './assets/images/welcome.jpg'; // 白天主题下的图片
    section1ImageSrc.value = './assets/images/about.jpg'; // 白天主题下的图片
    section2ImageSrc.value = './assets/images/services.jpg'; // 白天主题下的图片
    section3ImageSrc.value = './assets/images/testimonials.jpg'; // 白天主题下的图片
    section4ImageSrc.value = './assets/images/contact.jpg'; // 白天主题下的图片
  }
});
</script>

<style scoped>
.main-content {
  padding: 24px;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  max-width: 800px;
  width: 100%;
  margin-bottom: 24px;
  background-color: var(--secondary-color);
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.content:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.content h1, .content h2 {
  color: var(--primary-color);
  margin-bottom: 16px;
  font-size: 24px;
}

.content h2 {
  font-size: 20px;
}

.content p {
  line-height: 1.6;
  color: var(--text-color);
}

.welcome-image, .section-image {
  max-width: 100%;
  height: auto;
  margin-top: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .main-content {
    flex-direction: row;
    justify-content: space-around;
  }

  .content {
    margin-bottom: 0;
    margin-right: 16px;
    margin-left: 16px;
  }

  .content:last-child {
    margin-right: 0;
  }
}

@media (min-width: 1024px) {
  .main-content {
    padding: 32px;
  }

  .content {
    padding: 32px;
  }
}
</style>
