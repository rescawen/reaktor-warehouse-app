import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import ButtonBase from '@material-ui/core/ButtonBase'
import { useResource } from '../hooks/resources'
import { Circle, Availability, ProductPortal } from './CardAssets'


const useStyles = makeStyles((theme) => ({
    root: {
        width: 275,
        padding: 10
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    footer: {
        justifyContent: 'space-between',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    circleContainer: {
        display: 'flex',
        justifyContent: 'left',
        '& > *': {
            margin: theme.spacing(0.5),
        }
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial'
    }

}))

const ProductCard = (props) => {
    const [availability, availabilityService] = useResource()
    const classes = useStyles()
    
    useEffect(() => {
        availabilityService.getAvailablility(props.product.manufacturer, props.product.id)
    }, [])

    if (props.allCategory) {
        return (
            <div className={classes.root}>
                <Card key={props.product.id}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" display="initial" gutterBottom>
                            {props.product.id.toUpperCase()}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {props.product.name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {props.product.manufacturer}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.footer}>
                        <div className={classes.circleContainer}>
                            {props.product.color.map((color) => (
                                <Circle color={color} key={color} />
                            ))}
                        </div>
                        <Availability availability={availability} />
                        <Chip label={props.product.price + ' €'} />
                    </CardActions>
                </Card>
            </div>
        )
    }
    return (
        <div className={classes.root}>
            <Card key={props.product.id}>
                <ButtonBase className={classes.cardAction} onClick={() => props.selectProduct(props.product.id)}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" display="initial" gutterBottom>
                            {props.product.id.toUpperCase()}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {props.product.name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {props.product.manufacturer}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.footer}>
                        <div className={classes.circleContainer}>
                            {props.product.color.map((color) => (
                                <Circle color={color} key={color} />
                            ))}
                        </div>
                        <Availability availability={availability} />
                        <Chip label={props.product.price + ' €'} />
                    </CardActions>
                </ButtonBase>
            </Card>
            <div>
                <ProductPortal
                    product={props.product}
                    showList={props.showList}
                    container={props.container}
                    availability={availability}
                />
            </div>
        </div>
    )
}

export default ProductCard