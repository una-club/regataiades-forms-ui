import { saveData } from '../../business/commons.js'

const price = 10.0

const service = 'registration/gala'

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
      },
      submitted: false
      
    }
  },
  mounted () {

  },
  methods: {
    getTotal () {
      let total = this.getGuestNumber() * price
      return total
    },
    getGuestNumber () {
      return (this.$data.formContent.withGuest) ? 2 : 1
    },
    isFormValid () {
      return this.$data.formContent.name && this.$data.formContent.mail && this.$data.formContent.phone && this.$data.formContent.team
    },
    submit () {
      let that = this
      if (this.isFormValid()) {
        saveData(service, this.$data.formContent).then((response) => { console.log(response); console.log(that.$data); that.$data.submitted = response.data; })
      }
    }
  }
}
