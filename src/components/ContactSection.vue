<script setup>
import { contactIcons } from '../data/portfolio'
</script>

<template>
  <section id="contact" class="relative mx-auto w-full max-w-4xl px-margin-mobile pt-32 md:px-0">
    <div class="pointer-events-none absolute -inset-4 z-0 rounded-[2rem] bg-gradient-to-r from-primary-fixed-dim/20 to-secondary-container/20 blur-2xl"></div>
    <div
      class="relative z-10 flex flex-col gap-12 rounded-3xl border border-white/60 bg-white/60 p-8 shadow-2xl shadow-cyan-900/10 backdrop-blur-2xl md:flex-row md:p-16"
    >
      <div class="flex w-full flex-col justify-between md:w-5/12">
        <div>
          <h2 class="mb-4 font-display text-headline-lg-mobile font-extrabold tracking-tight text-on-background md:text-4xl">
            Initiate Sequence.
          </h2>
          <p class="mb-8 text-on-surface-variant">
            Open for freelance opportunities, hackathon team-ups, or discussions about the future
            of the web.
          </p>
        </div>

        <div class="flex gap-4">
          <a
            v-for="icon in contactIcons"
            :key="icon"
            class="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 text-primary-fixed-dim transition-all duration-300 hover:border-primary-fixed-dim hover:bg-primary-fixed-dim/10 hover:drop-shadow-[0_0_12px_#00daf3]"
            href="#"
          >
            <span class="material-symbols-outlined">{{ icon }}</span>
          </a>
        </div>
      </div>

      <form class="flex w-full flex-col gap-8 md:w-7/12">
        <div class="group relative">
          <input
            id="name"
            class="peer w-full border-0 border-b border-outline-variant bg-transparent px-0 py-3 text-on-background placeholder-transparent transition-all focus:border-primary-fixed-dim focus:bg-primary-fixed-dim/5 focus:ring-0"
            placeholder="Name"
            required
            type="text"
          />
          <label
            class="absolute left-0 top-3 font-label text-sm tracking-widest text-on-surface-variant transition-all peer-valid:-top-4 peer-valid:text-xs peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary-fixed-dim"
            for="name"
          >
            IDENTIFIER
          </label>
        </div>

        <div class="group relative">
          <input
            id="email"
            class="peer w-full border-0 border-b border-outline-variant bg-transparent px-0 py-3 text-on-background placeholder-transparent transition-all focus:border-primary-fixed-dim focus:bg-primary-fixed-dim/5 focus:ring-0"
            placeholder="Email"
            required
            type="email"
          />
          <label
            class="absolute left-0 top-3 font-label text-sm tracking-widest text-on-surface-variant transition-all peer-valid:-top-4 peer-valid:text-xs peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary-fixed-dim"
            for="email"
          >
            COMM_LINK (EMAIL)
          </label>
        </div>

        <div class="group relative">
          <textarea
            id="message"
            class="peer w-full resize-none border-0 border-b border-outline-variant bg-transparent px-0 py-3 text-on-background placeholder-transparent transition-all focus:border-primary-fixed-dim focus:bg-primary-fixed-dim/5 focus:ring-0"
            placeholder="Message"
            required
            rows="3"
          ></textarea>
          <label
            class="absolute left-0 top-3 font-label text-sm tracking-widest text-on-surface-variant transition-all peer-valid:-top-4 peer-valid:text-xs peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary-fixed-dim"
            for="message"
          >
            PAYLOAD
          </label>
        </div>

        <button
          class="mt-4 flex items-center gap-2 self-end rounded-lg bg-gradient-to-r from-primary to-secondary-container px-8 py-4 font-label text-label-sm uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(119,146,255,0.4)] active:scale-95"
          type="button"
        >
          Transmit Data
          <span class="material-symbols-outlined text-sm">send</span>
        </button>
      </form>
    </div>
  </section>
</template>
