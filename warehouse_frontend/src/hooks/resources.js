import { useState } from 'react'
import axios from 'axios'

const baseUrl = 'https://reaktor-warehouse-rescawen.herokuapp.com'

export const useResource = () => {
  const [resources, setResources] = useState([])

  const getProducts = (category) => {
    const request = axios.get(baseUrl + category)
    return request.then(response => setResources(response.data))
  }

  const getAvailablility = (manufacturer, id) => {
    const request = axios.get(`${baseUrl}/${manufacturer}/${id.toUpperCase()}`)
    return request.then(response => {
      const stockData = response.data.DATAPAYLOAD.split('\n')
      const stock = stockData[2].split('\<')[1]
      setResources(stock.split('\>')[1])
    })
  }

  const service = {
    getProducts,
    getAvailablility
  }

  return [
    resources, service
  ]
}