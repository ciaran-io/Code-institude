<script setup>
  defineEmits(['update:modelValue'])

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: true,
      default: 'text',
    },
    pattern: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: false,
      default: null,
    },
  })

  const labelValue = computed(() => props.label.replace('_', ' '))
  const isFocused = ref(false)

  function checkFocus(event) {
    event.target.value ? (isFocused.value = true) : (isFocused.value = false)
  }
</script>

<template>
  <div class="relative">
    <label :for="label"> {{ labelValue }} </label>
    <input
      :id="label"
      :type="type"
      :pattern="pattern"
      :required="required"
      :value="modelValue"
      @focus="isFocused = true"
      @input="$emit('update:modelValue', $event.target.value)"
      @focusout="checkFocus"
    />
    <span
      aria-hidden="true"
      class="pointer-events-none absolute top-3 left-3 bg-theme-gray text-sm capitalize transition-[top]"
      :class="{ '-top-3 left-2 px-3 font-medium': isFocused }"
    >
      {{ labelValue }}
    </span>
  </div>
</template>

<style scoped>
  /* replace input autofill color with shadow */
  /* from https://stackoverflow.com/questions/2781549/removing-input-background-colour-for-chrome-autocomplete */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px hsl(47, 10%, 83%) inset !important;
    -webkit-box-shadow: 0 0 0 30px hsl(47, 10%, 83%) inset !important;
  }
</style>
