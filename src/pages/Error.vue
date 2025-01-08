<!--
 * @Author: yang
 * @Date: 2025-01-07 14:35:25
 * @LastEditors: yang
 * @LastEditTime: 2025-01-08 09:21:19
 * @Description: 错误页面
 -->
<template>
  <h1>{{ 403 }}</h1>
  <div ref="errorMessage">
    <p>> <span>错误代码</span>: "<i>HTTP 403 Forbidden</i>"</p>
    <p>> <span>错误描述</span>: "<i>访问被拒绝，您无权在此服务器上访问此页面</i>"</p>
    <p>> <span>错误可能由以下原因引起</span>: [<b>禁止执行访问、禁止读取访问、禁止写入访问、需要 SSL、需要 SSL 128、IP 地址被拒绝、需要客户端证书、站点访问被拒绝、用户过多、配置无效、密码更改、映射器拒绝访问、客户端证书被吊销、目录列表被拒绝、超出客户端访问许可证、客户端证书不受信任或无效、客户端证书已过期或尚未有效、 Passport 登录失败，源访问被拒绝，无限深度被拒绝，来自同一客户端 IP 的请求过多 </b>...]</p>
    <p>> <span>此服务器上您有权访问的某些页面</span>: [<a href="/">主页</a>, <a href="/">关于我们</a>, <a href="/">联系我们</a>, <a href="/">博客</a>...]</p>
    <p>> <span>请尝试以下操作</span>: [<a href="/">返回首页</a>, <a href="/">返回上一页</a>, <a href="/">刷新页面</a>, <a href="/">联系我们</a>...]</p>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

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
  setTimeout(function() {
    let se = setInterval(function() {
      console.log(str.slice(0, i))
      i++;
      errorMessage.value.innerHTML = str.slice(0, i) + "|"; // 添加一个竖线
      if (i === str.length) {
        clearInterval(se);
        errorMessage.value.innerHTML = str;
      }
    }, 10);
  }, 0);
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
  color: #ffffff26;
  text-shadow: 0 0 50px rgba(0, 0, 0, 0.07);
  top: 50%;
  transform: translateY(-50%);
  font-family: "Montserrat", monospace;
}

div {
  background: rgba(0, 0, 0, 0);
  width: 70vw;
  position: relative;
  top: 50%;
  margin: 0 auto;
  padding: 30px 30px 10px;
  box-shadow: 0 0 150px -20px rgba(0, 0, 0, 0.5);
  z-index: 3;
}

P {
  font-family: "Share Tech Mono", monospace;
  color: #f5f5f5;
  margin: 0 0 20px;
  font-size: 17px;
  line-height: 2.2;
}

span {
  color: #f0c674;
}

i {
  color: #8abeb7;
}

div a {
  color: #81a2be;
}

b {
  color: #81a2be;
}
</style>