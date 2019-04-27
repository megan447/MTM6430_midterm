export default {
  name: 'formAddAddress',
  data () {
    return {
      showForm: false,
      place: null,
      formData: {
        street: null,
        city: null,
        province: null,
        postalCode: null,
        lat: null,
        Lng: null
      },
      rules: {
        street: [{required: true}],
        city: [{required: true}],
        province: [{required: true}],
        postalCode: [{required: true}],
        lat: [{required: true}],
        Lng: [{required: true}]
      },
      isFormValidated: false,
      addressInput: null
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('ADD_ADDRESS', this.formData).then(address => {
        if (address) {
          this.toggleForm(false)
        }
      })
    },
    toggleForm (showForm) {
      this.showForm = showForm
    },
    handleClose () {
      this.place = null
      this.formData.street = null
      this.formData.city = null
      this.formData.province = null
      this.formData.postalCode = null
      this.formData.lat = null
      this.formData.lng = null
      this.addressInput = null
    },
    setPlace (place) {
      const { address_components, geometry } = place
      const address = this.buildAddressData(address_components, geometry)
      if (address) {
        this.place = address
        this.formData.street = `${address.streetNumber} ${address.streetName}`
        this.formData.city = address.city
        this.formData.province = address.province
        this.formData.postalCode = address.postalCode
        this.formData.lat = address.lat
        this.formData.lng = address.lng
      }
    },
    buildAddressData (components, geometry) {
      const address = {}
      address.lat = geometry.location.lat().toString()
      address.lng = geometry.location.lng().toString()

      components.forEach(component => {
        if (component.types[0] === 'locality') {
          address.city = component.short_name
        }
        if (component.types[0] === 'street_number') {
          address.streetNumber = component.short_name
        }
        if (component.types[0] === 'route') {
          address.streetName = component.short_name
        }
        if (component.types[0] === 'administrative_area_level_1') {
          address.province = component.short_name
        }
        if (component.types[0] === 'postal_code') {
          address.postalCode = component.short_name
        }
      })
      return address
    }
  }
}
