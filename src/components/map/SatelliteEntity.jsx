import { Entity, PointGraphics, LabelGraphics, PolylineGraphics } from 'resium';
import { Color, Cartesian2, VerticalOrigin } from 'cesium';
import { useMemo } from 'react';

const SatelliteEntity = ({ position, name, trajectory }) => {
  // Gereksiz render'ı önlemek için label ayarlarını memoize ediyoruz
  const labelOptions = useMemo(
    () => ({
      font: '14px Orbitron, Roboto, sans-serif', // Uzay temalı bir font varsa şık durur
      fillColor: Color.WHITE,
      outlineColor: Color.BLACK,
      outlineWidth: 2,
      pixelOffset: new Cartesian2(0, -20),
      verticalOrigin: VerticalOrigin.BOTTOM,
    }),
    [],
  );

  return (
    <Entity position={position} name={name}>
      {/* Uyduyu temsil eden nokta */}
      <PointGraphics
        pixelSize={12}
        color={Color.LIME}
        outlineColor={Color.WHITE}
        outlineWidth={1}
      />

      {/* Uydunun ismi */}
      <LabelGraphics text={name} {...labelOptions} />

      {/* Eğer backend'den trajectory (yörünge yolu) geliyorsa buraya bir çizgi ekleyebilirsin */}
      {trajectory && (
        <PolylineGraphics
          positions={trajectory}
          width={2}
          material={Color.LIME.withAlpha(0.4)} // Hafif şeffaf bir iz
        />
      )}
    </Entity>
  );
};

export default SatelliteEntity;
