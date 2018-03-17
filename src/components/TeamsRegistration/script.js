import { saveData } from '../../business/commons.js'

const price = 15.0

const service = 'registration/teams'

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
      },
      submitted: false
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
      return this.$data.formContent.club.name && this.$data.formContent.club.address && this.$data.formContent.club.link && this.$data.formContent.contact.name && this.$data.formContent.contact.mail && this.$data.formContent.contact.phone && (this.$data.formContent.boats.uniEight || this.$data.formContent.boats.uniQuad || this.$data.formContent.boats.masterFour || this.$data.formContent.boats.masterQuad);
    },
    submit () {
      this.$forceUpdate()
      let that = this
      if (this.isFormValid()) {
        saveData(service, this.$data.formContent).then((response) => { console.log(response); console.log(that.$data); that.$data.submitted = response.data; })
      }
    }
  }
}
