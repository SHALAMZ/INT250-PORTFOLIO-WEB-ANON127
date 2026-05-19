<script setup>
import { experiences } from '../data/portfolio'
import ExperienceTimelineItem from './ExperienceTimelineItem.vue'
</script>

<template>
  <section id="experience" class="relative mx-auto w-full max-w-container-max px-margin-mobile pt-32 md:px-margin-desktop">
    <h2 class="mb-16 flex items-center gap-4 font-display text-headline-lg-mobile font-bold text-primary md:text-headline-lg">
      <span class="h-1 w-12 rounded-full bg-primary-fixed-dim"></span>
      History of Anon Yanying
    </h2>

    <div class="relative pl-8 md:pl-0">
      <div
        class="absolute bottom-0 left-0 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary-fixed-dim/50 via-outline-variant/30 to-transparent md:left-1/2"
      ></div>
      <div class="flex flex-col gap-12">
        <ExperienceTimelineItem v-for="item in experiences" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>
