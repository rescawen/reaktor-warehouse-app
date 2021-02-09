import React, { useState, useEffect } from 'react'
import beanieService from './services/beanies'
import gloveService from './services/gloves'
import facemaskService from './services/facemasks'
import ProductList from './components/ProductList'

const App = () => {
  const [beanies, setBeanies] = useState([])
  const [gloves, setGloves] = useState([])
  const [facemasks, setFacemasks] = useState([])

  useEffect(() => {
    beanieService.getAll().then(beanies => {
      setBeanies(beanies)
    })
  }, [])

  useEffect(() => {
    gloveService.getAll().then(gloves => {
      setGloves(gloves)
    })
  }, [])

  useEffect(() => {
    facemaskService.getAll().then(facemasks => {
      setFacemasks(facemasks)
    })
  }, [])

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <ProductList products={beanies} category={"Beanies"}/>
        <ProductList products={facemasks} category={"Facemasks"}/>
        <ProductList products={gloves} category={"Gloves"}/>
    </div>
  );
}

export default App;
