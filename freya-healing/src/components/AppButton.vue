<script setup>
  defineProps({
    text: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <button
    class="button button-primary button-padding-sm button-rounded-base block"
  >
    {{ text }}
    <slot name="icon" />
  </button>
</template>
