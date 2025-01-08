<!--
 * @Author: yang
 * @Date: 2025-01-07 14:35:25
 * @LastEditors: yang
 * @LastEditTime: 2025-01-08 16:34:33
 * @Description: 错误页面
 -->
<template>
  <h1>{{ 404 }}</h1>
  <div ref="errorMessage">
    <p>> <span>错误代码</span>: "HTTP 404 Not Found"</p>
    <p>> <span>错误描述</span>: "您请求的页面不存在或已删除"</p>
    <p>> <span>错误可能由以下原因引起</span>: [<b>‌原始URL失效‌、</b><b>‌文件目录或名称更改、</b><b>文件迁移或删除、</b><b>地址输入错误、</b><b>服务器不稳定‌</b>...]</p>
    <p>> <span>此服务器上您有权访问的页面包括</span>: [<a href="/">主页</a>, <a href="/about">关于我们</a>, <a
        href="/contact">联系我们</a>, <a href="/blog">博客</a>...]</p>
    <p>> <span>请尝试以下操作</span>: [<a href="/">返回首页</a>, <a href="javascript:history.back()">返回上一页</a>, <a
        href="/">刷新页面</a>, <a href="/contact">联系我们</a>...]</p>
  </div>
</template>
<script setup>
import {ref, onMounted} from 'vue';

const props = defineProps({
  statusCode: String
});

const errorMessage = ref(null);

onMounted(() => {
  let str = errorMessage.value.innerHTML.toString(); // 获取错误信息的HTML字符串
  let i = 0; // 初始化索引为0
  errorMessage.value.innerHTML = ""; // 清空错误信息

  /**
   * 模拟打字机效果
   */
  let se = setInterval(function () {
    console.log(str.slice(0, i))
    i++;
    errorMessage.value.innerHTML = str.slice(0, i) + "|"; // 添加一个竖线
    if (i === str.length) {
      clearInterval(se);
      errorMessage.value.innerHTML = str;
    }
  }, 12);
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Share+Tech+Mono|Montserrat:700");

h1 {
  margin: 0;
  font-size: 45vw;
  text-align: center;
  position: fixed;
  width: 100vw;
  z-index: 1;
  color: var(--bg-text-color);
  text-shadow: var(--bg-text-shadow);
  top: 50%;
  transform: translateY(-50%);
  font-family: "Montserrat", monospace;
}

div {
  background: rgba(0, 0, 0, 0);
  width: 70vw;
  position: relative;
  top: 50%;
  padding: 30px 30px 10px;
  margin: var(--nav-height) auto 0;
  box-shadow: var(--bg-box-shadow);
  z-index: 3;
}

P {
  font-family: "Share Tech Mono", monospace;
  color: var(--text-color);
  margin: 0 0 20px;
  font-size: 17px;
  font-weight: bold;
  line-height: 2.2;
}

span {
  color: var(--accent-color);
  font-weight: bold;
}

i {
  color: var(--text-color);
}

div a {
  color: var(--primary-color);
}

b {
  color: var(--primary-color);
}
</style>