<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useSettings } from "../composables/useSettings";

const { isDark, toggleDark, locale, setLocale, t, locales, localeFlags } = useSettings();

const isMenuOpen = ref(false);
const isLangOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const selectLang = (code: string) => {
  setLocale(code as 'en' | 'id' | 'zh' | 'es');
  isLangOpen.value = false;
};
</script>

<template>
  <nav class="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 border-b-8 border-pres-blue">
    <div class="max-w-full mx-auto px-4 lg:px-4">
      <div class="flex justify-between items-center h-18">
        <div class="flex flex-1 items-center">
          <RouterLink to="/" class="flex-shrink-0 flex items-center -mb-2">
            <img src="/logo.png" alt="IT Logo" class="h-10 w-auto -mt-2" />
          </RouterLink>

          <button class="hidden sm:flex items-center text-gray-500 dark:text-gray-400 hover:text-pres-blue dark:hover:text-blue-400 px-2 py-1.5 text-sm transition-colors font-medium mt-1 ml-4">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            {{ t('nav.search') }}
          </button>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden sm:flex flex-1 justify-center items-center sm:space-x-8">
          <RouterLink
            to="/"
            class="text-gray-700 dark:text-gray-200 hover:text-pres-blue dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            active-class="text-pres-blue font-semibold"
            >{{ t('nav.home') }}</RouterLink
          >
          <RouterLink
            to="/directory"
            class="text-gray-700 dark:text-gray-200 hover:text-pres-blue dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            active-class="text-pres-blue font-semibold"
            >{{ t('nav.directory') }}</RouterLink
          >
          <RouterLink
            to="/projects"
            class="text-gray-700 dark:text-gray-200 hover:text-pres-blue dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            active-class="text-pres-blue font-semibold"
            >{{ t('nav.projects') }}</RouterLink
          >
          <RouterLink
            to="/media"
            class="text-gray-700 dark:text-gray-200 hover:text-pres-blue dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            active-class="text-pres-blue font-semibold"
            >{{ t('nav.media') }}</RouterLink
          >
        </div>

        <div class="flex-1 flex items-center justify-end space-x-6">
          <!-- Language Dropdown (Desktop) -->
          <div class="relative hidden sm:block">
            <button
              @click="isLangOpen = !isLangOpen"
              class="text-gray-500 dark:text-gray-400 hover:text-pres-blue dark:hover:text-blue-400 transition-colors flex items-center space-x-1 text-sm font-medium"
            >
              <span>{{ localeFlags[locale] }}</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              v-show="isLangOpen"
              class="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50"
              @mouseleave="isLangOpen = false"
            >
              <button
                v-for="l in locales"
                :key="l.code"
                @click="selectLang(l.code)"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                :class="{ 'font-semibold text-pres-blue': locale === l.code }"
              >
                {{ l.label }}
              </button>
            </div>
          </div>

          <div class="hidden sm:block h-6 w-px bg-gray-300 dark:bg-gray-600"></div>

          <!-- Dark Mode Toggle (Desktop) -->
          <button @click="toggleDark" class="hidden sm:block text-gray-500 dark:text-gray-400 hover:text-pres-blue dark:hover:text-blue-400 transition-colors">
            <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </button>
        </div>



        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden space-x-2">
          <button class="text-gray-500 dark:text-gray-400 hover:text-pres-blue dark:hover:text-blue-400 p-2 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <button
            @click="toggleMenu"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pres-blue"
            aria-controls="mobile-menu"
            :aria-expanded="isMenuOpen"
          >
            <span class="sr-only">{{ t('nav.openMenu') }}</span>
            <svg
              v-if="!isMenuOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="isMenuOpen"
      class="sm:hidden border-t border-gray-200 dark:border-gray-700"
      id="mobile-menu"
    >
      <div class="pt-2 pb-3 space-y-1">
        <RouterLink
          @click="toggleMenu"
          to="/"
          class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-pres-blue dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
          active-class="text-pres-blue bg-blue-50 dark:bg-gray-800 border-l-4 border-pres-blue"
          >{{ t('nav.home') }}</RouterLink
        >
        <RouterLink
          @click="toggleMenu"
          to="/directory"
          class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-pres-blue dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
          active-class="text-pres-blue bg-blue-50 dark:bg-gray-800 border-l-4 border-pres-blue"
          >{{ t('nav.directory') }}</RouterLink
        >
        <RouterLink
          @click="toggleMenu"
          to="/projects"
          class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-pres-blue dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
          active-class="text-pres-blue bg-blue-50 dark:bg-gray-800 border-l-4 border-pres-blue"
          >{{ t('nav.projects') }}</RouterLink
        >
        <RouterLink
          @click="toggleMenu"
          to="/media"
          class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-pres-blue dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
          active-class="text-pres-blue bg-blue-50 dark:bg-gray-800 border-l-4 border-pres-blue"
          >{{ t('nav.media') }}</RouterLink
        >
        <div class="border-t border-gray-200 dark:border-gray-700 mt-2 pt-3 px-4 flex items-center space-x-6">
        
          <!-- Language Dropdown (Mobile) -->
          <div class="relative">
            <button
              @click="isLangOpen = !isLangOpen"
              class="text-gray-500 dark:text-gray-400 hover:text-pres-blue dark:hover:text-blue-400 transition-colors p-1 flex items-center space-x-1"
            >
              <span class="text-xs font-medium">{{ localeFlags[locale] }}</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              v-show="isLangOpen"
              class="absolute left-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50"
            >
              <button
                v-for="l in locales"
                :key="l.code"
                @click="selectLang(l.code)"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                :class="{ 'font-semibold text-pres-blue': locale === l.code }"
              >
                {{ l.label }}
              </button>
            </div>
          </div>

          <!-- Dark Mode Toggle (Mobile) -->
          <button @click="toggleDark" class="text-gray-500 dark:text-gray-400 hover:text-pres-blue dark:hover:text-blue-400 transition-colors p-1">
            <svg v-if="!isDark" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </button>
          
        </div>
      </div>
    </div>
  </nav>
</template>
