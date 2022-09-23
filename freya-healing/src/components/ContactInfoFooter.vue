<script setup>
  defineProps({
    contactInformation: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <!-- contact information -->
  <div class="md:row-span-2 md:justify-self-center">
    <div aria-label="show collapsed content on mobile">
      <TheMenuHeading heading="contact us">
        <template #menuIcon>
          <Icon
            class="float-right h-5 w-5 text-theme-gray-500 transition-transform duration-150 md:!hidden"
            aria-hidden="true"
            name="gridicons:chevron-down"
          />
        </template>
      </TheMenuHeading>
    </div>

    <div class="hide-on-mobile">
      <h3>Get in touch by email or phone</h3>
      <template
        v-for="(information, value) in contactInformation"
        :key="information"
      >
        <div class="mt-3">
          <div v-if="value !== 'opening hours'">
            <h4>{{ value }}</h4>
            <p>{{ information }}</p>
          </div>
          <div v-else>
            <h4>{{ value }}</h4>
            <p>{{ information.day }} {{ information.hours }}</p>
          </div>
        </div>
      </template>

      <div class="mt-6 space-x-4">
        <TheSocialIconBlock />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  h4 {
    @apply font-medium capitalize;
  }
</style>
