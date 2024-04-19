import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://codelndocumenteditorv1.azurewebsites.net/api'

  })
}
