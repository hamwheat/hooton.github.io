<!--
 * @Author: yang
 * @Date: 2025-01-23 09:18:28
 * @LastEditors: yang
 * @LastEditTime: 2025-01-23 16:00:03
 * @Description: 
 -->
<template>
  <div class="container" style="scale: 0.5">
    <div class="house" ref="houseRef">
      <div class="h-lights">
        <div class="h-light"></div>
        <div class="h-light"></div>
        <div class="h-light"></div>
        <div class="h-light"></div>
        <div class="h-light"></div>
        <div class="h-light"></div>
      </div>
      <div class="h-shadow"></div>
      <div class="alt">
        <div class="alt__front face"></div>
        <div class="alt__back face"></div>
        <div class="alt__right face"></div>
        <div class="alt__left face"></div>
        <div class="alt__top face">
          <div class="light"></div>
          <div class="light"></div>
        </div>
        <div class="alt__bottom face"></div>
      </div>
      <div class="alb">
        <div class="alb__front face"></div>
        <div class="alb__back face"></div>
        <div class="alb__right face"></div>
        <div class="alb__left face"></div>
        <div class="alb__top face"></div>
        <div class="alb__bottom face"></div>
      </div>
      <div class="arb">
        <div class="arb__front face"></div>
        <div class="arb__back face"></div>
        <div class="arb__right face"></div>
        <div class="arb__left face"></div>
        <div class="arb__top face"></div>
        <div class="arb__bottom face"></div>
      </div>
      <div class="blt">
        <div class="blt__front face"></div>
        <div class="blt__back face"></div>
        <div class="blt__right face"></div>
        <div class="blt__left face"></div>
        <div class="blt__top face"></div>
        <div class="blt__bottom face"></div>
      </div>
      <div class="blt2">
        <div class="blt2__front face"></div>
        <div class="blt2__back face"></div>
        <div class="blt2__right face"></div>
        <div class="blt2__left face"></div>
        <div class="blt2__top face"></div>
        <div class="blt2__bottom face"></div>
      </div>
      <div class="blb">
        <div class="blb__front face"></div>
        <div class="blb__back face"></div>
        <div class="blb__right face"></div>
        <div class="blb__left face"></div>
        <div class="blb__top face"></div>
        <div class="blb__bottom face"></div>
      </div>
      <div class="blb2">
        <div class="blb2__front face"></div>
        <div class="blb2__back face"></div>
        <div class="blb2__right face"></div>
        <div class="blb2__left face"></div>
        <div class="blb2__top face"></div>
        <div class="blb2__bottom face"></div>
      </div>
      <div class="puerta-c">
        <div class="puerta">
          <div class="puerta__front face"></div>
          <div class="puerta__back face"></div>
          <div class="puerta__right face"></div>
          <div class="puerta__left face"></div>
          <div class="puerta__top face"></div>
          <div class="puerta__bottom face"></div>
        </div>
        <div class="puerta-l">
          <div class="puerta-l__front face"></div>
          <div class="puerta-l__back face"></div>
          <div class="puerta-l__right face"></div>
          <div class="puerta-l__left face"></div>
          <div class="puerta-l__top face"></div>
          <div class="puerta-l__bottom face"></div>
        </div>
        <div class="puerta-r">
          <div class="puerta-r__front face"></div>
          <div class="puerta-r__back face"></div>
          <div class="puerta-r__right face"></div>
          <div class="puerta-r__left face"></div>
          <div class="puerta-r__top face"></div>
          <div class="puerta-r__bottom face"></div>
        </div>
        <div class="puerta-t">
          <div class="puerta-t__front face"></div>
          <div class="puerta-t__back face"></div>
          <div class="puerta-t__right face"></div>
          <div class="puerta-t__left face"></div>
          <div class="puerta-t__top face"></div>
          <div class="puerta-t__bottom face"></div>
        </div>
      </div>
      <div class="cuadro-l">
        <div class="cuadro-l__front face"></div>
        <div class="cuadro-l__back face"></div>
        <div class="cuadro-l__right face"></div>
        <div class="cuadro-l__left face"></div>
        <div class="cuadro-l__top face"></div>
        <div class="cuadro-l__bottom face"></div>
      </div>
      <div class="cuadro-r">
        <div class="cuadro-r__front face"></div>
        <div class="cuadro-r__back face"></div>
        <div class="cuadro-r__right face"></div>
        <div class="cuadro-r__left face"></div>
        <div class="cuadro-r__top face"></div>
        <div class="cuadro-r__bottom face"></div>
      </div>
      <div class="tv">
        <div class="tv__front face"></div>
        <div class="tv__back face"></div>
        <div class="tv__right face"></div>
        <div class="tv__left face"></div>
        <div class="tv__top face"></div>
        <div class="tv__bottom face"></div>
      </div>
      <div class="muro">
        <div class="muro__front face"></div>
        <div class="muro__back face"></div>
        <div class="muro__right face"></div>
        <div class="muro__left face"></div>
        <div class="muro__top face"></div>
        <div class="muro__bottom face"></div>
      </div>
      <div class="sillon-c">
        <div class="sillon-b">
          <div class="sillon-b__front face"></div>
          <div class="sillon-b__back face"></div>
          <div class="sillon-b__right face"></div>
          <div class="sillon-b__left face"></div>
          <div class="sillon-b__top face"></div>
          <div class="sillon-b__bottom face"></div>
        </div>
        <div class="sillon-t">
          <div class="sillon-t__front face"></div>
          <div class="sillon-t__back face"></div>
          <div class="sillon-t__right face"></div>
          <div class="sillon-t__left face"></div>
          <div class="sillon-t__top face"></div>
          <div class="sillon-t__bottom face"></div>
        </div>
        <div class="sillon-l">
          <div class="sillon-l__front face"></div>
          <div class="sillon-l__back face"></div>
          <div class="sillon-l__right face"></div>
          <div class="sillon-l__left face"></div>
          <div class="sillon-l__top face"></div>
          <div class="sillon-l__bottom face"></div>
        </div>
        <div class="sillon-r">
          <div class="sillon-r__front face"></div>
          <div class="sillon-r__back face"></div>
          <div class="sillon-r__right face"></div>
          <div class="sillon-r__left face"></div>
          <div class="sillon-r__top face"></div>
          <div class="sillon-r__bottom face"></div>
        </div>
      </div>
      <div class="mesa-c">
        <div class="mesa">
          <div class="mesa__front face"></div>
          <div class="mesa__back face"></div>
          <div class="mesa__right face"></div>
          <div class="mesa__left face"></div>
          <div class="mesa__top face"></div>
          <div class="mesa__bottom face"></div>
        </div>
        <div class="mesa-p">
          <div class="mesa-p__front face"></div>
          <div class="mesa-p__back face"></div>
          <div class="mesa-p__right face"></div>
          <div class="mesa-p__left face"></div>
          <div class="mesa-p__top face"></div>
          <div class="mesa-p__bottom face"></div>
        </div>
        <div class="mesa-p">
          <div class="mesa-p__front face"></div>
          <div class="mesa-p__back face"></div>
          <div class="mesa-p__right face"></div>
          <div class="mesa-p__left face"></div>
          <div class="mesa-p__top face"></div>
          <div class="mesa-p__bottom face"></div>
        </div>
        <div class="mesa-p">
          <div class="mesa-p__front face"></div>
          <div class="mesa-p__back face"></div>
          <div class="mesa-p__right face"></div>
          <div class="mesa-p__left face"></div>
          <div class="mesa-p__top face"></div>
          <div class="mesa-p__bottom face"></div>
        </div>
        <div class="mesa-p">
          <div class="mesa-p__front face"></div>
          <div class="mesa-p__back face"></div>
          <div class="mesa-p__right face"></div>
          <div class="mesa-p__left face"></div>
          <div class="mesa-p__top face"></div>
          <div class="mesa-p__bottom face"></div>
        </div>
        <div class="mesa-shadow"></div>
      </div>
      <div class="tablet">
        <div class="tablet__front face"></div>
        <div class="tablet__back face"></div>
        <div class="tablet__right face"></div>
        <div class="tablet__left face"></div>
        <div class="tablet__top face"></div>
        <div class="tablet__bottom face"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';

const houseRef = ref(null);

/**
 * 鼠标移动事件处理，改变house的transform属性
 * @param e 事件对象
 */
function pointerMoveHandler(e) {
  if (houseRef.value) {
    // 计算鼠标相对于视口中心的水平偏移量（范围 -0.5 到 0.5） 
    const x = e.pageX / window.innerWidth - 0.5;
    // 计算鼠标相对于视口中心的垂直偏移量（范围 -0.5 到 0.5）
    const y = e.pageY / window.innerHeight - 0.5;
    // 根据鼠标位置动态设置元素的 CSS 变换属性
    houseRef.value.style.transform = `    
      perspective(90vw)
      rotateX(${y * 4 + 75}deg)
      rotateZ(${-x * 12 + 45}deg)
      translateZ(-9vw)
    `;
  }
}

// 在组件挂载时添加事件监听器
onMounted(() => {
  document.body.addEventListener('pointermove', pointerMoveHandler);
});

// 在组件卸载时移除事件监听器
onBeforeUnmount(() => {
  document.body.removeEventListener('pointermove', pointerMoveHandler);
});
</script>

<style lang="scss" scoped>
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  transform-style: preserve-3d;
  -webkit-tap-highlight-color: transparent;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  cursor: pointer;
  background-image: radial-gradient(circle, #171424, #000);
}

.face {
  position: absolute;
}

.house {
  position: absolute;
  width: 28vw;
  height: 28vw;
  transform: perspective(90vw) rotateX(75deg) rotateZ(45deg) translateZ(-9vw);
}

.h-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 1.5vw -3vw 3vw #000, 1.5vw 0.5vw 1.5vw #000;
}

.h-lights {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 45vw;
  height: 45vw;
}

.h-light {
  position: absolute;

  &:nth-of-type(1) {
    bottom: 5vw;
    right: 0;
    width: 14vw;
    height: 14vw;
    border-radius: 50%;
    background-image: radial-gradient(#1b182a, transparent);
    filter: blur(1vw);
  }

  &:nth-of-type(2) {
    bottom: 18vw;
    right: -1vw;
    width: 2vw;
    height: 12vw;
    border-radius: 50%;
    transform: rotateZ(-50deg);
    background-image: radial-gradient(rgba(81, 137, 251, .45) 50%, rgba(40, 125, 210, .45), transparent);
    box-shadow: -1vw -1vw 2vw 1vw rgba(131, 171, 252, .1);
    filter: blur(1vw);
  }

  &:nth-of-type(3) {
    bottom: -2vw;
    right: 17vw;
    width: 5vw;
    height: 12vw;
    border-radius: 50%;
    transform: rotateZ(-50deg);
    background-image: radial-gradient(rgba(81, 137, 251, .5) 50%, rgba(40, 125, 210, .5), transparent);
    filter: blur(2vw);

    &::before, &::after {
      content: '';
      position: absolute;
      width: 200%;
      top: -6vw;
      height: 400%;
      background-image: linear-gradient(to bottom, rgba(40, 125, 210, .1), rgba(81, 137, 251, .1), transparent);
      border-top-left-radius: 10vw;
      border-top-right-radius: 10vw;
      filter: blur(1.5vw);
    }

    &::before {
      right: -50%;
      transform-origin: top right;
      transform: rotateZ(15deg);
      box-shadow: -2vw -2vw 0 rgba(81, 137, 251, .075);
    }

    &::after {
      left: -50%;
      transform-origin: top left;
      transform: rotateZ(-15deg);
      box-shadow: 2vw -2vw 0 rgba(81, 137, 251, .075);
    }
  }

  &:nth-of-type(4) {
    bottom: 5vw;
    left: 8vw;
    width: 28vw;
    height: 4vw;
    transform-origin: top left;
    transform: skewX(58deg);
    background-image: linear-gradient(to right, rgba(81, 137, 251, .075) 10%, transparent 25%, transparent, rgba(0, 0, 0, .15));
    filter: blur(0.25vw);
  }

  &:nth-of-type(6) {
    bottom: 14vw;
    right: 2vw;
    width: 8vw;
    height: 16vw;
    transform-origin: bottom left;
    transform: skewY(49deg);
    background-image: linear-gradient(to left, rgba(0, 0, 0, .1), rgba(0, 0, 0, .7));
    filter: blur(0.35vw);
  }
}

.alt {
  position: absolute;
  left: 0;
  top: 0;
  width: 27vw;
  height: 27vw;

  &__front {
    width: 27vw;
    height: 0.5vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(26.5vw);
    background-color: #9e99c1;
  }

  &__back {
    width: 27vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-27vw) translateY(-0.5vw);
    background-color: #383358;
  }

  &__right {
    width: 27vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(27vw) translateX(-27vw) translateY(-0.5vw);
    background-color: #383358;
  }

  &__left {
    width: 27vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.5vw);
    background-color: #fbfafe;
  }

  &__top {
    width: 27vw;
    height: 27vw;
    transform-origin: top left;
    transform: translateZ(0.5vw);
    background-image: linear-gradient(to bottom, #0b0c1f, #383358, #9e99c1);

    .light {
      position: absolute;

      &:nth-of-type(1) {
        height: 100%;
        width: 100%;
        background-image: linear-gradient(to bottom, rgba(20, 61, 103, .75), rgba(81, 137, 251, .75), transparent);
      }

      &:nth-of-type(2) {
        left: 4vw;
        height: 100%;
        width: 6vw;
        background-image: linear-gradient(to bottom, transparent 20%, rgba(40, 125, 210, .75), rgba(81, 137, 251, .25) 80%);
        filter: blur(0.1vw);
      }

    }
  }

  &__bottom {
    width: 27vw;
    height: 27vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-27vw);
    background-color: #383358;
  }
  
}

.alb {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 27vw;
  height: 1vw;

  &__front {
    width: 27vw;
    height: 2vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-1vw);
    background-image: linear-gradient(to right, #9e99c1 40%, #8f89b7);
  }

  &__back {
    width: 27vw;
    height: 2vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-27vw) translateY(-2vw);
    background-color: #383358;
  }

  &__right {
    width: 1vw;
    height: 2vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(27vw) translateX(-1vw) translateY(-2vw);
    background-color: #383358;
  }

  &__left {
    width: 1vw;
    height: 2vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-2vw);
    background-color: #fbfafe;
  }

  &__top {
    width: 27vw;
    height: 1vw;
    transform-origin: top left;
    transform: translateZ(2vw);
    background-image: linear-gradient(to right, #fbfafe 40%, #eae5fa);
  }

  &__bottom {
    width: 27vw;
    height: 1vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-27vw);
    background-color: #383358;
  }
  
}

.arb {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 1vw;
  height: 28vw;

  &__front {
    width: 1vw;
    height: 2vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(26vw);
    background-color: #8f89b7;
  }

  &__back {
    width: 1vw;
    height: 2vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-1vw) translateY(-2vw);
    background-color: #383358;
  }

  &__right {
    width: 28vw;
    height: 2vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(1vw) translateX(-28vw) translateY(-2vw);
    background-image: linear-gradient(to right, #282347 40%, #0f0e17);
  }

  &__left {
    width: 28vw;
    height: 2vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-2vw);
    background-color: #9e99c1;
  }

  &__top {
    width: 1vw;
    height: 28vw;
    transform-origin: top left;
    transform: translateZ(2.02vw);
    background-image: linear-gradient(to top, #fbfafe, #3b3469 25%, #2e2a48 75%, #9e99c1);

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 30%;
      top: 0;
      background-image: linear-gradient(to bottom, transparent, rgba(81, 137, 251, .85), transparent);
    }

  }

  &__bottom {
    width: 1vw;
    height: 28vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-1vw);
    background-color: #383358;
  }
  
}

.blt {
  position: absolute;
  left: 0;
  top: 0;
  width: 1vw;
  height: 27vw;
  transform: translateZ(0.5vw);

  &__front {
    width: 1.3vw;
    height: 20.1vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(7vw);
    background-image: linear-gradient(to bottom, #383358, #9e99c1);
  }

  &__back {
    width: 1vw;
    height: 20vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-1vw) translateY(-20vw);
    background-color: #383358;
  }

  &__right {
    width: 27vw;
    height: 20vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(1vw) translateX(-27vw) translateY(-20vw);
    background-image: linear-gradient(to bottom, #151225, #383358, #383358 90%, #242040);

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0.75vw;
      background-image: linear-gradient(to bottom, #8f89b7, #287dd2);
      border-top: 0.1vw solid #282347;
      border-bottom: 0.1vw solid #282347;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to bottom, rgba(6, 78, 224, .35), transparent 30%, transparent 70%, rgba(40, 125, 210, .35));
    }

  }

  &__left {
    width: 27vw;
    height: 20vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-20vw);
    background-color: #fbfafe;
  }

  &__top {
    width: 1vw;
    height: 27vw;
    transform-origin: top left;
    transform: translateZ(20vw);
  }

  &__bottom {
    width: 1vw;
    height: 27vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-1vw);
    background-color: #383358;
  }
  
}

.blt2 {
  position: absolute;
  left: 0;
  top: 0;
  width: 2vw;
  height: 27vw;
  transform: translateZ(20.5vw);

  &__front {
    width: 2vw;
    height: 0.8vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(26.25vw);
    background-color: #383358;
  }

  &__back {
    width: 2vw;
    height: 0.75vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-2vw) translateY(-0.75vw);
    background-color: #383358;
  }

  &__right {
    width: 27vw;
    height: 0.75vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(2vw) translateX(-27.1vw) translateY(-0.75vw);
    background-image: linear-gradient(to right, #8f89b7, #9e99c1, #7169a4);

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      //border-bottom: 0.1vw solid rgba(251, 250, 254, .75);
      background-image: linear-gradient(to top, rgba(81, 137, 251, .35), transparent);
    }

  }

  &__left {
    width: 27vw;
    height: 0.75vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.75vw);
    background-color: #fbfafe;
  }

  &__top {
    width: 2.5vw;
    height: 27vw;
    transform-origin: top left;
    transform: translateZ(0.75vw);
    background-image: linear-gradient(to top, #9e99c1, #fbfafe);
  }

  &__bottom {
    width: 2vw;
    height: 27vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-2vw);
    background-color: #383358;
  }
  
}

.blb {
  position: absolute;
  left: 1vw;
  top: 0;
  width: 26vw;
  height: 1vw;
  transform: translateZ(0.5vw);

  &__front {
    width: 26vw;
    height: 20vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-19vw);
    background-image: linear-gradient(to bottom, #4b4572, #595388 20%, #4b4572);

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to bottom, rgba(40, 125, 210, .25), transparent 20%, transparent 80%, rgba(40, 125, 210, .5)), linear-gradient(to right, rgba(31, 33, 88, .35), transparent), linear-gradient(to bottom, rgba(31, 33, 88, .35), transparent), linear-gradient(to bottom, rgba(0, 0, 0, .5), transparent 20%, transparent 80%, rgba(40, 125, 210, .25));
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0.75vw;
      background-image: linear-gradient(to bottom, #8f89b7, #287dd2);
      border-top: 0.1vw solid #282347;
      border-bottom: 0.1vw solid #282347;
    }

  }

  &__back {
    width: 26vw;
    height: 20vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-26vw) translateY(-20vw);
    background-color: #383358;
  }

  &__right {
    width: 1vw;
    height: 20vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(26vw) translateX(-1vw) translateY(-20vw);
    background-image: linear-gradient(to bottom, #151225, #0f0e17 80%, #151225);
  }

  &__left {
    width: 1vw;
    height: 20vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-20vw);
  }

  &__top {
    width: 26vw;
    height: 1vw;
    transform-origin: top left;
    transform: translateZ(20vw);
  }

  &__bottom {
    width: 26vw;
    height: 1vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-26vw);
    background-color: #383358;
  }
  
}

.blb2 {
  position: absolute;
  left: 2vw;
  top: 0;
  width: 25vw;
  height: 1vw;
  transform: translateZ(20.5vw);

  &__front {
    width: 25vw;
    height: 0.75vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(1.25vw);
    background-image: linear-gradient(to right, #7169a4, #9e99c1, #8f89b7);

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      //border-bottom: 0.1vw solid rgba(251, 250, 254, .75);
      background-image: linear-gradient(to top, rgba(40, 125, 210, .25), transparent);
    }

  }

  &__back {
    width: 25vw;
    height: 0.75vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-25vw) translateY(-0.75vw);
    background-color: #383358;
  }

  &__right {
    width: 2vw;
    height: 0.75vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(25vw) translateX(-2vw) translateY(-0.75vw);
    background-color: #151225;
  }

  &__left {
    width: 2vw;
    height: 0.75vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.75vw);
    background-color: #9e99c1;
  }

  &__top {
    width: 25vw;
    height: 2.5vw;
    transform-origin: top left;
    transform: translateZ(0.75vw);
    background-image: linear-gradient(to left, #9e99c1, #fbfafe);
  }

  &__bottom {
    width: 25vw;
    height: 2vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-25vw);
    background-color: #383358;
  }
  
}

.bocina-l, .bocina-r {
  position: absolute;
  left: 1.5vw;
  bottom: 5.25vw;
  width: 0.75vw;
  height: 1.5vw;
  transform: translateZ(8vw);
}

.bocina-l__front, .bocina-r__front {
  width: 0.75vw;
  height: 6vw;
  transform-origin: bottom left;
  transform: rotateX(-90deg) translateZ(-4.5vw);
}

.bocina-l__back, .bocina-r__back {
  width: 0.75vw;
  height: 6vw;
  transform-origin: top left;
  transform: rotateX(-90deg) rotateY(180deg) translateX(-0.75vw) translateY(-6vw);
}

.bocina-l__right, .bocina-r__right {
  width: 1.5vw;
  height: 6vw;
  transform-origin: top left;
  transform: rotateY(90deg) rotateZ(-90deg) translateZ(0.75vw) translateX(-1.5vw) translateY(-6vw);
  background-image: radial-gradient(#000, #000);
}

.bocina-l__left, .bocina-r__left {
  width: 1.5vw;
  height: 6vw;
  transform-origin: top left;
  transform: rotateY(-90deg) rotateZ(90deg) translateY(-6vw);
}

.bocina-l__top, .bocina-r__top {
  width: 0.75vw;
  height: 1.5vw;
  transform-origin: top left;
  transform: translateZ(6vw);
  background-image: linear-gradient(to left, #d9d0f6, #9e99c1, #7169a4);
}

.bocina-l__bottom, .bocina-r__bottom {
  width: 0.75vw;
  height: 1.5vw;
  transform-origin: top left;
  transform: rotateY(180deg) translateX(-0.75vw);
  background-color: #383358;
}

.bocina-l__front {
  background-image: linear-gradient(to right, #5189fb, #595388 30%, #b7a5ed);
}

.bocina-l__back {
  background-image: linear-gradient(to right, #383358, #232038);
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, rgba(81, 137, 251, .35) 65%, rgba(81, 137, 251, .95));
  }
  
}

.bocina-l__left {
  background-color: #282347;
  
  &::before {
    content: '';
    position: absolute;
    top: -10%;
    left: 20%;
    width: 120%;
    height: 120%;
    background-image: linear-gradient(to left, rgba(7, 23, 39, .75), rgba(0, 0, 0, .75));
    filter: blur(0.5vw);
  }
  
}

.bocina-r {
  top: 5.25vw;

  &__front {
    background-image: linear-gradient(to right, #383358, #0f0e17);

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to left, rgba(81, 137, 251, .35) 65%, rgba(81, 137, 251, .95));
    }

  }

  &__back {
    background-image: linear-gradient(to right, #595388, #b7a5ed);
  }

  &__left {
    background-color: #282347;

    &::before {
      content: '';
      position: absolute;
      top: -10%;
      left: -20%;
      width: 120%;
      height: 120%;
      background-image: linear-gradient(to right, rgba(7, 23, 39, .75), rgba(0, 0, 0, .75));
      filter: blur(0.5vw);
    }

  }
  
}

.repisa-t, .repisa-b {
  position: absolute;
  left: 1.5vw;
  top: 9vw;
  width: 1.5vw;
  height: 10vw;
  transform: translateZ(16vw);
}

.repisa-t__front, .repisa-b__front {
  width: 1.5vw;
  height: 0.25vw;
  transform-origin: bottom left;
  transform: rotateX(-90deg) translateZ(9.75vw);
  background-color: #9e99c1;
}

.repisa-t__back, .repisa-b__back {
  width: 1.5vw;
  height: 0.25vw;
  transform-origin: top left;
  transform: rotateX(-90deg) rotateY(180deg) translateX(-1.5vw) translateY(-0.25vw);
  background-color: #fbfafe;
}

.repisa-t__right, .repisa-b__right {
  width: 10vw;
  height: 0.25vw;
  transform-origin: top left;
  transform: rotateY(90deg) rotateZ(-90deg) translateZ(1.5vw) translateX(-10vw) translateY(-0.25vw);
  background-color: #8079ae;
}

.repisa-t__left, .repisa-b__left {
  width: 10vw;
  height: 0.25vw;
  transform-origin: top left;
  transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.25vw);
  background-color: #fbfafe;
}

.repisa-t__top, .repisa-b__top {
  width: 1.5vw;
  height: 10vw;
  transform-origin: top left;
  transform: translateZ(0.25vw);
  background-color: #d9d0f6;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, rgba(6, 78, 224, .75), transparent);
  }
  
}

.repisa-t__bottom, .repisa-b__bottom {
  width: 1.5vw;
  height: 10vw;
  transform-origin: top left;
  transform: rotateY(180deg) translateX(-1.5vw);
  background-color: #383358;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, rgba(6, 78, 224, .75), transparent);
  }
  
}

.repisa-b {
  transform: translateZ(5vw);
}

.tv {
  position: absolute;
  left: 1.51vw;
  top: 8vw;
  width: 0.5vw;
  height: 12vw;
  transform: translateZ(8vw);
  
  &__front {
    width: 0.5vw;
    height: 6vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(6vw);
    background-color: #0b0c1f;
  }

  &__back {
    width: 0.5vw;
    height: 6vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-0.5vw) translateY(-6vw);
    background-color: #0b0c1f;
  }

  &__left {
    width: 12vw;
    height: 6vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-6vw);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0b0c1f;

    &::before {
      content: '';
      position: absolute;
      width: 13vw;
      height: 7vw;
      background-image: radial-gradient(rgba(36, 112, 188, .95), rgba(56, 121, 250, .95));
      filter: blur(1.25vw);
      animation: luz-tv 0.25s infinite alternate;
    }

  }

  &__right {
    width: 12vw;
    height: 6vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(0.5vw) translateX(-12vw) translateY(-6vw);
    background-color: #9cbcfc;
    border: 0.125vw solid #000;
    animation: pantalla-tv 0.25s infinite alternate;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      box-shadow: 0.125vw 0.125vw 1vw rgba(81, 137, 251, .5), -0.125vw 0.125vw 1vw rgba(81, 137, 251, .5), 0.125vw -0.125vw 1vw rgba(81, 137, 251, .5), -0.125vw -0.125vw 1vw rgba(81, 137, 251, .5);
      background-image: url("/src/assets/images/ghost.png");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom;
      opacity: 0.8;
    }

  }

  &__top {
    width: 0.5vw;
    height: 12vw;
    transform-origin: top left;
    transform: translateZ(6vw);
    background-color: #0b0c1f;
  }

  &__bottom {
    width: 0.5vw;
    height: 12vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-0.5vw);
    background-color: #0b0c1f;
  }
  
}

.librero {
  position: absolute;
  left: 13vw;
  top: 1vw;
  width: 12vw;
  height: 0.5vw;
  transform: translateZ(7vw);

  &__front {
    width: 12vw;
    height: 0.25vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(1.25vw);
    background-color: #9e99c1;
  }

  &__back {
    width: 12vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-12vw) translateY(-0.25vw);
    background-color: #383358;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 4vw;
      border-radius: 50%;
      background-image: radial-gradient(rgba(106, 154, 251, .7) 50%, rgba(32, 99, 167, .6), transparent);
      filter: blur(1.25vw);
    }

  }

  &__left {
    width: 1.5vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.25vw);
    background-color: #9e99c1;
  }

  &__right {
    width: 1.5vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(12vw) translateX(-1.5vw) translateY(-0.25vw);
    background-color: #383358;
  }

  &__top {
    width: 12vw;
    height: 1.5vw;
    transform-origin: top left;
    transform: translateZ(0.25vw);
    background-color: #d9d0f6;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to bottom, rgba(31, 104, 249, .75), transparent);
    }

  }

  &__bottom {
    width: 12vw;
    height: 1.5vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-12vw);
    background-color: #383358;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to bottom, rgba(31, 104, 249, .75), transparent);
    }

  }
  
}

.cuadro-l, .cuadro-r {
  position: absolute;
  left: 13vw;
  top: 1vw;
  width: 5vw;
  height: 0.5vw;
  transform: translateZ(10vw);
}

.cuadro-l__front, .cuadro-r__front {
  width: 5vw;
  height: 7vw;
  transform-origin: bottom left;
  transform: rotateX(-90deg) translateZ(-6.75vw);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.cuadro-l__back, .cuadro-r__back {
  width: 5vw;
  height: 7vw;
  transform-origin: top left;
  transform: rotateX(-90deg) rotateY(180deg) translateX(-5vw) translateY(-7vw);
  background-color: #383358;
  box-shadow: 0.35vw 0.35vw 0.35vw rgba(81, 137, 251, .2), -0.35vw 0.35vw 0.35vw rgba(81, 137, 251, .2), -0.35vw -0.35vw 0.35vw rgba(81, 137, 251, .2), 0.35vw -0.35vw 0.35vw rgba(81, 137, 251, .2);
}

.cuadro-l__right, .cuadro-r__right {
  width: 0.25vw;
  height: 7vw;
  transform-origin: top left;
  transform: rotateY(90deg) rotateZ(-90deg) translateZ(5vw) translateX(-0.25vw) translateY(-7vw);
  background-color: #383358;
}

.cuadro-l__left, .cuadro-r__left {
  //width: 0.25vw;
  height: 7vw;
  transform-origin: top left;
  transform: rotateY(-90deg) rotateZ(90deg) translateY(-7vw);
  background-color: #9e99c1;
}

.cuadro-l__top, .cuadro-r__top {
  width: 5vw;
  //height: 0.25vw;
  transform-origin: top left;
  transform: translateZ(7vw);
  background-color: #9e99c1;
}

.cuadro-l__bottom, .cuadro-r__bottom {
  width: 5vw;
  height: 0.25vw;
  transform-origin: top left;
  transform: rotateY(180deg) translateX(-5vw);
  background-color: #383358;
}

.cuadro-l__front {
  background-image: url('/src/assets/images/csslogo.png');
  //background-color: #d51e24;
  //border: 1vw solid #d51e24;
  background-color: #0f1110;
  border: 0.5vw solid #0f1110;
  
  &::before {
    content: '';
    position: absolute;
    top: -0.5vw;
    left: -0.5vw;
    width: 5vw;
    height: 7vw;
    background-origin: padding-box;
    background-image: linear-gradient(to bottom, rgba(40, 125, 210, .15), rgba(40, 125, 210, .15));
  }
  
}

.cuadro-r {
  left: 20vw;
}

.cuadro-r__front {
  background-image: url('/src/assets/images/htmllogo.png');
  background-color: #0f1110;
  border: 0.5vw solid #0f1110;
  
  &::before {
    content: '';
    position: absolute;
    top: -0.5vw;
    left: -0.5vw;
    width: 5vw;
    height: 7vw;
    background-origin: padding-box;
    background-image: linear-gradient(to bottom, rgba(40, 125, 210, .15), rgba(40, 125, 210, .15));
  }
  
}

.puerta-c {
  position: absolute;
  left: 3vw;
  top: 1vw;
  width: 8vw;
  height: 0.5vw;
  transform: translateZ(0.5vw);
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 200%;
    background-color: rgba(0, 0, 0, .65);
    filter: blur(0.5vw);
  }
  
}

.puerta {
  position: absolute;
  left: 0.5vw;
  top: 0;
  width: 7vw;
  height: 0.5vw;

  &__front {
    width: 6.9vw;
    height: 16vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-15.75vw);
    background-image: linear-gradient(to bottom, #0f1110, #121332);
    border: 0.225vw solid #5189fb;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(transparent 50%, rgba(4, 61, 174, .25));
      //box-shadow: 0.65vw 0.65vw 0.5vw rgba(81, 137, 251, .6), -0.65vw 0.65vw 0.5vw rgba(81, 137, 251, .6), -0.65vw -0.65vw 0.5vw rgba(81, 137, 251, .6), 0.65vw -0.65vw 0.5vw rgba(81, 137, 251, .6);
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0.75vw;
      width: 1vw;
      height: 0.25vw;
      background-color: #9e99c1;
      box-shadow: 0.125vw 0.125vw 0.25vw rgba(81, 137, 251, .6), -0.125vw 0.125vw 0.25vw rgba(81, 137, 251, .6), -0.125vw -0.125vw 0.25vw rgba(81, 137, 251, .6), 0.125vw -0.125vw 0.25vw rgba(81, 137, 251, .6);
    }

  }

  &__back {
    width: 7vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-7vw) translateY(-16vw);
  }

  &__right {
    width: 0.25vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(7vw) translateX(-0.25vw) translateY(-16vw);
  }

  &__left {
    width: 0.25vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-16vw);
  }

  &__top {
    width: 7vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: translateZ(16vw);
  }

  &__bottom {
    width: 7vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-7vw);
  }

  &-l, &-r {
    position: absolute;
    left: 0;
    top: 0;
    width: 0.5vw;
    height: 0.5vw;
  }

  &-l__front, &-r__front {
    width: 0.5vw;
    height: 16vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-15.5vw);
    background-color: #121332;
  }

  &-l__back, &-r__back {
    width: 0.5vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-0.5vw) translateY(-16vw);
    background-color: #0b0c1f;
  }

  &-l__right, &-r__right {
    width: 0.5vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(0.5vw) translateX(-0.5vw) translateY(-16vw);
    background-color: #0b0c1f;
  }

  &-l__left, &-r__left {
    width: 0.5vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-16vw);
    background-color: #121332;
  }

  &-l__top, &-r__top {
    width: 0.5vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: translateZ(16vw);
  }

  &-l__bottom, &-r__bottom {
    width: 0.5vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-0.5vw);
    background-color: #0b0c1f;
  }

  &-r {
    left: calc(100% - .5vw);
  }

  &-t {
    left: 0;
    top: 0;
    width: 8vw;
    height: 0.5vw;
    transform: translateZ(16vw);
  }

  &-t__front {
    width: 8vw;
    height: 0.5vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(0vw);
    background-color: #121332;
  }

  &-t__back {
    width: 8vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-8vw) translateY(-0.5vw);
    background-color: #0b0c1f;
  }

  &-t__right {
    width: 0.5vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(8vw) translateX(-0.5vw) translateY(-0.5vw);
    background-color: #0b0c1f;
  }

  &-t__left {
    width: 0.5vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.5vw);
    background-color: #121332;
  }

  &-t__top {
    width: 8vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: translateZ(0.5vw);
    background-color: #1f2158;
  }

  &-t__bottom {
    width: 8vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-8vw);
    background-color: #0b0c1f;
  }
  
}

.muro {
  position: absolute;
  left: 1vw;
  top: 6vw;
  width: 0.5vw;
  height: 16vw;
  transform: translateZ(0.51vw);

  &__front {
    width: 0.5vw;
    height: 18vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-2vw);
    background-color: #0b0c1f;
  }

  &__back {
    width: 0.5vw;
    height: 18vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-0.5vw) translateY(-18vw);
    background-color: #0b0c1f;
  }

  &__right {
    width: 16vw;
    height: 18vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(0.5vw) translateX(-16vw) translateY(-18vw);
    display: flex;
    justify-content: center;
    background-image: radial-gradient(circle, #1f2158, #0b0c1f);
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to bottom, rgba(40, 125, 210, .25), transparent 30%, transparent 70%, rgba(40, 125, 210, .15));
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 5%;
      width: 90%;
      height: 25%;
      background-image: linear-gradient(to bottom, rgba(4, 5, 13, .75), rgba(4, 5, 13, .95));
      filter: blur(0.75vw);
    }

  }

  &__left {
    width: 16vw;
    height: 18vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-18vw);
    background-color: #0b0c1f;
    box-shadow: 0.5vw 0.5vw 0.6vw rgba(81, 137, 251, .3), 0.5vw -0.5vw 0.6vw rgba(81, 137, 251, .3), -0.5vw 0.5vw 0.6vw rgba(81, 137, 251, .3), -0.5vw -0.5vw 0.6vw rgba(81, 137, 251, .3);
  }

  &__top {
    width: 0.5vw;
    height: 16vw;
    transform-origin: top left;
    transform: translateZ(18vw);
    background-color: #0b0c1f;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      background-image: linear-gradient(to left, rgba(40, 125, 210, .5), rgba(81, 137, 251, .25));
    }

  }

  &__bottom {
    width: 0.5vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-0.5vw);
    background-color: #0b0c1f;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 5vw;
      height: 100%;
      background-image: linear-gradient(to left, #0b0c1f, transparent 50%);
      transform-origin: right bottom;
      transform: skewY(-20deg);
      filter: blur(0.25vw);
    }

  }
  
}

.sillon-c {
  position: absolute;
  right: 2vw;
  bottom: 6vw;
  width: 6vw;
  height: 16vw;
  transform: translateZ(0.5vw);
  
  &::before {
    content: '';
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background-color: rgba(11, 12, 31, .85);
    filter: blur(0.75vw);
  }
  
}

.sillon-b {
  position: absolute;
  left: 0;
  top: 1vw;
  width: 6vw;
  height: 14vw;

  &__front {
    width: 6vw;
    height: 3vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(11vw);
    background-color: #121332;
  }

  &__back {
    width: 6vw;
    height: 3vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-6vw) translateY(-3vw);
    background-color: #0b0c1f;
  }

  &__right {
    width: 14vw;
    height: 3vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(6vw) translateX(-14vw) translateY(-3vw);
    background-color: #0b0c1f;
  }

  &__left {
    width: 14vw;
    height: 3vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-3vw);
    background-image: linear-gradient(to bottom, #121332, #0b0c1f);

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to bottom, rgba(40, 125, 210, .1), transparent);
    }

  }

  &__top {
    width: 6vw;
    height: 14vw;
    transform-origin: top left;
    transform: translateZ(3vw);
    background-image: linear-gradient(to right, #1f2158, #121332);
    border-left: 0.1vw solid rgba(158, 153, 193, .5);

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to right, rgba(40, 125, 210, .25), transparent);
    }

  }

  &__bottom {
    width: 6vw;
    height: 14vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-6vw);
    background-color: #0b0c1f;
  }
  
}

.sillon-l, .sillon-r {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 6vw;
  height: 1vw;
}

.sillon-l__front, .sillon-r__front {
  width: 6vw;
  height: 4.5vw;
  transform-origin: bottom left;
  transform: rotateX(-90deg) translateZ(-3.5vw);
  background-image: linear-gradient(to bottom, #121332, #0b0c1f);
}

.sillon-l__back, .sillon-r__back {
  width: 6vw;
  height: 4.5vw;
  transform-origin: top left;
  transform: rotateX(-90deg) rotateY(180deg) translateX(-6vw) translateY(-4.5vw);
  background-color: #0b0c1f;
}

.sillon-l__right, .sillon-r__right {
  width: 1vw;
  height: 4.5vw;
  transform-origin: top left;
  transform: rotateY(90deg) rotateZ(-90deg) translateZ(6vw) translateX(-1vw) translateY(-4.5vw);
  background-image: linear-gradient(to bottom, #0b0c1f, #000);
}

.sillon-l__left, .sillon-r__left {
  width: 1vw;
  height: 4.5vw;
  transform-origin: top left;
  transform: rotateY(-90deg) rotateZ(90deg) translateY(-4.5vw);
  background-image: linear-gradient(to bottom, #121332, #0b0c1f);
}

.sillon-l__top, .sillon-r__top {
  width: 6vw;
  height: 1vw;
  transform-origin: top left;
  transform: translateZ(4.5vw);
  background-image: linear-gradient(to right, #1f2158, #0f102b);
  border-bottom: 0.1vw solid rgba(158, 153, 193, .5);
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, rgba(40, 125, 210, .75), transparent);
  }
  
}

.sillon-l__bottom, .sillon-r__bottom {
  width: 6vw;
  height: 1vw;
  transform-origin: top left;
  transform: rotateY(180deg) translateX(-6vw);
  background-color: #0b0c1f;
}

.sillon-r {
  top: 0;
}

.sillon-t {
  position: absolute;
  right: 0;
  top: 1vw;
  width: 1vw;
  height: 1vw;
  transform-origin: right;
  transform: rotateY(7deg);
}

.sillon-t__front {
  width: 1vw;
  height: 6.5vw;
  transform-origin: bottom left;
  transform: rotateX(-90deg) translateZ(7.5vw);
  background-image: linear-gradient(to bottom, #0b0c1f, #070814);
}

.sillon-t__back {
  width: 1vw;
  height: 6.5vw;
  transform-origin: top left;
  transform: rotateX(-90deg) rotateY(180deg) translateX(-1vw) translateY(-6.5vw);
  background-image: linear-gradient(to bottom, #0b0c1f, #0b0c1f);
}

.sillon-t__right {
  width: 14vw;
  height: 6.5vw;
  transform-origin: top left;
  transform: rotateY(90deg) rotateZ(-90deg) translateZ(1vw) translateX(-14vw) translateY(-6.5vw);
  background-image: linear-gradient(to bottom, #0b0c1f, #000);
}

.sillon-t__left {
  width: 14vw;
  height: 6.5vw;
  transform-origin: top left;
  transform: rotateY(-90deg) rotateZ(90deg) translateY(-6.5vw);
  background-color: #121332;
}

.sillon-t__top {
  width: 1vw;
  height: 14vw;
  transform-origin: top left;
  transform: translateZ(6.5vw);
  background-image: linear-gradient(to right, #1f2158, #0f102b);
  border-bottom: 0.1vw solid rgba(158, 153, 193, .5);
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, rgba(40, 125, 210, .5), transparent);
  }
  
}

.sillon-t__bottom {
  width: 1vw;
  height: 14vw;
  transform-origin: top left;
  transform: rotateY(180deg) translateX(-1vw);
  background-color: #0b0c1f;
}

.mesa {
  position: absolute;
  left: 0;
  top: 0;
  width: 10vw;
  height: 9vw;
  transform: translateZ(2vw);

  &__front {
    width: 10vw;
    height: 0.5vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(8.5vw);
    background-image: linear-gradient(to right, #0b0c1f, #000);

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(45deg, rgba(81, 137, 251, .125), rgba(180, 205, 253, .25), transparent 55%);
    }

  }

  &__back {
    width: 10vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-10vw) translateY(-0.5vw);
    background-color: #0b0c1f;
  }

  &__right {
    width: 9vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(10vw) translateX(-9vw) translateY(-0.5vw);
    background-color: #000;
  }

  &__left {
    width: 9vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.5vw);
    background-color: #121332;
  }

  &__top {
    width: 10vw;
    height: 9vw;
    transform-origin: top left;
    transform: translateZ(0.5vw);
    background-image: linear-gradient(45deg, #0e0f27, #04050d);
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 45%;
      height: 200%;
      background-image: linear-gradient(90deg, rgba(81, 137, 251, 0.5), rgba(251, 250, 254, 0.125) 50%, transparent 22%);
      filter: blur(0.5vw);
    }

  }

  &__bottom {
    width: 10vw;
    height: 9vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-10vw);
    background-color: #0b0c1f;
  }

  &-c {
    position: absolute;
    left: 7vw;
    top: 9.5vw;
    width: 10vw;
    height: 9vw;
    transform: translateZ(0.5vw);
  }

  &-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10%;
    background-color: rgba(11, 12, 31, .95);
    filter: blur(1vw);
    transform: translateZ(0);
  }

  &-p {
    position: absolute;
    width: 0.25vw;
    height: 0.25vw;

    &:nth-of-type(1) {
      left: 0.5vw;
      top: 0.5vw;
    }

    &:nth-of-type(2) {
      right: 0.5vw;
      top: 0.5vw;
    }

    &:nth-of-type(3) {
      left: 0.5vw;
      bottom: 0.5vw;
    }

    &:nth-of-type(4) {
      right: 0.5vw;
      bottom: 0.5vw;
    }

  }

  &-p__front {
    width: 0.25vw;
    height: 1.75vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-1.5vw);
    background-color: #0b0c1f;
  }

  &-p__back {
    width: 0.25vw;
    height: 1.75vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-0.25vw) translateY(-1.75vw);
    background-color: #0b0c1f;
  }

  &-p__right {
    width: 0.25vw;
    height: 1.75vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(0.25vw) translateX(-0.25vw) translateY(-1.75vw);
    background-color: #000;
  }

  &-p__left {
    width: 0.25vw;
    height: 1.75vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-1.75vw);
    background-color: #121332;
  }

  &-p__top {
    width: 0.25vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: translateZ(1.75vw);
    background-color: #1f2158;
  }

  &-p__bottom {
    width: 0.25vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-0.25vw);
    background-color: #0b0c1f;

    &::before {
      content: '';
      position: absolute;
      width: 600%;
      height: 200%;
      top: 0;
      right: 0;
      border-radius: 10%;
      transform: translateZ(-0.1vw);
      background-color: rgba(0, 0, 0, .75);
      filter: blur(0.35vw);
    }

  }
  
}

.tablet {
  position: absolute;
  left: 13vw;
  top: 12vw;
  width: 2vw;
  height: 2.5vw;
  transform: translateZ(3.01vw) rotateZ(15deg);

  &__front {
    width: 2vw;
    height: 0.125vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(2.375vw);
    background-color: #8079ae;
  }

  &__back {
    width: 2vw;
    height: 0.125vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-2vw) translateY(-0.125vw);
    background-color: #383358;
  }

  &__right {
    width: 2.5vw;
    height: 0.125vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(2vw) translateX(-2.5vw) translateY(-0.125vw);
    background-color: #383358;
  }

  &__left {
    width: 2.5vw;
    height: 0.125vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.125vw);
    background-color: #9e99c1;
  }

  &__top {
    width: 2vw;
    height: 2.5vw;
    transform-origin: top left;
    transform: translateZ(0.125vw);
    background-color: #83abfc;
    border: 0.2vw solid rgba(81, 137, 251, .25);
    animation: pantalla-tablet 0.25s infinite;
  }

  &__bottom {
    width: 2vw;
    height: 2.5vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-2vw);
    background-color: #000;
    box-shadow: 0.25vw 0.25vw 0.5vw rgba(24, 74, 124, .75), -0.25vw 0.25vw 0.5vw rgba(24, 74, 124, .75), -0.25vw -0.25vw 0.5vw rgba(24, 74, 124, .75), 0.25vw -0.25vw 0.5vw rgba(24, 74, 124, .75);
  }
  
}

/* 相关动画 */

@keyframes pantalla-tablet {
  from {
    background-color: #6a9afb;
  }
}

@keyframes pantalla-tv {
  from {
    background-color: #6a9afb;
    box-shadow: 0.125vw 0.125vw 0vw rgba(81, 137, 251, 0), -0.125vw 0.125vw 0vw rgba(81, 137, 251, 0), 0.125vw -0.125vw 0vw rgba(81, 137, 251, 0), -0.125vw -0.125vw 0vw rgba(81, 137, 251, 0);
  }
}

@keyframes luz-tv {
  from {
    background-image: radial-gradient(rgba(36, 112, 188, .8), rgba(56, 121, 250, .8));
  }
}
</style>