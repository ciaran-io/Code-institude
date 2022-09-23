<script setup>
  defineProps({
    heading: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <div>
    <h2 class="menu-heading">{{ heading }}</h2>
    <slot name='menuIcon'/>
  </div>
</template>
