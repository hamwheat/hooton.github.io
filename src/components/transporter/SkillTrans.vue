<!--
 * @Author: yang
 * @Date: 2025-01-09 17:04:01
 * @LastEditors: yang
 * @LastEditTime: 2025-01-10 15:54:03
 * @Description: 图标传送带
 -->
<template>
  <div class="content">
    <div class="benefits">
      <div class="basic-marquee">
        <a class="social-media-link" href="https://developer.mozilla.org/zh-CN/docs/Web/HTML" target="_blank">
          <button class="button">
            <img src="@/assets/images/htmllogo.png" alt="html" />
          </button>
        </a>
        <a class="social-media-link" href="https://developer.mozilla.org/zh-CN/docs/Web/CSS" target="_blank">
          <button class="button">
            <img src="@/assets/images/csslogo.png" alt="css" />
          </button>
        </a>
        <a class="social-media-link" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank">
          <button class="button">
            <img src="@/assets/images/jslogo.png" alt="js" />
          </button>
        </a>
        <a class="social-media-link" href="https://nodejs.org/" target="_blank">
          <button class="button">
            <img src="@/assets/images/nodelogo.png" alt="node" />
          </button>
        </a>
        <a class="social-media-link" href="" target="_blank">
          <button class="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69"><path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/><path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/></svg>
          </button>
        </a>
        <a class="social-media-link" href="https://www.python.org/" target="_blank">
          <button class="button">
            <img src="@/assets/images/pythonlogo.png" alt="python" />
          </button>
        </a>
        <a class="social-media-link" href="https://www.oracle.com/java/" target="_blank">
          <button class="button">
            <img src="@/assets/images/javalogo.png" alt="java" />
          </button>
        </a>
        <a class="social-media-link" href="https://spring.io/" target="_blank">
          <button class="button">
            <img src="@/assets/images/springlogo.png" alt="spring" />
          </button>
        </a>
        <a class="social-media-link" href="https://www.mysql.com/" target="_blank">
          <button class="button">
            <img src="@/assets/images/mysqllogo.png" alt="mysql" />
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
  width: 300px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    bottom: 0;
    width: 40px;
    height: 96px;
    background-image: linear-gradient(90deg, #0000001c, transparent);
    z-index: 2;
    border-radius: 10px 0 0 10px;
  }
  
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    bottom: 0;
    width: 40px;
    height: 96px;
    background-image: linear-gradient(-90deg, #0000001c, transparent);
    z-index: 9;
    border-radius: 0 10px 10px 0;
  }
}

.basic-marquee {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  animation: trans 22s linear infinite;
}

.basic-marquee .button {
  transition: all 0.3s ease;
  background-color: var(--tech-stack-box-bg-color);
  width: 60px;
  height: 60px;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  position: relative;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  
  &:hover {
    transform: scale(1.2);
  }
  
  img {
    width: 40px;
    height: 40px;
  }
  
  svg {
    width: 40px;
    height: 40px;
  }
  
}

.benefits {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  inset: 0;
}
</style>
<script setup lang="ts">
</script>