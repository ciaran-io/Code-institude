<script setup>
  const store = useStore()
  const { contactInformation } = store.value
  
  const navLinks = new Set([
    'our services',
    'book appointment',
    'aromatherapy',
    'the team',
    'privacy policy',
  ])

  const navLinkSlug = computed(
    () => new Set([...navLinks].map((link) => link.replace(/\s/g, '-')))
  )

  function openMenu(menu) {
    const menuChild = menu.children[1]
    const iconChild = menuChild.previousSibling.children[0].children[1]
    const spacing = 20

    menuChild.style.height
      ? ((menuChild.style.height = null),
        iconChild.classList.remove('rotate-180'))
      : ((menuChild.style.height = menuChild.scrollHeight + spacing + 'px'),
        iconChild.classList.add('rotate-180'))
  }

  function showMenu(menuElement) {
    menuElement.forEach((menuEl) => {
      menuEl.addEventListener('click', () => openMenu(menuEl))
    })
  }

  onMounted(() => {
    const accordions = document.querySelectorAll('footer #container-menu > div')
    showMenu(accordions)
  })
</script>

<template>
  <footer
    class="rounded-tr-md rounded-tl-md bg-theme-base-100 space-y-14 container px-0 pt-8 pb-4 mx-auto mt-auto"
  >
    <section
      id="container-menu"
      class="gap-y-3 md:grid-cols-2 md:pl-8 grid px-4"
    >
      <!-- useful links -->
      <div aria-label="show collapsed content on mobile">
        <div>
          <TheMenuHeading heading="useful links">
            <template #menuIcon>
              <Icon
                class="float-right h-5 w-5 text-theme-gray-500 transition-transform duration-150 md:!hidden"
                aria-hidden="true"
                name="gridicons:chevron-down"
              />
            </template>
          </TheMenuHeading>
        </div>

        <nav
          aria-label="list of useful links"
          class="hide-on-mobile"
        >
          <ul>
            <li
              v-for="(link, key) in navLinks"
              :key="link"
              class="capitalize"
            >
              <nuxt-link :to="`services/${[...navLinkSlug][key]}`">
                {{ link }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Contact information -->
      <ContactInfoFooter :contact-information="contactInformation" />

      <!-- About us -->
      <div
        aria-label="show collapsed content on mobile"
        class="md:mt-8"
      >
        <div>
          <TheMenuHeading heading="about us">
            <template #menuIcon>
              <Icon
                class="float-right h-5 w-5 text-theme-gray-500 transition-transform duration-150 md:!hidden"
                aria-hidden="true"
                name="gridicons:chevron-down"
              />
            </template>
          </TheMenuHeading>
        </div>

        <div class="hide-on-mobile">
          <p class="md:max-w-[40ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            pariatur consequuntur iure ea, optio illo nemo? Excepturi sequi
            magnam reiciendis, mollitia quos in, sed accusamus ea beatae animi
            cumque optio.
          </p>
          <AppButtonLink
            class="w-max mt-4"
            page-link="about"
            text="Find out more"
          />
        </div>
      </div>
    </section>

    <!-- copyright text -->
    <div
      class="text-theme-gray-500 text-center"
      aria-label="copyright text"
    >
      ©2022 Fréyja Healing All rights reserved
    </div>
  </footer>
</template>

<style lang="postcss">
  footer {
    .hide-on-mobile {
      @apply h-0 overflow-hidden transition-[height] duration-150 ease-in;

      @screen md {
        @apply h-full;
      }
    }

    #container-menu > div {
      @apply border-b ;

      @screen md {
        @apply border-0 pb-0;
      }
    }
  }
</style>
