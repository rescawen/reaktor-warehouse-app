import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Badge from '@material-ui/core/Badge'
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

const Availability = ({ availability }) => {

    if (!availability) {
        return null
    }
    
    console.log(availability)

    if (availability==="INSTOCK") {
        return (
            <div>
                <Chip label="In Stock" variant="outlined" style={{color:'#558b2f', borderColor:'#7cb342', borderWidth:'2px'}}/>
            </div>
        )
    } else if (availability==="LESSTHAN10") {
        return (
            <div>
                <Badge badgeContent={10} color="error">
                <Chip label="In Stock" />
                </Badge>
            </div>
        )
    } else if (availability==="OUTOFSTOCK") {
        return (
            <div>
                <Chip  label="Out of Stock" variant="outlined" color="secondary" style={{borderWidth:'2px'}}/>
            </div>
        )
    }
    
}

const ProductCard = (props) => {
    const [availability, setAvailability] = useState(null)
    const classes = useStyles()

    useEffect(() => {
        manufacturerService.getAvailablility(props.product.manufacturer, props.product.id.toUpperCase()).then(a => {
            const stockData = a.DATAPAYLOAD.split('\n')
            const stock = stockData[2].split('\<')[1]
            setAvailability(stock.split('\>')[1])
        })
    }, [])


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

export default ProductCard