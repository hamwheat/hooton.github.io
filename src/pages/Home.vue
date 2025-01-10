<!--
 * @Author: yang
 * @Date: 2024-12-31 14:41:49
 * @LastEditors: yang
 * @LastEditTime: 2025-01-10 14:17:35
 * @Description: 主页
 -->
<template>
  <div class="home">
    <div class="greetings">
      <div class="greetings-text">
        <div class="welcome"></div>
        <p class="description">
          欢迎来到我的网站！我致力于提供高质量的内容和优秀的用户体验。在这里，你可以找到各种有趣的文章、教程和资源。
        </p>
        <div class="actions">
          <button class="action-button">了解更多</button>
          <button class="action-button">注册</button>
        </div>
      </div>
      <div class="greetings-img">
        <img src="../assets/images/logo.jpg" alt="Welcome Image" />
      </div>
    </div>
    <div class="skill-trans">
      <SkillTrans />
    </div>
  </div>
</template>

<script setup>
import SkillTrans from "@/components/transporter/SkillTrans.vue";
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.greetings {
  color: var(--text-color);
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .greetings-text {
    width: 50%;
    border-left: 4px solid #fde047cc;
    padding-left: 20px;

    .welcome {
      width: fit-content;
      font-weight: bold;
      font-family: monospace;
      white-space: pre;
      font-size: 64px;
      line-height: 1.2em;
      height: 1.2em;
      overflow: hidden;
      position: relative;

      &:before {
        content: "欢迎光临\A欢迎光\A欢迎\A欢\A \AW\AWe\AWel\AWelc\AWelco\AWelcom\AWelcome\AWelcom\AWelco\AWelc\AWel\AWe\AW\A \A欢\A欢迎\A欢迎光\A欢迎光临";
        text-align: left;
        white-space: pre;
        display: inline-block;
        animation: l39 2s steps(23) alternate;
      }
    }

    .description {
      margin-top: 20px;
      font-size: 1.2rem;
      color: var(--secondary-text-color);
      text-align: left;
    }

    .actions {
      margin-top: 20px;
      display: flex;
      gap: 10px;

      .action-button {
        padding: 10px 20px;
        font-size: 1rem;
        color: var(--button-text-color);
        background-color: var(--button-color);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: var(--button-hover-color);
        }
      }
    }
  }

  .greetings-img {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
      width: 40%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
}

.skill-trans {
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .greetings {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .greetings-text {
      width: 100%;
      padding-left: 0;
      border-left: none;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .greetings-img {
      width: 100%;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

