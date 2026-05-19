<script setup>
import { avatarImage, navLinks } from '../data/portfolio'

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])
</script>

<template>
  <div
    class="fixed inset-0 z-50 bg-on-background/20 backdrop-blur-sm transition-opacity md:hidden"
    :class="isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'"
    @click="emit('close')"
  ></div>

  <nav
    id="mobile-navigation"
    class="fixed inset-y-0 left-0 z-[60] flex h-full w-80 max-w-[85vw] flex-col rounded-r-xl border-r border-white/20 bg-surface-container-lowest/80 shadow-2xl shadow-cyan-900/20 backdrop-blur-2xl transition-transform duration-300 ease-in-out md:hidden"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    aria-label="Mobile navigation"
  >
    <div class="flex flex-col items-start gap-4 border-b border-white/10 p-6">
      <div class="h-16 w-16 overflow-hidden rounded-full border-2 border-primary-fixed-dim p-0.5">
        <img class="h-full w-full rounded-full object-cover" :src="avatarImage" alt="Student avatar" />
      </div>
      <div>
        <h2 class="font-display text-headline-lg-mobile font-bold text-primary">Anon Portfolio</h2>
        <p class="text-body-md text-on-surface-variant">SIT Student</p>
        <!-- <span class="mt-1 block font-label text-label-sm text-tertiary">v1.0.4</span> -->
      </div>
    </div>

    <div class="flex flex-grow flex-col gap-2 overflow-y-auto py-4">
      <a
        v-for="(link, index) in navLinks"
        :key="link.href"
        class="mx-2 flex items-center gap-4 rounded-lg px-4 py-3 font-label text-label-sm transition hover:backdrop-brightness-110"
        :class="index === 0 ? 'bg-primary-container/30 text-primary-fixed-dim' : 'text-on-surface-variant hover:bg-surface-variant/20'"
        :href="link.href"
        @click="emit('close')"
      >
        <span class="material-symbols-outlined">{{ link.icon }}</span>
        <span>{{ link.label }}</span>
      </a>
    </div>
  </nav>
</template>
