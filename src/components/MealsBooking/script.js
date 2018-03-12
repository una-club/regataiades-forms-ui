const price = 10.0

export default {
  name: 'MealsBooking',

  data () {
    return {
      formContent: {
        menu: [{}, {}],
      }
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
      return false
    }
  }
}
