// pages/Dashboard.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">Dashboard</Typography>
      <Grid container spacing={3} style={{ marginTop: 20 }}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            {/* Add content for the left section */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            {/* Add content for the right section */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;