import { Color } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import { PointGraphics } from 'resium';
import { Viewer, Entity } from 'resium';
import { useSatelliteTracker } from './hooks/useSatelliteTracker';
import { useEffect, useRef } from 'react';

function App() {
  const { position, error } = useSatelliteTracker('stations', 'ISS (ZARYA)');
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewer = viewerRef.current?.cesiumElement;
    if (viewer && viewer.infoBox) {
      viewer.infoBox.frame.sandbox =
        'allow-same-origin allow-top-navigation allow-pointer-lock allow-popups allow-forms allow-scripts';
    }
  }, []);

  if (error)
    return (
      <div className='error-overlay'>Bağlantı Hatası: {error.message}</div>
    );

  return (
    <Viewer full ref={viewerRef}>
      {position && (
        <Entity position={position} name='ISS (ZARYA)'>
          <PointGraphics pixelSize={15} color={Color.LIME} />
        </Entity>
      )}
    </Viewer>
  );
}

export default App;
