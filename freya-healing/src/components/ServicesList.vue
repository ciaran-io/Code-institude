<script setup>
  const emit = defineEmits(['update:selected'])
  const props = defineProps({
    services: {
      type: Object,
      required: true,
    },
    serviceNames: {
      type: Object,
      required: true,
    },
    serviceId: {
      type: Number,
      required: true,
    },
  })

  function emitUpdate(index) {
    emit('update:selected', index)
  }
</script>

<template>
  <div class="">
    <ServicesSelect
      class="md:hidden"
      :services="serviceNames"
      color="red"
      @update:selected-by-index="emitUpdate"
    />

    <ul class="gap-x-2 gap-y-4 md:flex flex-wrap justify-center hidden">
      <li
        v-for="(list, index) in services"
        :key="list.id"
        class="button button-padding-sm button-pill w-max bg-theme-base-200 text-sm font-medium text-gray-200 capitalize transition-colors"
        :class="{ '!bg-gray-300 !text-theme-gray-500': serviceId === index }"
        @click="emitUpdate(index)"
      >
        {{ list.name }}
      </li>
    </ul>
  </div>
</template>
