import React, { useRef, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import SearchIcon from '@material-ui/icons/Search'
import Chip from '@material-ui/core/Chip';
import ProductCard from './ProductCard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',// later on if BIG product info placed on the left of this, this will be on right side
    backgroundColor: '#fafafa',
    margin: '25px'
  },
  popOut: {
    width: 500,
    height: 700,
    margin: '25px'
  },
  gridList: {
    width: 600,
    height: 700,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))

const CategoryPage = (props) => {
  const classes = useStyles()
  const [showList, setShowList] = useState([])
  const container = useRef(null)

  useEffect(() => {
    setShowList(props.products.map(p => [p.id, false]))
  },[props])

  const selectProduct = (productId) => {
    const checkOnAndOff = tuple => {
      if (tuple[0] === productId) {
        return [tuple[0], true]
      }
      return [tuple[0], false]
    }
    setShowList(showList.map(checkOnAndOff)) 
  }

  return (
    <div className={classes.root}>
      <div ref={container} className={classes.popOut}></div>
      <GridList cellHeight={250} className={classes.gridList} >
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <h1 style={{ textAlign: 'center' }}>{props.category}</h1>
          <div className={classes.header}>
            <Chip icon={<SearchIcon />} label="Search placeholder..." />
          </div>
        </GridListTile>
        {props.products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            container={container.current}
            showList={showList}
            selectProduct={selectProduct} />
        ))}
      </GridList>
    </div>
  )
}

export default CategoryPage