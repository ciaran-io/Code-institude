<script setup>
  defineProps({
    services: {
      type: Object,
      required: true,
    },
    servicePage: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <div
    class="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-8 lg:grid-cols-2"
  >
    <div
      v-for="(service, index) in services"
      :key="index"
      class="space-y-6"
    >
      <div
        class="relative h-64 rounded-2xl bg-[url('/images/services.jpg')] bg-cover bg-no-repeat"
      >
        <div class="backdrop-blur-sm grid w-full h-full">
          <p
            class="max-w-[20ch] place-self-center text-center text-xl font-medium capitalize text-gray-700"
          >
            {{ service.name }}
          </p>
        </div>
      </div>
      <nuxt-link
        :aria-label="`book appointment for ${service.name}`"
        class="button button-primary button-padding-sm button-rounded-base block"
        :to="`/services/${[...servicePage][index]}`"
      >
        Book an appointment
        <Icon
          aria-hidden="true"
          class="float-right w-6 h-6"
          name="ic:outline-arrow-circle-right"
        />
      </nuxt-link>
    </div>
  </div>
</template>

