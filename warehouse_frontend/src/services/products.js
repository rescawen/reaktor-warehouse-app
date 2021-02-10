import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const getBeanies = () => {
    const request = axios.get(baseUrl + '/beanies')
    return request.then(response => response.data)
}

const getFacemasks = () => {
    const request = axios.get(baseUrl + '/facemasks')
    return request.then(response => response.data)
}

const getGloves = () => {
    const request = axios.get(baseUrl + '/gloves')
    return request.then(response => response.data)
}


export default { getBeanies, getFacemasks, getGloves }