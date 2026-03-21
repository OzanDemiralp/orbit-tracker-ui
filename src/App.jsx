import { Color } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import { Viewer, Entity } from 'resium';
import { useSatelliteTracker } from './hooks/useSatelliteTracker';

function App() {
  const { position, error } = useSatelliteTracker('stations', 'ISS (ZARYA)');

  if (error)
    return (
      <div className='error-overlay'>Bağlantı Hatası: {error.message}</div>
    );

  return (
    <Viewer full>
      {position && (
        <Entity position={position} name='ISS (ZARYA)'>
          <PointGraphics pixelSize={15} color={Color.LIME} />
        </Entity>
      )}
    </Viewer>
  );
}

export default App;
