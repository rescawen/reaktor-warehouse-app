import axios from 'axios'
const baseUrl = 'https://reaktor-warehouse-rescawen.herokuapp.com'

const getAvailablility = ( manufacturer, id) => {
    const request = axios.get(`${baseUrl}/${manufacturer}/${id}`)
    return request.then(response => response.data)
}

export default { getAvailablility }