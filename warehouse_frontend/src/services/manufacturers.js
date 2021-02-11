import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const getAvailablility = ( manufacturer, id) => {
    const request = axios.get(`${baseUrl}/${manufacturer}/${id}`)
    return request.then(response => response.data)
}

export default { getAvailablility }