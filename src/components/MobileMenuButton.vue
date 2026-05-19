<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['toggle'])
</script>

<template>
  <button
    class="fixed right-6 top-6 z-[70] rounded-full border border-white/30 bg-white/40 p-3 text-primary shadow-lg backdrop-blur-xl md:hidden"
    type="button"
    :aria-expanded="isOpen"
    aria-controls="mobile-navigation"
    aria-label="Toggle mobile navigation"
    @click="emit('toggle')"
  >
    <span class="material-symbols-outlined">{{ isOpen ? 'close' : 'menu' }}</span>
  </button>
</template>
