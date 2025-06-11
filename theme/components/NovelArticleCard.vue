<script lang="ts" setup>
import type { Post } from 'valaxy'
import { useThemeConfig } from '../composables'

defineProps<{
  post: Post
}>()

const themeConfig = useThemeConfig()
</script>

<template>
  <article class="xl:grid xl:grid-cols-4 xl:items-baseline space-y-2 xl:space-y-0">
    <StarterDate :date="post.date" />
    <div class="xl:col-span-3 space-y-5">
      <div class="space-y-6">
        <h2 class="nv-title text-2xl font-bold leading-8 tracking-tight">
          <RouterLink class="st-text" :to="post.path || ''">
            {{ post.title }}
          </RouterLink>
        </h2>
        <div
          v-if="post.excerpt"
          class="max-w-none text-gray-500 prose"
          v-html="post.excerpt"
        />
      </div>
      <div class="text-base font-medium leading-6">
        <RouterLink class="link" aria-label="read more" :to="post.path || ''" :style="{ color: themeConfig.colors.primary }">
          Read more →
        </RouterLink>
      </div>
    </div>
  </article>
</template>

<style scoped>
article {
  position: relative;
  padding: 1.5rem;
  border: 4px double #ccc;
  background-color: adjust(var(--nv-c-bg), lightness -10%);
  border-radius: 10px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);
  overflow: visible;
}

/* 模仿活页纸左侧打孔 */
article::before {
  content: '';
  position: absolute;
  top: 18px;
  left: -18px;
  width: 12px;
  height: calc(100% - 36px);
  background: radial-gradient(circle at 6px 12px, #e0ded7 6px, transparent 7px);
  background-repeat: repeat-y;
  background-size: 12px 24px;
  background-position: left top;
  z-index: 2;
  pointer-events: none;
}

/* 活页纸边缘阴影 */
article::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 8px;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.06), transparent 80%);
  border-radius: 10px 0 0 10px;
  z-index: 1;
  pointer-events: none;
}
</style>
