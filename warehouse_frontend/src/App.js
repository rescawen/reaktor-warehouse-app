import React, { useState, useEffect } from 'react'
import HomePage from './components/HomePage'
import CategoryPage from './components/CategoryPage'
import NavigationBar from './components/NavigationBar'
import { useResource } from './hooks/resources'
import { Switch, Route } from "react-router-dom"

const App = () => {
  const [beanies, beanieService] = useResource('/beanies')
  const [gloves, gloveService] = useResource('/gloves')
  const [facemasks, facemaskService] = useResource('/facemasks')

  // console.log(beanies)
  // make these useEffects into functions that you pass to category page.

  useEffect(() => {
    beanieService.getAll()
  }, [])

  useEffect(() => {
    gloveService.getAll()
  }, [])

  useEffect(() => {
    facemaskService.getAll()
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
