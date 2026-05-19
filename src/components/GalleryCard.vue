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
    v-if="item.layout === 'note'"
    class="flex flex-col items-center justify-center rounded-xl border border-white/30 bg-primary-container/20 p-6 text-center backdrop-blur-xl transition-colors hover:bg-primary-container/30"
  >
    <span class="material-symbols-outlined mb-3 text-4xl text-primary">{{ item.icon }}</span>
    <h3 class="font-display text-lg font-bold text-on-background">{{ item.title }}</h3>
    <p class="mt-2 text-sm text-on-surface-variant">{{ item.subtitle }}</p>
  </article>

  <article
    v-else
    class="group relative overflow-hidden rounded-xl border border-white/30 shadow-lg shadow-surface-variant/20"
    :class="{
      'md:col-span-2 md:row-span-2': item.layout === 'feature',
      'md:row-span-2 shadow-primary-fixed-dim/5': item.layout === 'tall',
      'flex items-center justify-center bg-white/40 backdrop-blur-md': item.layout === 'tag',
    }"
  >
    <div v-if="item.layout === 'feature'" class="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent"></div>
    <img
      class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      :class="{ 'opacity-80 group-hover:scale-110': item.layout === 'tag' }"
      :src="item.image"
      :alt="item.alt"
    />

    <template v-if="item.layout === 'feature'">
      <div class="absolute bottom-6 left-6 z-20">
        <div class="mb-2 font-label text-label-sm uppercase tracking-widest text-primary-fixed-dim">
          {{ item.label }}
        </div>
        <h3 class="font-display text-2xl font-bold text-white">{{ item.title }}</h3>
      </div>
    </template>

    <template v-else-if="item.layout === 'tag'">
      <div class="absolute inset-0 z-10 bg-white/20 backdrop-blur-[2px] transition-all group-hover:backdrop-blur-0"></div>
      <span class="absolute z-20 rounded-full border border-white/20 bg-black/50 px-4 py-2 font-label text-label-sm text-white backdrop-blur-md">
        {{ item.title }}
      </span>
    </template>

    <template v-else>
      <div class="absolute right-4 top-4 z-20 rounded-full border border-white/50 bg-white/60 p-2 backdrop-blur-md">
        <span class="material-symbols-outlined text-primary">auto_awesome</span>
      </div>
    </template>
  </article>
</template>
