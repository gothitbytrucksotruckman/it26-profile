<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useSettings } from '../composables/useSettings'

const { t } = useSettings()
</script>

<template>
  <div class="bg-white dark:bg-gray-900">
    <!-- Hero Section -->
    <div class="relative bg-pres-dark text-white overflow-hidden">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover blur-[2px] scale-105" src="/gedung-baru.png" alt="President University Building" />
        <div class="absolute inset-0 bg-pres-dark/50" />
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
          {{ t('home.tagline1') }}
        </h1>
        <p class="mt-6 text-xl max-w-3xl text-white">
          {{ t('home.tagline2') }}
        </p>
        <p class="mt-4 text-lg max-w-2xl text-white">
          {{ t('home.tagline3') }}
        </p>
        <div class="mt-10 flex space-x-4">
          <RouterLink to="/directory" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pres-blue hover:bg-blue-900 transition-colors">
            {{ t('home.meetBatch') }}
          </RouterLink>
          <RouterLink to="/projects" class="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-pres-dark transition-colors">
            {{ t('home.viewProjects') }}
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Core Values / Highlights -->
    <div class="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-base font-semibold text-pres-blue dark:text-white tracking-wide uppercase">{{ t('home.ourVision') }}</h2>
        <p class="mt-1 text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl sm:tracking-tight">
          {{ t('home.shapingDigital') }}
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
          {{ t('home.communityDesc') }}
        </p>
      </div>

      <div class="mt-16">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="pt-6">
            <div class="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8 h-full shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center p-3 bg-pres-blue rounded-md shadow-lg">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 dark:text-gray-100 tracking-tight">{{ t('home.techExcellence') }}</h3>
                <p class="mt-5 text-base text-gray-500 dark:text-gray-400">
                  {{ t('home.techExcellenceDesc') }}
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <div class="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8 h-full shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center p-3 bg-pres-blue rounded-md shadow-lg">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 dark:text-gray-100 tracking-tight">{{ t('home.innovationFirst') }}</h3>
                <p class="mt-5 text-base text-gray-500 dark:text-gray-400">
                  {{ t('home.innovationFirstDesc') }}
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <div class="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8 h-full shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center p-3 bg-pres-blue rounded-md shadow-lg">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 dark:text-gray-100 tracking-tight">{{ t('home.strongCommunity') }}</h3>
                <p class="mt-5 text-base text-gray-500 dark:text-gray-400">
                  {{ t('home.strongCommunityDesc') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
