<script setup>
  defineProps({
    heading: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <section
    class="bg-theme-gray shadow-primary absolute top-0 w-full px-6 py-12 rounded-md"
  >
    <h3 class="mb-12 text-lg font-medium text-center">
      {{ heading }}
    </h3>
    <slot> </slot>
  </section>
</template>
