<!--
 * @Author: yang
 * @Date: 2024-12-31 14:41:49
 * @LastEditors: yang
 * @LastEditTime: 2025-01-04 09:23:19
 * @Description: 主页
 -->
<template>
  
</template>

<script setup>
import { onMounted } from 'vue';


onMounted(() => {
  
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

.content h1 {
  color: var(--primary-color);
  margin-bottom: 16px;
  font-size: 24px;
}

.content p {
  line-height: 1.6;
  color: var(--text-color);
}

@media (min-width: 768px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

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
  .header {
    padding: 12px 24px 12px 24px;
  }

  .main-content {
    padding: 32px;
  }

  .content {
    padding: 32px;
  }
}
</style>
