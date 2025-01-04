/**
 * @Author: yang
 * @Date: 2025-01-02 17:12:57
 * @LastEditors: yang
 * @LastEditTime: 2025-01-04 14:25:34
 * @Description: 主题存储
 */
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    }),
    actions: {
        setTheme(isDark) {
            this.theme = isDark ? 'dark' : 'light';
            console.log('theme', this.theme)
        }
    },
    persist: {
        storage: localStorage,
        key: 'theme',
        paths: ['isDarkTheme'],
    }
});
