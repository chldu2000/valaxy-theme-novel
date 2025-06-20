<script lang="ts" setup>
import { useSiteConfig, useValaxyConfig } from 'valaxy'
import pkg from 'valaxy/package.json'
import { capitalize, computed } from 'vue'

import { useI18n } from 'vue-i18n'
import { useThemeConfig } from '../composables'

const { t } = useI18n()

const config = useValaxyConfig()
const siteConfig = useSiteConfig()
const themeConfig = useThemeConfig()

const year = new Date().getFullYear()

const isThisYear = computed(() => {
  return year === themeConfig.value.footer.since
})

const valaxyRepo = pkg.repository.url
const valaxyVersion = pkg.version
const footerIcon = computed(() => themeConfig.value.footer.icon!)
</script>

<template>
  <footer class="va-footer p-4" text="center sm" style="color:var(--nv-c-text)">
    <div v-if="themeConfig.footer.beian?.enable && themeConfig.footer.beian.icp" class="beian" m="y-2">
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">
        {{ themeConfig.footer.beian.icp }}
      </a>
    </div>

    <div class="copyright flex items-center justify-center" p="1">
      <span>
        &copy;
        <template v-if="!isThisYear">
          {{ themeConfig.footer.since }} -
        </template>
        {{ year }}
      </span>

      <a m="x-2" class="inline-flex animate-pulse" :href="footerIcon.url" target="_blank" :title="footerIcon.title">
        <div :class="footerIcon.name" :style="{ color: footerIcon.color }" />
      </a>

      <span>{{ siteConfig.author.name }}</span>
    </div>

    <div v-if="themeConfig.footer.powered" class="powered" m="2">
      <a :href="valaxyRepo" :style="{ color: themeConfig.colors.primary }" target="_blank" rel="noopener">Valaxy</a> v<span>{{ valaxyVersion }}</span> | <span>{{ t('footer.theme') }} - <a :href="themeConfig.pkg.homepage" :title="`valaxy-theme-${config.theme}`" :style="{ color: themeConfig.colors.primary }" target="_blank">{{ capitalize(config.theme) }}</a> v{{ themeConfig.pkg.version }}</span>
    </div>

    <slot />
  </footer>
</template>
