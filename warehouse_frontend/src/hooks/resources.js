import { useState } from 'react'
import axios from 'axios'

const baseUrl = 'https://reaktor-warehouse-rescawen.herokuapp.com'

export const useResource = (category) => {
  const [resources, setResources] = useState([])

  const getAll = () => {
    const request = axios.get(baseUrl + category)
    return request.then(response => setResources(response.data))
  }

  const service = {
    getAll
  }

  return [
    resources, service
  ]
}