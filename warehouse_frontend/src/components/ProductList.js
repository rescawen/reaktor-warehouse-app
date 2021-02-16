import React from 'react'
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
        justifyContent: 'center',
        backgroundColor: '#fafafa',
        margin: '25px'
    },
    gridList: {
        width: 300,
        height: 700,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))

const ProductList = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <GridList cellHeight={250} className={classes.gridList} >
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <h1 style={{ textAlign: 'center' }}>{props.category}</h1>
                    <div className={classes.header}>
                    <Chip icon={<SearchIcon />} label="Search placeholder..." />
                    </div>
                </GridListTile>
                {props.products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </GridList>
        </div>
    )
}

export default ProductList