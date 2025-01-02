/**
 * @Author: yang
 * @Date: 2025-01-02 17:12:57
 * @LastEditors: yang
 * @LastEditTime: 2025-01-02 17:20:30
 * @Description: 主题存储
 */
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
    state: () => ({
        isDarkTheme: false,
    }),
    actions: {
        toggleTheme() {
            this.isDarkTheme = !this.isDarkTheme;
            document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
            localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
        },
        setTheme(isDark) {
            this.isDarkTheme = isDark;
            document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }
    },
    persist: {
        storage: localStorage,
        key: 'theme',
        paths: ['isDarkTheme'],
    }
});