export default {
  data () {
    return {
      'msg': 'Yo Man',
      'state': true,
      'privateStuff': 'This is private stuff'
    }
  },
  methods: {
    getLink (name) {
      return { name: name, params: this.getParams()}
    },
    getParams () {
      return {lang: this.$i18n.locale}
    },
    switchLang () {
      this.$i18n.locale = (this.$i18n.locale === 'en') ? 'fr' : 'en'
    },
    doStuff () {
      this.$data.msg = (this.$data.state) ? this.$t('message.check') : 'Yo man'
      this.$data.state = !this.$data.state
    }
  }
};
