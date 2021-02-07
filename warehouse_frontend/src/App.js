import React, { useState, useEffect } from 'react'
import beanieService from './services/beanies'
import gloveService from './services/gloves'
import facemaskService from './services/facemasks'

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
      <div style={{ padding: 10 }}>
        <p>beanies</p>
        {beanies.map(beanie => <p key={beanie.id}>{beanie.name}</p>)}
      </div>
      <div style={{ padding: 10 }}>
        <p>facemasks</p>
        {facemasks.map(facemask => <p key={facemask.id}>{facemask.name}</p>)}
      </div>
      <div style={{ padding: 10 }}>
        <p>gloves</p>
        {gloves.map(glove => <p key={glove.id}>{glove.name}</p>)}
      </div>
    </div>
  );
}

export default App;
