import data from '~/assets/data/store.json'

const { conditions, reviews, treatments: services, contactInformation } = data
const serviceNames = new Set(services.map((s) => s.name))
const servicePage = computed(
  () => new Set([...serviceNames].map((name) => name.replace(/\s/g, '-')))
)

export const useStore = () =>
  useState('store', () => {
    return {
      services,
      serviceNames,
      servicePage,
      conditions,
      reviews,
      contactInformation,
    }
  })
