<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="group relative flex flex-col items-center justify-between md:flex-row"
    :class="{ 'md:flex-row-reverse': item.reverse }"
  >
    <div
      class="hidden w-5/12 md:block"
      :class="item.reverse ? 'pl-12 text-left' : 'pr-12 text-right'"
    >
      <span class="font-label text-label-sm tracking-widest text-on-surface-variant">
        {{ item.period }}
      </span>
    </div>

    <div
      class="absolute left-0 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 bg-white transition-all group-hover:border-primary-fixed-dim group-hover:shadow-[0_0_15px_#00daf3] md:left-1/2"
      :class="item.reverse ? 'border-outline' : 'border-primary-fixed-dim'"
    ></div>

    <div
      class="w-full pl-12 md:w-5/12"
      :class="item.reverse ? 'text-left md:pr-12 md:pl-0 md:text-right' : 'md:pl-12'"
    >
      <div
        class="relative overflow-hidden rounded-xl border border-white/40 bg-white/40 p-8 shadow-lg shadow-surface-variant/20 backdrop-blur-xl transition-all group-hover:shadow-[0_0_30px_rgba(0,218,243,0.15)]"
      >
        <div
          v-if="!item.reverse"
          class="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-primary-container"
        ></div>
        <h3 class="mb-2 font-display text-2xl font-bold text-on-background">{{ item.title }}</h3>
        <p class="mb-4 text-on-surface-variant">{{ item.description }}</p>
        <div class="flex flex-wrap gap-2" :class="{ 'md:justify-end': item.reverse }">
          <span
            v-for="tag in item.tags"
            :key="tag"
            class="rounded-full border border-primary/10 bg-on-secondary-fixed/5 px-3 py-1 font-label text-label-sm text-primary"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>
