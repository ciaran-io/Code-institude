<script lang="ts" setup>
  defineProps({
    // eslint-disable-next-line vue/require-default-prop
    pageLink: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <nuxt-link
    class="button button-primary button-padding-sm button-rounded-base block"
    :to="`${pageLink}`"
    >{{ text }}
    <slot name="icon" />
  </nuxt-link>
</template>
