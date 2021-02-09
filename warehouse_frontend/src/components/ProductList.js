import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
import ProductCard from './ProductCard'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 350,
        height: 700,
    },
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}))

const ProductList = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <GridList cellHeight={250} className={classes.gridList}>
                <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
                    <ListSubheader component="div"><h1 style={{ textAlign: 'center' }}>{props.category}</h1></ListSubheader>
                </GridListTile>
                {props.products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </GridList>
        </div>
    )
}

export default ProductList