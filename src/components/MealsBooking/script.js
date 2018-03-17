import { saveData } from '../../business/commons.js'

const price = 10.0

const service = 'registration/meals'

export default {
  name: 'MealsBooking',

  data () {
    return {
      formContent: {
        menu: [{}, {}],
      },
      submitted: false
    }
  },
  mounted () {

  },
  methods: {

    getTotal () {
      const data = this.$data.formContent
      let total = 0
      let saturdayLunch = (data.saturdayLunch) ? data.saturdayLunch/1 : 0
      let saturdayDinner = (data.saturdayDinner) ? data.saturdayDinner/1 : 0
      let sundayLunch = (data.sundayLunch) ? data.sundayLunch/1 : 0
      debugger
      console.log(saturdayLunch)
      total = (saturdayLunch + saturdayDinner + sundayLunch) * price
      return total
    },
    isFormValid () {
      return this.$data.formContent.name && this.$data.formContent.mail && this.$data.formContent.phone && this.$data.formContent.team && (this.$data.formContent.saturdayLunch || this.$data.formContent.saturdayDinner || this.$data.formContent.sundayLunch)
    },
    submit () {
      let that = this
      if (this.isFormValid()) {
        saveData(service, this.$data.formContent).then((response) => { console.log(response); console.log(that.$data); that.$data.submitted = response.data; })
      }
    }
  }
}
