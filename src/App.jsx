import { darkTheme } from './theme/darkTheme';
import { useSatelliteTracker } from './hooks/useSatelliteTracker';
import SatelliteMap from './components/map/SatelliteMap';
import InfoPanel from './components/UI/InfoPanel';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from './components/UI/Sidebar';

function App() {
  const { position, data, error } = useSatelliteTracker(
    'stations',
    'ISS (ZARYA)',
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* 1. Ana Kapsayıcı: Sidebar ve Harita yan yana gelsin diye 'flex' */}
      <Box
        sx={{
          display: 'flex',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* 2. Sol Menü (Drawer) */}
        <Sidebar selectedGroup='stations' onGroupChange={() => {}} />

        {/* 3. Harita ve Overlay Alanı */}
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            position: 'relative', // İçindeki InfoPanel'in 'absolute' olması için şart
            height: '100vh',
          }}
        >
          {/* Resium Viewer: Arka planı kaplaması için */}
          <SatelliteMap position={position} name='ISS (ZARYA)' />

          {/* InfoPanel: En üstte görünmesi için yüksek zIndex */}
          {!error && data && (
            <InfoPanel
              name='ISS (ZARYA)'
              data={data}
              sx={{ zIndex: 1200 }} // MUI Drawer'dan daha üstte veya benzer seviyede
            />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default App;
