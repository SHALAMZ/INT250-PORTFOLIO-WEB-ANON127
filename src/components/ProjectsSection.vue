<script setup>
import { computed, ref } from 'vue'
import { projectFilters, projects } from '../data/portfolio'
import ProjectCard from './ProjectCard.vue'
import ProjectFilterTabs from './ProjectFilterTabs.vue'

const activeFilter = ref(projectFilters[0])

const visibleProjects = computed(() => {
  if (activeFilter.value === 'ALL SYSTEMS') {
    return projects
  }

  return projects.filter((project) => project.category === activeFilter.value)
})
</script>

<template>
  <section
    id="projects"
    class="mx-auto w-full max-w-container-max px-margin-mobile pt-32 pb-8 md:px-margin-desktop md:pt-36"
  >
    <div class="relative mb-16">
      <div
        class="absolute -left-4 top-0 hidden h-full w-1 rounded-full bg-primary-fixed-dim shadow-[0_0_10px_rgba(0,218,243,0.8)] md:block"
      ></div>
      <h2 class="mb-4 font-display text-headline-lg-mobile font-extrabold text-on-background md:text-display-lg">
        MY <span class="text-primary-fixed-dim">Projects</span>
      </h2>
      <p class="max-w-2xl text-body-md text-on-surface-variant">
        Exploring the intersection of elegant design and robust engineering. A curated selection
        of technical solutions spanning web architecture, AI integrations, and intuitive user
        experiences.
      </p>
    </div>

    <ProjectFilterTabs
      v-model:active-filter="activeFilter"
      :filters="projectFilters"
    />

    <div class="grid auto-rows-[300px] grid-cols-1 gap-gutter md:grid-cols-12">
      <ProjectCard v-for="project in visibleProjects" :key="project.id" :project="project" />
    </div>

    <!-- <div class="mt-16 flex justify-center">
      <button
        class="neon-glow flex items-center gap-2 rounded-full border border-primary-fixed-dim px-8 py-3 font-label text-label-sm text-primary-fixed-dim transition-all duration-300 hover:bg-primary-fixed-dim hover:text-on-primary"
        type="button"
      >
        LOAD ARCHIVE
        <span class="material-symbols-outlined text-sm">download</span>
      </button>
    </div> -->
  </section>
</template>
