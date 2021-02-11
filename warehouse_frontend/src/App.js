import React, { useState, useEffect } from 'react'
import productService from './services/products'
import ProductList from './components/ProductList'

const App = () => {
  const [beanies, setBeanies] = useState([])
  const [gloves, setGloves] = useState([])
  const [facemasks, setFacemasks] = useState([])

  useEffect(() => {
    productService.getBeanies().then(beanies => {
      setBeanies(beanies)
    })
  }, [])

  useEffect(() => {
    productService.getGloves().then(gloves => {
      setGloves(gloves)
    })
  }, [])

  useEffect(() => {
    productService.getFacemasks().then(facemasks => {
      setFacemasks(facemasks)
    })
  }, []) 

  // const manufacturers = new Set()

  // beanies.forEach(beanie => manufacturers.add(beanie.manufacturer))

  // console.log(manufacturers)

  const frontPageBeanies = beanies.slice(0,100)
  const frontPageFacemasks = facemasks.slice(0,100)
  const frontPageGloves = gloves.slice(0,100)

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <ProductList products={frontPageBeanies} category={"Beanies"} />
        <ProductList products={frontPageFacemasks} category={"Facemasks"}/>
        <ProductList products={frontPageGloves} category={"Gloves"}/>
    </div>
  );
}

export default App;
