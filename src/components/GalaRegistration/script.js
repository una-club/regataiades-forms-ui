export default {
  name: 'GalaRegistration',

  data () {
    return {
      formContent: {
        menu: [{}, {}],
      },
      options: {
        "starter" : [
          {value: 'foiegras'},
          {value: 'eggplant'}
        ],
        "entree" : [
          {value: 'porc'},
          {value: 'crumble'}
        ],
        "dessert" : [
          {value: 'chocolate'},
          {value: 'none'}
        ]
      }
    }
  },
  mounted () {

  },
  methods: {
    getGuestNumber () {
      return (this.$data.formContent.withGuest) ? 2 : 1
    },
    isFormValid () {
      return false
    }
  }
}
