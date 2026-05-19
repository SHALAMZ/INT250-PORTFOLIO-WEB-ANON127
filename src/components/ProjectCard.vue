<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    v-if="project.variant === 'featured'"
    class="project-card group relative col-span-1 row-span-2 flex cursor-pointer flex-col overflow-hidden rounded-xl md:col-span-8"
  >
    <div class="relative h-[60%] w-full overflow-hidden">
      <img
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        :src="project.image"
        :alt="project.imageAlt"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent"></div>
      <div class="absolute right-4 top-4 rounded-full border border-primary-fixed-dim/50 bg-primary-fixed-dim/20 px-3 py-1 backdrop-blur-md">
        <span class="font-label text-label-sm text-primary-fixed-dim">{{ project.category }}</span>
      </div>
    </div>

    <div class="flex flex-1 flex-col justify-between bg-white/40 p-6">
      <div>
        <h3 class="mb-2 font-display text-headline-lg-mobile font-bold text-on-background transition-colors group-hover:text-primary">
          {{ project.title }}
        </h3>
        <p class="line-clamp-2 text-body-md text-on-surface-variant">{{ project.description }}</p>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="tech-chip rounded-full px-3 py-1 font-label text-label-sm text-on-primary-fixed-variant"
          >
            {{ tech }}
          </span>
        </div>
        <span class="material-symbols-outlined text-outline-variant transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary-fixed-dim">
          arrow_forward
        </span>
      </div>
    </div>
  </article>

  <article
    v-else-if="project.variant === 'wide'"
    class="project-card group relative col-span-1 row-span-1 flex cursor-pointer flex-col overflow-hidden rounded-xl md:col-span-12 md:flex-row"
  >
    <div class="relative h-48 w-full overflow-hidden md:h-full md:w-1/3">
      <img
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        :src="project.image"
        :alt="project.imageAlt"
      />
      <div class="absolute left-4 top-4 rounded-full border border-white/50 bg-white/20 px-3 py-1 backdrop-blur-md">
        <span class="font-label text-label-sm text-on-background">{{ project.category }}</span>
      </div>
    </div>

    <div class="relative flex flex-1 flex-col justify-center bg-white/30 p-8 backdrop-blur-sm">
      <div class="absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-full border border-primary-fixed-dim/30 text-primary-fixed-dim transition-all duration-300 group-hover:bg-primary-fixed-dim group-hover:text-on-primary">
        <span class="material-symbols-outlined">north_east</span>
      </div>
      <h3 class="mb-4 max-w-[80%] font-display text-[32px] font-bold text-on-background">{{ project.title }}</h3>
      <p class="mb-6 max-w-2xl text-body-md text-on-surface-variant">{{ project.description }}</p>

      <div class="mt-auto flex flex-wrap gap-8 border-t border-surface-variant pt-4">
        <div v-for="stat in project.stats" :key="stat.label">
          <span class="mb-1 block font-label text-label-sm text-tertiary">{{ stat.label }}</span>
          <span class="flex items-center gap-1 font-label text-lg text-primary-fixed-dim">
            <span v-if="stat.active" class="inline-block h-2 w-2 animate-pulse rounded-full bg-primary-fixed-dim"></span>
            {{ stat.value }}
          </span>
        </div>
      </div>
    </div>
  </article>

  <article
    v-else
    class="project-card group relative col-span-1 row-span-1 flex cursor-pointer flex-col overflow-hidden rounded-xl md:col-span-4"
  >
    <div v-if="project.image" class="absolute inset-0">
      <img
        class="h-full w-full object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-60"
        :src="project.image"
        :alt="project.imageAlt"
      />
    </div>
    <div v-if="project.image" class="absolute inset-0 bg-gradient-to-b from-white/80 to-white/90"></div>
    <div
      v-else
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-fixed-dim via-transparent to-transparent opacity-10 transition-opacity duration-500 group-hover:opacity-30"
    ></div>

    <div class="relative z-10 flex flex-1 flex-col p-6">
      <div class="mb-auto">
        <div class="mb-4 flex items-start justify-between">
          <span class="material-symbols-outlined text-3xl" :class="project.variant === 'imageCompact' ? 'text-secondary' : 'text-primary-fixed-dim'">
            {{ project.icon }}
          </span>
          <span class="rounded bg-surface-variant/50 px-2 py-1 font-label text-label-sm text-on-surface-variant">
            {{ project.category }}
          </span>
        </div>
        <h3 class="mb-2 font-display text-[24px] font-bold text-on-background">{{ project.title }}</h3>
        <p class="line-clamp-2 text-sm text-on-surface-variant">{{ project.description }}</p>
      </div>
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="tech-chip rounded-full px-2 py-1 font-label text-[10px] text-on-primary-fixed-variant"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </article>
</template>
