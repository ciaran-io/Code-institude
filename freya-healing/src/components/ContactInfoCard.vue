<script setup>
  defineProps({
    contactInformation: {
      type: Object,
      required: true,
    },
  })

  const contactIcons = [
    'ic:baseline-local-phone',
    'material-symbols:mail',
    'ion:ios-location',
  ]
</script>

<template>
  <ContactContainer
    class="contact-card"
    heading="Contact information"
  >
    <div class="flex justify-center">
      <ul class="text-theme-gray-500 space-y-12">
        <template
          v-for="(information, value, index) in contactInformation"
          :key="information"
        >
          <li
            v-if="value !== 'opening hours'"
            class="flex w-[inherit] items-center gap-x-4"
          >
            <Icon
              aria-hidden="true"
              class="!block h-6 w-6"
              :name="contactIcons[index]"
            />
            <span>
              {{ information }}
            </span>
          </li>
        </template>
      </ul>
    </div>

    <div class="relative z-10 space-x-2 text-right">
      <TheSocialIconBlock />
    </div>
  </ContactContainer>
</template>

<style lang="postcss" scoped>
  .contact-card {
    @apply relative
    overflow-hidden;

    &::after {
      @apply absolute
      -right-3
      -bottom-1
      rounded-full
      bg-theme-base
      bg-no-repeat
      p-14
      content-[''];

      @screen sm {
        @apply p-16;
      }
    }
  }
</style>
