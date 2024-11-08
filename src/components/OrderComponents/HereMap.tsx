import React, { Component } from 'react';
import HEREMap from 'react-here-maps';

export default class Map extends Component {
    render() {
        return (
            <HEREMap
                appId="JpgLXta2d97AuxUVLrfj"
                appCode="eo6gDvDG37cvr8PmZNYOVyA_dw0h1Hy4ZgyYVdChVlw"
                center={{ lat: 0, lng: 0 }}
                zoom={14}
            />
        )
    }
}
