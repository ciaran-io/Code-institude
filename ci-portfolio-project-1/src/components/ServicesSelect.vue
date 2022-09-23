<script setup>
  defineEmits(['update:selected', 'update:selectedByIndex'])
  const props = defineProps({
    services: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  })

  const selected = ref('')
</script>

<template>
  <div>
    <label for="services">services</label>
    <select
      id="services"
      v-model="selected"
      class="capitalize"
      name="services"
      @change="
        $emit('update:selected', selected),
          $emit('update:selectedByIndex', $event.target.selectedIndex)
      "
    >
      <option
        disabled
        value=""
      >
        Choose a service
      </option>
      <option
        v-for="(options, index) in services"
        :key="index"
        :value="options"
      >
        {{ options }}
      </option>
    </select>
  </div>
</template>

<style scoped>
  select {
    background-color: v-bind('props.color');
  }
</style>
