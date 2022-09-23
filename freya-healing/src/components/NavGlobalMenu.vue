<script setup>
  defineProps({
    showMenu: {
      type: Boolean,
      required: true,
      default: false,
    },
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
    id="nav-global-menu"
    class="top-12 bg-theme-base-200 md:right-10 md:grid-cols-2 md:gap-x-8 md:space-y-0 absolute z-10 grid invisible w-11/12 p-4 space-y-8 text-left transition-opacity duration-300 ease-in-out rounded-md opacity-0"
    :class="{
      '!visible  opacity-100 ': showMenu,
    }"
  >
    <div>
      <TheMenuHeading heading="Services" />
      <ul class="space-y-1 capitalize">
        <li
          v-for="(service, index) in services"
          :key="index"
        >
          <nuxt-link :to="`/services/${[...servicePage][index]}`">
            {{ service.name }}
          </nuxt-link>
          {{}}
        </li>
      </ul>
    </div>

    <div>
      <TheMenuHeading heading="Contact" />
      <nuxt-link to="/contact">Contact us</nuxt-link>
    </div>
  </div>
</template>
