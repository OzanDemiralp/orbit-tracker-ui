import { Paper, Typography, Box, Grid, Divider } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import HeightIcon from '@mui/icons-material/Height';

const InfoPanel = ({ name, data }) => {
  if (!data) return null;

  return (
    <Paper
      elevation={8}
      sx={{
        position: 'absolute', // Haritaya göre konumlanması için şart
        top: 20,
        right: 20,
        width: 320,
        zIndex: 5000, // ÇOK ÖNEMLİ: Cesium katmanının üstüne çıkması için
        p: 2,
        backgroundColor: 'rgba(10, 25, 41, 0.9)', // Şeffaflığı biraz azaltalım test için
        backdropFilter: 'blur(10px)',
        border: '1px solid rgb(255, 0, 0)',
        color: 'white',
        ...sx, // Dışarıdan gelen ek stiller
      }}
    >
      {' '}
      <Typography variant='subtitle2' color='text.secondary' gutterBottom>
        CANLI TAKİP
      </Typography>
      <Typography variant='h5' sx={{ mb: 2, fontWeight: 'medium' }}>
        {name}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SpeedIcon color='primary' fontSize='small' />
            <Box>
              <Typography
                variant='caption'
                display='block'
                color='text.secondary'
              >
                HIZ
              </Typography>
              <Typography variant='body1'>
                {data.velocity?.toFixed(2)} km/s
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <HeightIcon color='primary' fontSize='small' />
            <Box>
              <Typography
                variant='caption'
                display='block'
                color='text.secondary'
              >
                İRTİFA
              </Typography>
              <Typography variant='body1'>
                {data.altitude?.toFixed(0)} m
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{ bgcolor: 'rgba(0,0,0,0.3)', p: 1, borderRadius: 1, mt: 1 }}
          >
            <Typography
              variant='caption'
              color='text.secondary'
              sx={{ display: 'block' }}
            >
              KOORDİNATLAR (Lat, Lon)
            </Typography>
            <Typography variant='body2' sx={{ fontFamily: 'monospace' }}>
              {data.latitude?.toFixed(4)}°, {data.longitude?.toFixed(4)}°
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default InfoPanel;
