import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import productService from './services/products'
import HomePage from './components/HomePage'
import CategoryPage from './components/CategoryPage'
import NavigationBar from './components/NavigationBar'
import { Switch, Route } from "react-router-dom"

const App = () => {
  const [beanies, setBeanies] = useState([])
  const [gloves, setGloves] = useState([])
  const [facemasks, setFacemasks] = useState([])
  
  // console.log(beanies)

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

  const frontPageBeanies = beanies.slice(0, 6)
  const frontPageFacemasks = facemasks.slice(0, 6)
  const frontPageGloves = gloves.slice(0, 6)

  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path="/beanies">
          <CategoryPage
            products={frontPageBeanies}
            category={"Beanies"} />
        </Route>
        <Route path="/facemasks">
          <CategoryPage
            products={frontPageFacemasks}
            category={"Facemasks"} />
        </Route>
        <Route path="/gloves">
          <CategoryPage
            products={frontPageGloves}
            category={"Gloves"} />
        </Route>
        <Route path="/">
          <HomePage
            frontPageBeanies={frontPageBeanies}
            frontPageFacemasks={frontPageFacemasks}
            frontPageGloves={frontPageGloves}
          />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
