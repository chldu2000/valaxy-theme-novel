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
      <img v-if="themeConfig.nav.showIcon" class="mr-2 inline-block" style="width: 50px; height: 35px" alt="logo" :src="siteConfig.favicon">
      <span v-if="themeConfig.nav.showTitle" class="nv-title hidden font-bold md:inline" :style="{ color: themeConfig.colors.primary }">{{ siteConfig.title }}</span>
    </RouterLink>

    <div class="flex space-x-8">
      <div>
        <template v-for="(item, i) in themeConfig.nav.items" :key="i">
          <AppLink v-if="!item.icon" :to="item.link" rel="noopener">
            <span :style="{ color: themeConfig.colors.primary }">{{ item.text || '' }}</span>
          </AppLink>
          <span v-if="i !== themeConfig.nav.items.length - 1 && !item.icon" class="ml-2 mr-2">/</span>
        </template>
      </div>

      <div class="mt-1 space-x-2">
        <template v-for="(item, i) in themeConfig.nav.items" :key="i">
          <AppLink v-if="item.icon" :to="item.link" rel="noopener" class="inline-flex">
            <icon :class="[item.icon]" :style="{ color: themeConfig.colors.primary }" />
          </AppLink>
        </template>
      </div>
      <button type="button" aria-label="Toggle Dark Mode" @click="appStore.toggleDarkWithTransition">
        <div v-if="!appStore.isDark" i-ri-sun-line />
        <div v-else i-ri-moon-line />
      </button>
    </div>
  </nav>
</template>
