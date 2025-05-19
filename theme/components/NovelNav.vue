<script lang="ts" setup>
import { useAppStore, useSiteConfig } from 'valaxy'

// import { computed } from 'vue'
// import { useRoute } from 'vue-router'
import { useThemeConfig } from '../composables'

// const route = useRoute()
// const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')

const appStore = useAppStore()

const siteConfig = useSiteConfig()
const themeConfig = useThemeConfig()
</script>

<template>
  <nav w="full" class="flex items-center justify-between py-4 font-bold">
    <RouterLink class="text-xl" to="/" :aria-label="siteConfig.title">
      <img
        class="mr-2 inline-block"
        style="width: 50px; height: 35px"
        alt="logo"
        :src="siteConfig.favicon"
      >
      <span class="hidden md:inline">{{ siteConfig.title }}</span>
    </RouterLink>
    <div class="text-sm text-gray-500 leading-5">
      <template v-for="(item, i) in themeConfig.nav" :key="i">
        <AppLink
          :to="item.link"
          rel="noopener"
          class="inline-flex items-center"
        >
          <span
            v-if="item.icon"
            class="inline-flex items-center justify-center"
            :class="[item.icon]"
          />
          <span v-else>{{ item.text || '' }}</span>
        </AppLink>
        <span v-if="i !== themeConfig.nav.length - 1" class="ml-2 mr-2">/</span>
      </template>
    </div>

    <button type="button" aria-label="Toggle Dark Mode" @click="appStore.toggleDarkWithTransition">
      <div v-if="!appStore.isDark" i-ri-sun-line />
      <div v-else i-ri-moon-line />
    </button>
  </nav>
</template>
