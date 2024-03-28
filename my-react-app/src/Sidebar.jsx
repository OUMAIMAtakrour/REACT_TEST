
// components/Sidebar.js
import React from 'react';
// import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import DashboardIcon from '@mui/icons-material/dashboard';
// import PeopleIcon from '@mui/icons-material/People';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Sidebar = () => {
  return (
    <div style={{ width: 200, backgroundColor: '#f5f5f5', height: '100vh' }}>
      <List>
        {/* <ListItem button component={Link} to="/dashboard"> */}
          {/* <ListItemIcon>
           
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem> */}
        {/* <ListItem button component={Link} to="/users">
          <ListItemIcon>
          
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/products">
          <ListItemIcon>
           
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem> */}
      </List>
    </div>
  );
};

export default Sidebar;