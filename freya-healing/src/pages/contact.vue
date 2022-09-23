<script setup>
  const store = useStore()
  const { contactInformation, serviceNames } = store.value
  const formData = {
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: '',
  }
  const showContactCard = ref(true)

  function sendForm(data) {
    console.log('form submit', data)
  }
</script>

<template>
  <div
    class="container relative mx-auto my-24 min-h-[1050px] max-w-5xl space-y-16"
  >
    <section class="information-card relative space-y-4 text-center">
      <h1 class="text-lg font-bold">Contact us</h1>
      <h2>
        Any questions? <br />
        Just write us a message
      </h2>
    </section>

    <section
      class="gap-x-32 text-theme-gray-600 relative flex justify-center font-medium"
    >
      <button
        :class="{ 'button-active': showContactCard }"
        @click="showContactCard = true"
      >
        Contact
      </button>

      <button
        :class="{ 'button-active': !showContactCard }"
        @click="showContactCard = !true"
      >
        Write to us
      </button>
    </section>

    <div class="relative">
      <!-- Contact information  -->
      <Transition>
        <ContactInfoCard
          v-show="showContactCard"
          :contact-information="contactInformation"
        />
      </Transition>

      <!-- Contact form  -->
      <Transition>
        <ContactForm
          v-show="!showContactCard"
          :form-data="formData"
          :service-names="serviceNames"
          @form-data="sendForm"
        />
      </Transition>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .button-active {
    @apply underline
    decoration-theme-gray-500
    underline-offset-4;
  }
  /* vue transition component */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.7s ease-in-out;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
