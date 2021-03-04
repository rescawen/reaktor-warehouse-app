import React from 'react'
import Typography from '@material-ui/core/Typography'
import Portal from '@material-ui/core/Portal'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import { PortalCircle, PortalAvailability } from './CardAssets'


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
                    <Card key={props.product.id} style={{ padding: '20px' }}>
                        <CardContent>
                            <Typography variant="h3" style={{ textAlign: 'center' }}>
                                {props.product.name}
                            </Typography>
                            <br />
                            <Divider />
                            <br />
                            <Typography variant="h5" style={{ display: 'inline-block' }} color="textSecondary">
                                identifier code: &nbsp;
                            </Typography>
                            <Typography variant="h4" style={{ display: 'inline-block' }}>
                                {props.product.id.toUpperCase()}
                            </Typography>
                            <br /> <br />
                            <Typography variant="h5" style={{ display: 'inline-block' }} color="textSecondary">
                                manufacturer: &nbsp;
                            </Typography>
                            <Typography variant="h4" style={{ display: 'inline-block' }}>
                                {props.product.manufacturer.toUpperCase()}
                            </Typography>
                            <br /> <br />
                            <Typography variant="h5" style={{ display: 'inline-block' }} color="textSecondary">
                                stock status: &nbsp;
                            </Typography>
                            <Typography variant="h5" style={{ display: 'inline-block' }}>
                                {props.availability} &nbsp;&nbsp;
                            </Typography>
                            <Typography variant="h5" style={{ display: 'inline-block' }} color="textSecondary">
                                price: &nbsp;
                            </Typography>
                            <Typography variant="h5" style={{ display: 'inline-block' }}>
                                {props.product.price}€ 
                            </Typography>
                            <br /> <br />
                            <Typography variant="h5" color="textSecondary">
                                description: &nbsp;
                            </Typography>
                            <br />
                            <Typography style={{ display: 'inline-block' }}>
                                Your client is a clothing brand that is looking for a simple web app to use in their warehouses. To do their work efficiently, the warehouse workers need a fast and simple listing page per product category, where they can check simple product and availability information from a single UI. There are three product categories they are interested in for now: gloves, facemasks, and beanies. Therefore, you should implement three web pages corresponding to those categories that list all the products in a given category. One requirement is to be easily able to switch between product categories quickly. You are free to implement any UI you want, as long as it can display multiple products at once in a straightforward and explicit listing. At this point, it is not necessary to implement filtering or pagination functionality on the page.
                            </Typography>
                            <br /> <br />
                            <div className={classes.circleContainer}>
                                <Typography variant="h5" style={{ paddingTop: '10px' }} color="textSecondary">
                                    colors: &nbsp;
                            </Typography>
                                {props.product.color.map((color) => (
                                    <PortalCircle color={color} key={color} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </Portal>
            </div>
        )
    } else {
        return null
    }

}

export default ProductPortal