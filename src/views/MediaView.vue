<script setup lang="ts">
// Frontend Developer (Media Section): daffa (mantap)
// Silahkan bangung galeri media, lazy loading gambar, dan optimasi aset visual di sini.
import { useSettings } from "../composables/useSettings";
const { t } = useSettings();
</script>

<template>
    <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div class="text-center">
            <h1
                class="text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-5xl"
            >
                {{ t("media.title") }}
            </h1>
            <p
                class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto"
            ></p>
        </div>
    </div>
</template>
