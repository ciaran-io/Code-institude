<script setup>
  defineProps({
    heading: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    // eslint-disable-next-line vue/require-default-prop
    icon: {
      type: String,
      required: false,
    },
    // eslint-disable-next-line vue/require-default-prop
    isReviewName: {
      type: Boolean,
      required: false,
    },
  })
</script>

<template>
  <div class="information-card">
    <div>
      <slot
        v-if="isReviewName"
        name="reviewName"
      >
        <div>client</div>
      </slot>

      <Icon
        class="text-slate-600 w-8 h-8"
        aria-hidden="true"
        :name="`${icon}`"
      />
    </div>

    <h3>{{ heading }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<style lang="postcss" scoped>
  h3,
  p {
    @apply mt-6 ml-2;
  }

  h2 {
    @apply text-lg font-medium;
  }

  p {
    @apply max-w-[30ch] whitespace-pre-line;
  }
</style>
