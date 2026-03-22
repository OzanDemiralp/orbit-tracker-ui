import { Viewer } from 'resium';
import SatelliteEntity from './SatelliteEntity';

const SatelliteMap = ({ position, name }) => {
  return (
    <Viewer
      full
      infoBox={false}
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      {position && <SatelliteEntity position={position} name={name} />}
    </Viewer>
  );
};

export default SatelliteMap;
