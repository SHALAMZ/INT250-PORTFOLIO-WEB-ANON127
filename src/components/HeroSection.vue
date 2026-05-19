<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { profileImage, roles, techChips } from '../data/portfolio'

const roleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
let timeoutId

const typedRole = computed(() => roles[roleIndex.value].slice(0, charIndex.value))

function typeNext() {
  const currentRole = roles[roleIndex.value]

  if (isDeleting.value) {
    charIndex.value -= 1
  } else {
    charIndex.value += 1
  }

  let speed = isDeleting.value ? 50 : 100

  if (!isDeleting.value && charIndex.value === currentRole.length) {
    speed = 2000
    isDeleting.value = true
  } else if (isDeleting.value && charIndex.value === 0) {
    isDeleting.value = false
    roleIndex.value = (roleIndex.value + 1) % roles.length
    speed = 500
  }

  timeoutId = window.setTimeout(typeNext, speed)
}

onMounted(() => {
  timeoutId = window.setTimeout(typeNext, 1000)
})

onUnmounted(() => {
  window.clearTimeout(timeoutId)
})
</script>

<template>
  <main id="home"
    class="relative flex min-h-screen flex-col items-center justify-center px-margin-mobile pt-24 md:px-margin-desktop md:pt-28 lg:pt-32">
    <div
      class="relative z-10 mx-auto flex w-full max-w-container-max flex-col items-center justify-between gap-12 lg:flex-row lg:gap-24">
      <section class="order-2 flex w-full flex-1 flex-col items-start gap-6 text-left lg:order-1">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 backdrop-blur-md">
          <span class="h-2 w-2 animate-pulse rounded-full bg-primary-fixed-dim"></span>
          <span class="font-label text-label-sm uppercase tracking-widest text-primary">
            System Online
          </span>
        </div>

        <h1
          class="max-w-2xl font-display text-headline-lg-mobile font-extrabold leading-tight text-on-background md:text-display-lg">
          FullStack <br />
          <span class="bg-gradient-to-r from-primary-fixed-dim to-secondary bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        <div class="flex h-8 items-center md:h-10">
          <p
            class="typing-cursor font-display text-[20px] font-bold text-on-surface-variant md:text-headline-lg-mobile">
            {{ typedRole }}
          </p>
        </div>

        <p class="mt-4 max-w-xl text-body-md text-tertiary">
          Arnon Yanying — SIT Student from the School of Information Technology,
          King mongkut's university of technology thonburi. Designing immersive digital experiences
          through modern frontend development, motion interaction, and minimalist aesthetics.
        </p>

        <div class="mt-8 flex w-full flex-wrap gap-4 sm:w-auto">
          <a class="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-primary-fixed-dim to-primary px-8 py-4 text-center font-label text-label-sm text-white shadow-[0_0_20px_rgba(0,218,243,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,218,243,0.5)] sm:w-auto"
            href="#projects">
            <span class="relative z-10 flex items-center justify-center gap-2">
              View Projects
              <span class="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </span>
          </a>
          <a class="flex w-full items-center justify-center rounded-lg border border-primary-fixed-dim bg-white/10 px-8 py-4 text-center font-label text-label-sm text-primary-fixed-dim backdrop-blur-md transition-all duration-300 hover:bg-primary-fixed-dim/10 hover:shadow-[0_0_15px_rgba(0,218,243,0.2)] sm:w-auto"
            href="#contact">
            Contact Me
          </a>
        </div>

        <div class="mt-8 flex flex-wrap gap-2">
          <span v-for="chip in techChips" :key="chip"
            class="rounded-md border border-white/20 bg-on-secondary-fixed/10 px-3 py-1 font-label text-label-sm text-on-surface-variant backdrop-blur-sm">
            {{ chip }}
          </span>
        </div>
      </section>

      <section class="order-1 flex w-full flex-1 items-center justify-center lg:order-2 lg:-translate-y-12 xl:-translate-y-16" aria-label="Profile visual">
        <div class="relative h-64 w-64 md:h-80 md:w-80 lg:h-[400px] lg:w-[400px]">
          <div
            class="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border border-primary-fixed-dim/30 shadow-[0_0_50px_rgba(0,218,243,0.2)]">
          </div>
          <div
            class="absolute inset-4 animate-[spin_15s_linear_infinite_reverse] rounded-full border border-dashed border-secondary/20">
          </div>

          <div
            class="absolute inset-8 overflow-hidden rounded-full border border-white/40 bg-surface-container-highest/50 p-2 shadow-inner backdrop-blur-xl">
            <div class="relative h-full w-full overflow-hidden rounded-full">
              <img
                class="h-full w-full object-cover  mix-blend-normal transition-all duration-700 hover:mix-blend-luminosity"
                :src="profileImage" alt="Hero profile" />
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay">
              </div>
            </div>
          </div>

          <div class="floating-card absolute -top-4 right-10 animate-[float_4s_ease-in-out_infinite]">
            <span class="font-label text-label-sm text-primary">UI/UX</span>
          </div>
          <div class="floating-card absolute bottom-10 -left-6 animate-[float_5s_ease-in-out_infinite_reverse]">
            <span class="font-label text-label-sm text-secondary">&lt;&gt; Code</span>
          </div>
        </div>
      </section>
    </div>

    <div class="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2 opacity-70">
      <span class="font-label text-[10px] uppercase tracking-widest text-tertiary">Scroll</span>
      <span class="material-symbols-outlined text-tertiary">arrow_downward</span>
    </div>
  </main>
</template>
