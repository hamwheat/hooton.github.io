<!--
 * @Author: yang
 * @Date: 2025-01-02 16:45:06
 * @LastEditors: yang
 * @LastEditTime: 2025-01-04 17:20:54
 * @Description: 
 -->
<template>
  <label id="theme-toggle" class="switch">
    <input id="theme-toggle-checkbox" type="checkbox" @click="switchThemeClick($event)"/>
    <span class="slider"></span>
    <span class="clouds_stars"></span>
  </label>
</template>

<script setup>
const emit = defineEmits(['switchThemeClick'])

function switchThemeClick(event) {
  emit('switchThemeClick', event)
}

</script>

<style scoped>

/* 滑块外部整体 */
.switch {
  height: 2em;
  width: 3.5em;
  font-size: 17px;
  overflow: hidden;
  position: relative;
  display: inline-block;
}
/* 隐藏input的checkbox */
.switch input {
  width: 0;
  height: 0;
  opacity: 0;
}
/* 滑块整体 */
.slider {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  position: absolute;
  border-radius: 30px;
  transition: all 0.4s ease;
  background-color: #2185d6;
  border: 1px var(--border-color);
  box-shadow: 0 0 0 rgba(33, 133, 214, 0);
}
/* 移入滑块 */
.slider:hover {
  //box-shadow: 0 0 15px rgba(33, 133, 214, 0.5);
}

/* 滑块的园(默认为太阳，checked为月亮) */
.slider::before {
  left: 10%;
  bottom: 15%;
  content: "";
  width: 1.4em;
  height: 1.4em;
  position: absolute;
  border-radius: 50%;
  transform-origin: center;
  transition: all 0.4s ease;
  background-color: #1d1f2c;
  box-shadow: inset 15px -4px 0 15px #fdf906;
}
/* 滑块移入 */
.slider:hover::before {
  transform: rotate(45deg);
}
/* 太阳的云/月亮的星 */
.clouds_stars {
  left: 70%;
  bottom: 50%;
  width: 10px;
  content: "";
  height: 10px;
  filter: blur(1px);
  position: absolute;
  border-radius: 50%;
  transition: all 0.3s;
  background-color: #fff;
  box-shadow:
      -12px 0 0 0 white,
      -6px 0 0 2px white,
      1px 16px 0 white,
      -6.5px 16px 0 white;
}
/* 月亮的星星 */
.switch input:checked ~ .clouds_stars {
  top: 29%;
  left: 77%;
  width: 2px;
  height: 2px;
  filter: none;
  border-radius: 50%;
  transition: all 0.3s;
  /* 北斗七星-秋 */
  box-shadow:
      -21px 1px 0 #fff, /* 破军星 */
      -15px 1px 0 #fff, /* 武曲星 */
      -11px 5px 0 #fff, /* 廉贞星 */
      -6px 9px 0 #fff, /* 文曲星 */
      -4px 16px 0 #fff, /* 禄存星 */
      3px 17px 0 #fff, /* 巨门星 */
      4px 9px 0 #fff; /* 贪狼星 */
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);
  transform: translateX(-20px);
  animation: twinkle 2s infinite;
}
/* checked改变背景色 */
.switch input:checked + .slider {
  background-color: #1d1f2c !important;
}
/* 月亮在checked过程中右移 */
.switch input:checked + .slider::before {
  box-shadow: inset 8px -4px 0 0 #fff;
  transform: translateX(100%) rotate(222deg);
}
/* checked时月亮的移入 */
.switch input:checked + .slider:hover::before {
  /* transform: translateX(100%) rotate(-45deg); */
}

/* 闪烁动画 */
@keyframes twinkle {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

</style>
   