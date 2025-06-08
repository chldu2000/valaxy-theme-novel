<script lang="ts" setup>
import { useAppStore, useSiteConfig } from 'valaxy'

// import { computed } from 'vue'
// import { useRoute } from 'vue-router'
import { useThemeConfig } from '../composables'

// const route = useRoute()
// const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')

const appStore = useAppStore()

const siteConfig = useSiteConfig()
const navConfig = useThemeConfig().value.nav
</script>

<template>
  <nav w="full" class="flex items-center justify-between py-4 font-bold">
    <RouterLink class="text-xl" to="/" :aria-label="siteConfig.title">
      <img class="mr-2 inline-block" style="width: 50px; height: 35px" alt="logo" :src="siteConfig.favicon">
      <span class="nv-title hidden font-bold md:inline">{{ siteConfig.title }}</span>
    </RouterLink>

    <div class="flex space-x-8">
      <div>
        <template v-for="(item, i) in navConfig.items" :key="i">
          <AppLink v-if="!item.icon" :to="item.link" rel="noopener">
            <span>{{ item.text || '' }}</span>
          </AppLink>
          <span v-if="i !== navConfig.items.length - 1 && !item.icon" class="ml-2 mr-2">/</span>
        </template>
      </div>

      <div class="mt-1 space-x-2">
        <template v-for="(item, i) in navConfig.items" :key="i">
          <AppLink v-if="item.icon" :to="item.link" rel="noopener" class="inline-flex">
            <icon :class="[item.icon]" />
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
