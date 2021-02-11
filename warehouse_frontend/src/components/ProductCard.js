import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import manufacturerService from '../services/manufacturers'


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
    }

}))

const Circle = ({ color }) => {

    let circleStyle = {}

    if (color === "white") {
        circleStyle = {
            borderRadius: '50%',
            borderStyle: 'solid',
            width: 28,
            height: 28,
        }
    } else {
        circleStyle = {
            borderRadius: '50%',
            backgroundColor: color,
            width: 32,
            height: 32,
        }
    }
    return (
        <div style={circleStyle}>
        </div>
    )
}

const ProductCard = (props) => {
    const classes = useStyles()

    useEffect(() => {
        manufacturerService.getAvailablility( props.product.manufacturer, props.product.id.toUpperCase()).then(availability => {
          console.log(availability)
        })
      }, []) 

    return (
        <div className={classes.root}>
            <Card key={props.product.id}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
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
                    <Chip label={props.product.price + ' €'} />
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductCard