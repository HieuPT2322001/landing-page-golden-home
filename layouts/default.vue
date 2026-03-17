<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
    <ScrollTop />
  </div>
</template>

<script setup lang="ts">
// Layout mặc định cho trang
</script>
