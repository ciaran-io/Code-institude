<script setup>
  definePageMeta({
    layout: 'services',
  })

  const store = useStore()
  const { services, serviceNames } = store.value
  const serviceIndex = ref(0)

  function changeService(index) {
    serviceIndex.value = index
  }
</script>

<template>
  <div class="container max-w-5xl mx-auto mt-16 space-y-12">
    <div>
      <img
        class="h-96 w-full rounded-md"
        src="/images/aromatherapy.jpg"
        alt=""
      />
    </div>
    <main>
      <section class="space-y-20">
        <h1 class="text-theme-gray-100 text-4xl text-center">Our Services</h1>

        <ServicesList
          :services="services"
          :service-id="serviceIndex"
          :service-names="serviceNames"
          @update:selected="changeService"
        />

        <ServicesCardDetails
          :services="services"
          :service-id="serviceIndex"
        />
      </section>
    </main>
  </div>
</template>

<style lang="postcss" >
  select {
    @apply !bg-theme-base-200;
  }
</style>
