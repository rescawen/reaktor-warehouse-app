import React from 'react'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Portal from '@material-ui/core/Portal'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

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

    if (availability === "INSTOCK") {
        return (
            <div>
                <Chip label="In Stock" variant="outlined" style={{ color: '#558b2f', borderColor: '#7cb342', borderWidth: '2px' }} />
            </div>
        )
    } else if (availability === "LESSTHAN10") {
        return (
            <div>
                <Chip label="<10 in Stock" variant="outlined" style={{ color: '#ff8f00', borderColor: '#ffb300', borderWidth: '2px' }} />
            </div>
        )
    } else if (availability === "OUTOFSTOCK") {
        return (
            <div>
                <Chip label="Out of Stock" variant="outlined" color="secondary" style={{ borderWidth: '2px' }} />
            </div>
        )
    }

    return (
        <div>
            <Chip label="Status Unknown" variant="outlined" color="secondary" style={{ borderWidth: '2px' }} />
        </div>
    )

}

const useStyles = makeStyles((theme) => ({
    left: {
        width: 450
    },
    title: {
        fontSize: 30,
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

const ProductPortal = (props) => {
    const classes = useStyles()
    let show = false
    props.showList.forEach(s => {
        if ((s[0] === props.product.id) && (s[1] === true)) {
            show = true

        }
    })
    if (show) {
        return (
            <div>
                <Portal container={props.container}>
                    <Card key={props.product.id}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" display="initial" gutterBottom>
                                {props.product.id.toUpperCase()}
                            </Typography>
                            <Typography variant="h3" component="h2">
                                Name: {props.product.name}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Manufacturer: {props.product.manufacturer}
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.footer}>
                            <div className={classes.circleContainer}>
                                {props.product.color.map((color) => (
                                    <Circle color={color} key={color} />
                                ))}
                            </div>
                            <Availability availability={props.availability} />
                            <Chip label={props.product.price + ' €'} />
                        </CardActions>
                    </Card>
                </Portal>
            </div>
        )
    } else {
        return null
    }

}

export { Circle, Availability, ProductPortal }