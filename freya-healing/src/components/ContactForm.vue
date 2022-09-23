<script setup>
  const emit = defineEmits(['formData'])
  const props = defineProps({
    formData: {
      type: Object,
      required: true,
    },
    serviceNames: {
      type: Object,
      required: true,
    },
  })

  const formDataCopy = ref({ ...props.formData })
  const formSubmitting = ref(false)

  async function emitForm() {
    await new Promise((resolve) => {
      emit('formData', { formDetails: formDataCopy.value })
      formSubmitting.value = true
      formFeedback()
      resolve()
    })
    resetFrom()
  }

  function formFeedback() {
    setTimeout(() => {
      formSubmitting.value = false
    }, 2000)
  }

  function resetFrom() {
    for (const data in formDataCopy) formDataCopy[data] = ''
  }

  function updateSelectedService(selected) {
    formDataCopy.service = selected
  }
</script>

<template>
  <ContactContainer heading="Write to us">
    <form
      class="max-w-3xl mx-auto space-y-8"
      @submit.prevent="emitForm()"
    >
      <!-- user details  -->
      <TheFormInput
        v-model="formDataCopy.firstName"
        label="first_name"
        type="text"
        pattern="[a-zA-Z]{2,10}"
        class="inline-block w-1/2 pr-6"
        :required="true"
      />

      <TheFormInput
        v-model="formDataCopy.lastName"
        label="last_name"
        type="text"
        pattern="[a-zA-Z]{2,20}"
        class="inline-block w-1/2"
        :required="true"
      />

      <!-- pattern from
        https://www.w3schools.com/tags/att_input_pattern.asp -->
      <TheFormInput
        v-model="formDataCopy.email"
        label="email"
        type="email"
        pattern="^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$"
        :required="true"
      />

      <!-- Services -->

      <ServicesSelect
        :services="serviceNames"
        color="bg-red-400"
        @update:selected="updateSelectedService"
      />

      <!-- message -->
      <div>
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="formDataCopy.message"
          type="text"
          required
          placeholder="Your message.."
          rows="10"
        />
      </div>

      <AppButton
        type="submit"
        :text="!formSubmitting ? 'submit' : 'submitting ...'"
        class="text-xl text-white"
      >
        <template #icon>
          <Icon
            v-show="formSubmitting"
            class="animate-spin w-5 h-5 ml-2"
            name="icon-park-outline:loading-four"
          />
        </template>
      </AppButton>
    </form>
  </ContactContainer>
</template>
