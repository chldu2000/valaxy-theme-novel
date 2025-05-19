<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'

const navBar = ref<HTMLDivElement>()
const navHeight = ref(0)

function updateNavHeight() {
  if (navBar.value) {
    navHeight.value = navBar.value.offsetHeight
  }
}

onMounted(() => {
  updateNavHeight()
  window.addEventListener('resize', updateNavHeight)
})

onUpdated(() => {
  updateNavHeight()
})
</script>

<template>
  <div class="antialiased">
    <!-- 固定定位的导航栏 -->
    <div
      ref="navBar"
      class="fixed left-0 right-0 top-0 z-50 backdrop-blur-xl"
    >
      <div class="mx-auto max-w-3xl px-4 xl:max-w-5xl sm:px-6 xl:px-0">
        <NovelNav />
      </div>
    </div>
    <!-- 添加一个占位 div，防止内容被 fixed 元素遮挡 -->
    <div :style="{ height: `${navHeight}px` }" />

    <main class="mx-auto max-w-3xl px-4 xl:max-w-5xl sm:px-6 xl:px-0">
      <slot>
        <RouterView v-slot="{ Component }">
          <component :is="Component">
            <template #main-header>
              <slot name="main-header" />
            </template>

            <template #main-header-after>
              <slot name="main-header-after" />
            </template>
            <template #main>
              <slot name="main" />
            </template>
            <template #main-content>
              <slot name="main-content" />
            </template>
            <template #main-content-after>
              <slot name="main-content-after" />
            </template>
            <template #main-nav-before>
              <slot name="main-nav-before" />
            </template>
            <template #main-nav-after>
              <slot name="main-nav-after" />
            </template>
            <template #aside-custom>
              <slot name="aside-custom" />
            </template>
            <template #footer>
              <slot name="footer" />
            </template>
          </component>
        </RouterView>
      </slot>
    </main>

    <StarterHelper />

    <NovelFooter>
      <slot name="footer" />
    </NovelFooter>
  </div>
</template>
