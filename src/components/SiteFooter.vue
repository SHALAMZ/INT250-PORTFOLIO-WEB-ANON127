<script setup>
import { ownerName, socialLinks } from '../data/portfolio'
</script>

<template>
  <footer
    id="contact"
    class="mx-auto mt-[120px] flex w-full max-w-container-max flex-col items-center justify-between gap-base border-t border-white/10 bg-transparent px-margin-mobile py-12 transition-all duration-500 md:flex-row md:px-margin-desktop"
  >
    <div class="font-display text-headline-lg-mobile font-bold text-on-background">{{ ownerName }}</div>

    <nav class="flex gap-6 font-label text-label-sm text-on-surface-variant" aria-label="Social links">
      <a
        v-for="link in socialLinks"
        :key="link"
        class="transition-all hover:text-primary-fixed-dim hover:drop-shadow-[0_0_8px_#00daf3]"
        href="#"
      >
        {{ link }}
      </a>
    </nav>

    <div class="mt-4 text-center font-label text-label-sm text-tertiary md:mt-0 md:text-right">
      © 2026 {{ ownerName }} PORTFOLIO.
    </div>
  </footer>
</template>
