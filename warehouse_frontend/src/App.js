import React, { useEffect } from 'react'
import HomePage from './components/HomePage'
import CategoryPage from './components/CategoryPage'
import NavigationBar from './components/NavigationBar'
import { useResource } from './hooks/resources'
import { Switch, Route } from "react-router-dom"

const App = () => {
  const [beanies, beanieService] = useResource()
  const [gloves, gloveService] = useResource()
  const [facemasks, facemaskService] = useResource()

  useEffect(() => {
    beanieService.getProducts('/beanies')
  }, [])

  useEffect(() => {
    gloveService.getProducts('/gloves')
  }, [])

  useEffect(() => {
    facemaskService.getProducts('/facemasks')
  }, [])

  const frontPageBeanies = beanies.slice(0, 6)
  const frontPageFacemasks = facemasks.slice(0, 6)
  const frontPageGloves = gloves.slice(0, 6)

  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path="/beanies-category">
          <CategoryPage
            products={frontPageBeanies}
            category={"Beanies"} />
        </Route>
        <Route path="/facemasks-category">
          <CategoryPage
            products={frontPageFacemasks}
            category={"Facemasks"} />
        </Route>
        <Route path="/gloves-category">
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
