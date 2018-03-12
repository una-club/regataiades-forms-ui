const price = 10.0

const crewsMapping = {
  'uniEight': 9,
  'uniQuad': 4,
  'masterQuad': 4,
  'masterFour': 5,

}

export default {
  name: 'TeamsRegistration',

  data () {
    return {
      formContent: {
        club: {},
        contact: {},
        boats: {},
        composition: {}
      }
    }
  },
  mounted () {

  },
  methods: {
    updateCrews (category) {
      const composition = this.$data.formContent.composition
      const boatData = this.$data.formContent.boats
      if (!this.$data.formContent.composition[category]) {
        this.$data.formContent.composition[category] = []
      }
      // for (var category in boatData) {
      if(composition[category].length < boatData[category]) {
        for(let i = composition[category].length; i < boatData[category]; i ++){
          let crew = {size: crewsMapping[category], type: category, id: i, athletes: []}
          for (let j = 0; j < crewsMapping[category]; j++){
            crew.athletes.push({})
          }
          composition[category].push(crew)
        }
      } else if(composition[category].length > boatData[category]) {
        for(let i = composition[category].length; i > boatData[category]; i --){
          composition[category].pop()
        }
      }
      this.$forceUpdate()
    },
    areCrewsSpecified () {
      let crews = this.getCrews()
      return crews && crews.length > 0
    },
    getCrews() {
      let crews = []
      const composition = this.$data.formContent.composition
      for (var category in crewsMapping) {
        if (crewsMapping.hasOwnProperty(category) && composition[category] && composition[category].length > 0) {
          crews = crews.concat(composition[category])
        }
      }
      return crews
    },
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
