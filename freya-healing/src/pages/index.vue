<script setup>
  const store = useStore()
  const { services, servicePage, conditions, reviews } = store.value
</script>

<template>
  <div>
    <main class="mb-60 container mx-auto mt-64">
      <!-- conditions section -->
      <section>
        <h2
          class="bg-gradient-to-r from-slate-700 via-slate-600 bg-clip-text lg:text-6xl text-4xl font-medium text-transparent"
        >
          The healing effect of Reiki on your mind & body
        </h2>

        <div
          class="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6 md:gap-14"
        >
          <information-card
            v-for="condition in conditions"
            :key="condition.title"
            :heading="condition.title"
            :text="condition.text"
            :icon="`${condition.icon}`"
            :img-alt="`${condition.altText}`"
          >
          </information-card>
        </div>
      </section>

      <!-- experience section -->
      <section>
        <h2 class="text-3xl">Experience & knowledge gained over 10 years</h2>
        <div class="lg:flex md:gap-x-8">
          <div>
            <img
              class="rounded-xl"
              src="/images/treatment.jpg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="h-fit lg:max-w-md bg-theme-base-100 shadow-primary p-4 mt-6 space-y-4 rounded-md">
            <p class=" first-letter:text-5xl text-lg">
              With over 10 years of experience and knowledge, in Aromatherapy,
              Reflexology & Reiki we can help you find the right treatment for
              your needs. We believe in treating the individuals body, mind &
              spirit.
            </p>
            <app-button-link text="About us" />
          </div>
        </div>
      </section>

      <!-- services section -->
      <section>
        <h2 class="text-3xl">Book an appointment</h2>
        <booking-card
          :services="services"
          :service-page="servicePage"
        ></booking-card>
      </section>

      <!-- reviews section -->
      <section class="reviews">
        <h2 class="text-3xl">What our clients say</h2>
        <div
          class="gap-x-6 rounded-3xl bg-theme-gray shadow-primary md:rounded-3xl md:px-6 grid grid-flow-col pt-8 pb-12 pl-6 overflow-x-scroll"
        >
          <lazy-information-card
            v-for="review in reviews"
            :key="review.title"
            class="min-w-max"
            :heading="review.title"
            :text="review.review"
            icon="material-symbols:rate-review"
            :is-review-name="true"
          >
            <template #reviewName>
              <div class="inline-block pr-2 text-lg font-medium capitalize">
                {{ review.name }}
              </div>
            </template>
          </lazy-information-card>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="postcss">
  main > section {
    /* main sections direct children  */
    @apply mt-48;

    /* main sections direct children div, h2 */
    > h2,
    > div {
      @apply relative;
    }

    /* main sections direct h2 child adjacent div */
    > h2 + div {
      @apply mt-8;
    }

    /* main; every second section   */
    &:nth-of-type(2n) {
      h2 {
        @apply pt-8;
      }

      &::before {
        @apply absolute  
        left-0
        z-0
        h-[30rem]
        w-full
        bg-gray-100/20 
        content-[''] 
        lg:w-[90%] 
        lg:rounded-tr-xl 
        lg:rounded-br-xl;
      }
    }
  }
</style>

<style lang="postcss">
  .reviews {
    h3 {
      @apply capitalize;
    }
    svg {
      @apply h-6 w-6;
    }
  }
</style>
