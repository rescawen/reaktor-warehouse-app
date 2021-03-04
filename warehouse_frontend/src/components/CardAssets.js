import React from 'react'
import Chip from '@material-ui/core/Chip'

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

const PortalCircle = ({ color }) => {

    let circleStyle = {}

    if (color === "white") {
        circleStyle = {
            borderRadius: '50%',
            borderStyle: 'solid',
            width: 52,
            height: 52,
        }
    } else {
        circleStyle = {
            borderRadius: '50%',
            backgroundColor: color,
            width: 56,
            height: 56,
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

const PortalAvailability = ({ availability }) => {
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

export { Circle, PortalCircle,  Availability, PortalAvailability }