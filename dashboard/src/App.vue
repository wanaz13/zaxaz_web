<script setup lang="ts">
import navbarVue from './components/navbar.vue'
import footerVue from './components/footer.vue'
import Toaster from '@/components/ui/toast/Toaster.vue'
import Testimonal from './views/Testimonial.vue'

</script>

<template>
  <div class="bg-white">
    <header class="sticky inset-x-0 top-0 z-50">
      <navbarVue />
    </header>
    <router-view />
    <!--<Testimonal />-->
    <Toaster />
    <footer>
      <footerVue />
    </footer>

  </div>



</template>
