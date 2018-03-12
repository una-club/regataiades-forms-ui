export default {
  name: 'VolunteeringRegistration',

  data () {
    return {
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
      return false
    }
  }
}
