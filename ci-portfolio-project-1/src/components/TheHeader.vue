<script setup>
  const store = useStore()
  const { servicePage, services } = store.value
  const showMenu = ref(false)
  const route = useRoute()
  const isHomePage = ref(true)
  // close menu on route change
  watch(
    () => route.path,
    () => {
      showMenu.value = false
      modifyHeading()
    }
  )

  onMounted(() => modifyHeading())

  function modifyHeading() {
    route.path !== '/' ? (isHomePage.value = false) : (isHomePage.value = true)
  }
</script>

<template>
  <header>
    <nav
      role="navigation"
      class="container relative mx-auto mt-8"
      :class="{ 'flex justify-between': !isHomePage, 'text-right': isHomePage }"
    >
      <NuxtLink v-if="!isHomePage" to="/">
        <h1 class="text-2xl">
          Fréyja healing
          <Icon
            aria-hidden="true"
            class="w-6 h-6"
            name="ic:outline-spa"
          />
        </h1>
      </NuxtLink>

      <button
        role="menu button"
        aria-label="open navigation menu"
        @click="showMenu = !showMenu"
      >
        <svg
          aria-hidden="true"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="menu-icon"
          :class="{ 'menu-icon-animate': showMenu }"
        >
          <g
            id="nav-button"
            stroke="#7D7777"
            stroke-width="3.5"
            stroke-linecap="round"
          >
            <path
              id="line1"
              d="M2 2H30.8441"
            />
            <path
              id="line2"
              d="M8.15594 17H37"
            />
            <path
              id="line3"
              d="M2 32H30.8441"
            />
          </g>
        </svg>
      </button>

      <NavGlobalMenu
        :show-menu="showMenu"
        :services="services"
        :service-page="servicePage"
      />
    </nav>

    <section
      v-if="isHomePage"
      class="px-gutter mt-24"
    >
      <div class="container-heading">
        <h1 class="text-7xl">
          Fréyja healing
          <Icon
            aria-label=" Fréyja healing logo icon"
            class="w-8 h-8"
            name="ic:outline-spa"
          />
        </h1>
        <h2 class="text-3xl">
          The essence of health and vitality in one place
        </h2>
      </div>

      <div class="mt-12 text-center">
        <ButtonHero
          text="Book appointment"
          page-link="/booking"
        />
        <span class="hero-span"></span>
        <ButtonHero
          text="Our services"
          page-link="/services"
        />
      </div>
    </section>
  </header>
</template>

<style lang="postcss" scoped>
  .container-heading {
    @apply relative
    mx-auto
    block
    max-w-max
    space-y-4;

    @screen md {
      @apply pl-2;

      &::before {
        @apply absolute 
        left-0
        block
        h-full
        w-[0.5px]
        bg-theme-gray
        content-[''];
      }
    }
  }

  .hero-span {
    @apply relative mx-4;

    &::before {
      @apply absolute
      -top-[5px]
       left-0
        block
        h-[33px]
        w-[1px]
        rotate-45
        bg-theme-gray-100
        content-[''];
    }
  }

  .menu-icon {
    & #line1,
    #line3 {
      transition: all ease-in-out 0.2s;
    }

    &-animate {
      & #line1,
      #line3 {
        transform-origin: left center;
      }

      & #line1 {
        translate: -10% -4%;
        @apply rotate-45;
      }

      & #line2 {
        @apply hidden;
      }
      & #line3 {
        @apply -rotate-45;
      }
    }
  }
</style>
