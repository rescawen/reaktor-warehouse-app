import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 700,
    }
}))

const ProductList = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div"><h1 style={{ textAlign: 'center' }}>{props.category}</h1></ListSubheader>
                </GridListTile>
                {props.products.map((product) => (
                    <GridListTile key={product.id}>
                        <GridListTileBar
                            title={product.name}
                            subtitle={<span>by: {product.manufacturer}</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

export default ProductList