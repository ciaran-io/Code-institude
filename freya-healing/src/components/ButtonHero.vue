<script lang="ts" setup>
  defineProps({
    pageLink: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <nuxt-link
    class="button button-primary button-rounded-hero button-padding-hero"
    :to="`${pageLink}`"
    >{{ text }}
  </nuxt-link>
</template>
