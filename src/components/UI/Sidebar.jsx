import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import SatelliteIcon from '@mui/icons-material/SatelliteAlt';
import PublicIcon from '@mui/icons-material/Public';

const drawerWidth = 260;

const Sidebar = ({ selectedGroup, onGroupChange }) => {
  const groups = [
    { id: 'stations', name: 'Uzay İstasyonları', icon: <PublicIcon /> },
    { id: 'starlink', name: 'Starlink', icon: <SatelliteIcon /> },
    { id: 'visual', name: 'Parlak Uydular', icon: <SatelliteIcon /> },
  ];

  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: 'rgba(10, 25, 41, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant='h6' color='primary' sx={{ fontWeight: 'bold' }}>
          ORBIT TRACKER
        </Typography>
      </Box>
      <Divider />
      <List>
        {groups.map((group) => (
          <ListItem key={group.id} disablePadding>
            <ListItemButton
              selected={selectedGroup === group.id}
              onClick={() => onGroupChange(group.id)}
            >
              <ListItemIcon
                sx={{
                  color:
                    selectedGroup === group.id ? 'primary.main' : 'inherit',
                }}
              >
                {group.icon}
              </ListItemIcon>
              <ListItemText primary={group.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
