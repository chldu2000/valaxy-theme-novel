<script setup lang="ts">
import { useSiteConfig } from 'valaxy'
import { ref } from 'vue'

defineProps<{
  frontmatter: {
    author?: string
  }
}>()

const siteConfig = useSiteConfig()

const activeSidebar = ref<'author' | 'postList'>('author')
</script>

<template>
  <div class="mb-4 flex xl:col-span-1 space-x-2">
    <button
      class="border-b-2 rounded-t px-4 py-2"
      :class="activeSidebar === 'author' ? 'border-blue-500 font-bold' : 'border-transparent'"
      @click="activeSidebar = 'author'"
    >
      Author
    </button>
    <button
      class="border-b-2 rounded-t px-4 py-2"
      :class="activeSidebar === 'postList' ? 'border-blue-500 font-bold' : 'border-transparent'"
      @click="activeSidebar = 'postList'"
    >
      Posts
    </button>
  </div>

  <!-- Tab Content -->
  <div class="xl:col-span-1">
    <NovelAuthor
      v-if="activeSidebar === 'author' && (frontmatter.author || siteConfig.author)"
      :frontmatter="frontmatter"
    />
    <NovelPostListLite v-else-if="activeSidebar === 'postList'" />
  </div>
</template>
