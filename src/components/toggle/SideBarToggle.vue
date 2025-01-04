<!--
 * @Author: yang
 * @Date: 2025-01-04 18:21:13
 * @LastEditors: yang
 * @LastEditTime: 2025-01-04 20:31:55
 * @Description: 侧面菜单滑块
 -->
<template>
  <input type="checkbox" class="check" id="check" />
  <label for="check" class="side-bar-toggle">
    <span class="line1"></span>
    <span class="line2"></span>
    <span class="line3"></span>
  </label>
</template>

<script setup>

</script>

<style scoped>

.check {
  display: none;
}

.side-bar-toggle {
  position: relative;
  display: inline-block;
  width: 35px;
  height: 25px;
  cursor: pointer;
}

.side-bar-toggle span {
  width: 35px;
  height: 5px;
  background-color: darkgray;
  border-radius: 2px;
  position: absolute;
  transition: 0.4s;
}

.line1 {
  top: 0;
}

.line2 {
  top: calc(40%);
}

.line3 {
  top: calc(80%);
}

.side-bar-toggle:hover span {
  width: 54%;
}

.side-bar-toggle:hover .line1 {
  transform: translate(15px, 6px) rotate(35deg);
  border-radius: 3px 5px 5px 3px;
}

.side-bar-toggle:hover .line3 {
  transform: translate(15px, -6px) rotate(-35deg);
  border-radius: 3px 5px 5px 3px;
}

.check:checked ~ .side-bar-toggle:hover .line1 {
  transform: translate(0, 6px) rotate(-35deg);
  border-radius: 3px 5px 5px 3px;
}

.check:checked ~ .side-bar-toggle:hover .line3 {
  transform: translate(0, -6px) rotate(35deg);
  border-radius: 3px 5px 5px 3px;
}

.check:checked ~ .side-bar-toggle:hover .line2 {
  margin-left: 16px;
}


</style>