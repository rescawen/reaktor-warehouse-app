import React from 'react'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Portal from '@material-ui/core/Portal'
import Paper from '@material-ui/core/Paper'

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

    // console.log(availability)

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
    // add 4rth option for information is not available, below solution adding that default does not work
    return (
        <div>
            <Chip label="Stock Status Unknown" variant="outlined" color="secondary" style={{ borderWidth: '2px' }} />
        </div>
    )

}

const ProductPortal = (props) => {
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
                    <Paper>
                        <Typography variant="h4">
                            {props.product.name}
                        </Typography>
                    </Paper>
                </Portal>
            </div>
        )
    } else {
        return null
    }

}

export { Circle, Availability, ProductPortal }