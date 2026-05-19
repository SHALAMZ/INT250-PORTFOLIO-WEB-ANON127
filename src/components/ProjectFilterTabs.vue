<script setup>
defineProps({
  filters: {
    type: Array,
    required: true,
  },
  activeFilter: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:activeFilter'])
</script>

<template>
  <div class="mb-12 flex flex-wrap gap-6 border-b border-surface-variant pb-2">
    <button
      v-for="filter in filters"
      :key="filter"
      class="filter-tab pb-2 font-label text-label-sm transition-colors"
      :class="filter === activeFilter ? 'active text-on-background' : 'text-on-surface-variant hover:text-primary-fixed-dim'"
      type="button"
      @click="emit('update:activeFilter', filter)"
    >
      {{ filter }}
    </button>
  </div>
</template>
