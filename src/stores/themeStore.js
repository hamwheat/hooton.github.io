/**
 * @Author: yang
 * @Date: 2025-01-02 17:12:57
 * @LastEditors: yang
 * @LastEditTime: 2025-01-03 16:53:28
 * @Description: 主题存储
 */
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
    state: () => ({
        isDarkTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
    }),
    actions: {
        switchTheme(e) {
            this.isDarkTheme = !this.isDarkTheme;
            
            // 执行切换主题操作
            const transition = document.startViewTransition(() => {
                document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
            });
            // 等待视图转换完成
            transition.ready.then(() => {
                // 获取当前坐标
                const { clientX, clientY } = e;
                // 计算最大的扩散半径
                const maxRadius = Math.hypot(
                    Math.max(clientX, innerWidth - clientX),
                    Math.max(clientY, innerHeight - clientY)
                )
                // 开始圆形扩散动画
                document.documentElement.animate([
                    {
                        clipPath: [
                            `circle(0px at ${clientX}px ${clientY}px)`,
                            `circle(${maxRadius}px at ${clientX}px ${clientY}px)`
                        ]
                    },
                    // 设置时间和目标伪元素
                    {
                        duration: 300,
                        pseudoElement: '::view-transition-new(root)'
                    }
                ])
            })
            
            // document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
            localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
        },
        setTheme(isDark) {
            this.isDarkTheme = isDark;
            document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            console.log('setTheme ==> ', localStorage.getItem('theme'));
        }
    },
    persist: {
        storage: localStorage,
        key: 'theme',
        paths: ['isDarkTheme'],
    }
});
