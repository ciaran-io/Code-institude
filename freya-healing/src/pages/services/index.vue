<script setup>
  definePageMeta({
    layout: 'services',
  })
</script>

<template>
  <div class="container max-w-5xl mx-auto mt-32 space-y-12 text-center">
    <img
      class="object-cover w-full h-64 rounded-md"
      src="/images/massage.jpg"
      alt=""
      width="300"
      height="300"
    />
    <h1 class=" text-4xl">
      We provide a wide range of naturopathic services
    </h1>
    <nuxt-link
      to="/services/aromatherapy-full-body-massage"
      class="after:content-['_↗'] block text-xl "
      >View all available services</nuxt-link
    >
  </div>
</template>
