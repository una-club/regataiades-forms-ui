const axios = require('axios')

const config = {
  'url' : 'http://service.regataiades.fr'
}

export function saveData(service, data) {
  return axios.post(config.url+'/'+service, data)
}
