<script setup>
import { galleryItems } from '../data/portfolio'
import GalleryCard from './GalleryCard.vue'
</script>

<template>
  <section id="gallery" class="mx-auto w-full max-w-container-max px-margin-mobile pt-32 md:px-margin-desktop">
    <h2 class="mb-12 flex items-center justify-end gap-4 font-display text-headline-lg-mobile font-bold text-primary md:text-headline-lg">
      Life & Inspirations
      <span class="h-1 w-12 rounded-full bg-primary-fixed-dim"></span>
    </h2>
    <div class="grid auto-rows-[250px] grid-cols-1 gap-base md:grid-cols-4 md:gap-gutter">
      <GalleryCard v-for="item in galleryItems" :key="item.id" :item="item" />
    </div>
  </section>
</template>
