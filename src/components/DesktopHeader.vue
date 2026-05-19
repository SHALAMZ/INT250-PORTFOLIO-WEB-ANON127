<script setup>
import { computed } from 'vue'
import { navLinks, ownerName } from '../data/portfolio'

const props = defineProps({
  activeSection: {
    type: String,
    default: 'home',
  },
  isDarkMode: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['toggleTheme'])
const desktopLinks = computed(() => navLinks)
const isActive = (href) => href === `#${props.activeSection}`
</script>

<template>
  <header
    class="hidden md:flex fixed top-4 left-1/2 z-50 w-[90%] max-w-container-max -translate-x-1/2 items-center justify-between rounded-xl border border-white/30 bg-white/40 px-margin-desktop py-4 shadow-2xl shadow-primary-fixed-dim/10 backdrop-blur-xl dark:border-white/10 dark:bg-on-background"
  >
    <a class="flex items-center gap-2" href="#home" aria-label="ZEN_TECH home">
      <span class="material-symbols-outlined text-primary-fixed-dim">terminal</span>
      <span class="font-display text-[24px] font-extrabold tracking-tight text-primary">
        {{ ownerName }}
      </span>
    </a>

    <nav class="flex gap-8" aria-label="Main navigation">
      <a
        v-for="(link, index) in desktopLinks"
        :key="link.href"
        class="rounded px-2 pb-1 font-label text-label-sm transition-all hover:bg-white/10 hover:text-primary-fixed-dim hover:shadow-[0_0_15px_rgba(0,218,243,0.3)]"
        :class="isActive(link.href) ? 'border-b-2 border-primary-fixed-dim text-primary-fixed-dim' : 'text-on-surface-variant'"
        :href="link.href"
      >
        {{ link.label }}
      </a>
    </nav>

    <button
      class="flex items-center justify-center rounded-full p-2 text-on-surface-variant transition-all hover:bg-white/10 hover:text-primary-fixed-dim"
      type="button"
      :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
      @click="emit('toggleTheme')"
    >
      <span class="material-symbols-outlined text-primary-fixed-dim">
        {{ isDarkMode ? 'light_mode' : 'dark_mode' }}
      </span>
    </button>
  </header>
</template>
