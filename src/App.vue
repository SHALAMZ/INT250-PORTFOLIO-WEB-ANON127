<script setup>
import { ref } from 'vue'
import BackgroundEffects from './components/BackgroundEffects.vue'
import DesktopHeader from './components/DesktopHeader.vue'
import HeroSection from './components/HeroSection.vue'
import MobileMenuButton from './components/MobileMenuButton.vue'
import MobileNav from './components/MobileNav.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const isMobileNavOpen = ref(false)
</script>

<template>
  <BackgroundEffects />
  <DesktopHeader />
  <MobileNav :is-open="isMobileNavOpen" @close="isMobileNavOpen = false" />
  <MobileMenuButton :is-open="isMobileNavOpen" @toggle="isMobileNavOpen = !isMobileNavOpen" />
  <HeroSection />
  <ProjectsSection />
  <SiteFooter />
</template>
