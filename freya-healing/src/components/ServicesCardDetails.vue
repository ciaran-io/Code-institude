<script setup>
  defineProps({
    services: {
      type: Object,
      required: true,
    },
    serviceId: {
      type: Number,
      required: true,
    },
  })
</script>

<template>
  <div
    class="md: gap-x-16 bg-theme-base-200 shadow-primary md:grid md:grid-cols-2 md:space-y-0 p-8 space-y-8 rounded-md"
  >
    <div class="md:space-y-16 space-y-8">
      <div>
        <h3>Details</h3>
        <ul class="space-y-1">
          <li class="max-w-[30ch] capitalize">
            Treatment: {{ services[serviceId].name }}
          </li>
          <li>
            Duration:
            {{
              services[serviceId].duration > 1
                ? services[serviceId].duration + ' hours'
                : services[serviceId].duration + ' hour'
            }}
          </li>
          <li>Price: €{{ services[serviceId].price }}</li>
        </ul>
      </div>

      <div>
        <h3>Benefits</h3>
        <ul>
          <li
            v-for="(benefit, index) in services[serviceId].benefits"
            :key="index"
            class="capitalize list-disc list-inside"
          >
            {{ benefit }}
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h3>Information</h3>
      <p class="max-w-[40ch]">{{ services[serviceId].about }}</p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  h3 {
    @apply mb-4 
    border-b
    text-xl
    text-theme-gray-100;

    & + * {
      @apply pl-2;
    }
  }
  li {
    @apply text-theme-gray-500;
  }
</style>
