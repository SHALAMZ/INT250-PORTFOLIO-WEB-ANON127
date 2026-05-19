<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import BackgroundEffects from './components/BackgroundEffects.vue'
import ContactSection from './components/ContactSection.vue'
import DesktopHeader from './components/DesktopHeader.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import GallerySection from './components/GallerySection.vue'
import HeroSection from './components/HeroSection.vue'
import MobileMenuButton from './components/MobileMenuButton.vue'
import MobileNav from './components/MobileNav.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const isMobileNavOpen = ref(false)
const activeSection = ref('home')
let observer
const sectionIds = ['home', 'projects', 'experience', 'gallery', 'contact']

function setActiveFromHash() {
  const hashId = window.location.hash.replace('#', '')
  if (sectionIds.includes(hashId)) {
    activeSection.value = hashId
  }
}

onMounted(() => {
  setActiveFromHash()
  window.addEventListener('hashchange', setActiveFromHash)

  observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visibleEntry?.target?.id) {
        activeSection.value = visibleEntry.target.id
      }
    },
    {
      rootMargin: '-30% 0px -55% 0px',
      threshold: [0.05, 0.2, 0.45],
    },
  )

  sectionIds.forEach((id) => {
    const section = document.getElementById(id)
    if (section) {
      observer.observe(section)
    }
  })
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('hashchange', setActiveFromHash)
})
</script>

<template>
  <BackgroundEffects />
  <DesktopHeader :active-section="activeSection" />
  <MobileNav
    :active-section="activeSection"
    :is-open="isMobileNavOpen"
    @close="isMobileNavOpen = false"
  />
  <MobileMenuButton :is-open="isMobileNavOpen" @toggle="isMobileNavOpen = !isMobileNavOpen" />
  <HeroSection />
  <ProjectsSection />
  <ExperienceSection />
  <GallerySection />
  <ContactSection />
  <SiteFooter />
</template>
