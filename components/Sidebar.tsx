import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Box, ListItemButton } from '@mui/material';

interface SidebarItem {
  text: string;
  icon: string;
}

const Sidebar: React.FC = () => {
  const daftarItems: SidebarItem[] = [
    { text: 'Drive Saya', icon: 'http://agtest.agakcw.my.id/gdrive.png' },
    { text: 'Berbagi Drive', icon: 'http://agtest.agakcw.my.id/file-sharing.png' },
    { text: 'Sampah', icon: 'http://agtest.agakcw.my.id/trash-can.png' },
    { text: 'Penggunaan Storage', icon: 'http://agtest.agakcw.my.id/trash-can.png' },
    { text: 'Favorite', icon: 'http://agtest.agakcw.my.id/pngegg%20%281%29.png' },
  ];

  return (
    <Box
      sx={{
        width: '240px',
        height: '100vh',
        backgroundColor: '#1976d2',
        color: 'white',
        padding: '16px',
      }}
    >
      <List>
        {daftarItems.map((item, index) => (
          <ListItem key={index} sx={{ paddingLeft: 2 }}>
            <ListItemButton component="li">
              <ListItemIcon>
                <img
                  src={item.icon}
                  alt={`${item.text} icon`}
                  style={{ width: 24, height: 24 }}
                />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
