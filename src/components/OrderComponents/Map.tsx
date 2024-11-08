import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from '@goongmaps/goong-map-react';

interface Viewport {
  width: number;
  height: number;
  latitude: number;
  longitude: number;
  zoom: number;
}

const Map: React.FC = () => {
  const [viewport, setViewport] = useState<Viewport>({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport: Viewport) => setViewport(nextViewport)}
    />
  );
};

export default Map;