import { saveData } from '../../business/commons.js'

const service = 'registration/volunteers'

export default {
  name: 'VolunteeringRegistration',

  data () {
    return {
      submitted: false,
      formContent: {
        licences: [],
        volunteering: [],
        availabilities: []
      },

      options: {
        "volunteering" : [
          {value: 'hosting'},
          {value: 'food'},
          {value: 'driver'},
          {value: 'party'},
          {value: 'onSite'},
          {value: 'communityManager'},
          {value: 'waterInstallation'},
          {value: 'onWaterSecurity'},
          {value: 'launchDriver'}
        ],
        "licences": [
          {text: this.$t('message.volunteeringRegistration.forms.licences.driver'), value: 'driver'},
          {text: this.$t('message.volunteeringRegistration.forms.licences.boat'), value: 'boat'}
        ],
        "availabilities": [
          {text: this.$t('message.volunteeringRegistration.forms.availabilities.before'), value: 'before'},
          {text: this.$t('message.volunteeringRegistration.forms.availabilities.fridayNight'), value: 'fridayNight'},
          {text: this.$t('message.volunteeringRegistration.forms.availabilities.saturdayMorning'), value: 'saturdayMorning'},
          {text: this.$t('message.volunteeringRegistration.forms.availabilities.saturdayAfternoon'), value: 'saturdayAfternoon'},
          {text: this.$t('message.volunteeringRegistration.forms.availabilities.satudrayNight'), value: 'satudrayNight'},
          {text: this.$t('message.volunteeringRegistration.forms.availabilities.sundayMorning'), value: 'sundayMorning'},
          {text: this.$t('message.volunteeringRegistration.forms.availabilities.sundayAfternoon'), value: 'sundayAfternoon'},
          {text: this.$t('message.volunteeringRegistration.forms.availabilities.after'), value: 'after'}
        ]
      }
    }
  },
  mounted () {

  },
  methods: {
    isFormValid () {
      return this.$data.formContent.mail && this.$data.formContent.name && this.$data.formContent.phone;
    },
    submit () {
      let that = this
      if (this.isFormValid()) {
        saveData(service, this.$data.formContent).then((response) => { console.log(response); console.log(that.$data); that.$data.submitted = response.data; })
      }
    }
  }
}
