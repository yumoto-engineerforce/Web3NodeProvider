import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Grid, Card, CardContent, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DashboardTemplate from '../templates/DashboardTemplate';
import ChartContainer from '../organisms/ChartContainer';

const initialData = [
  { time: Date.now(), value: Math.random() * 100 },
  { time: Date.now() + 1000, value: Math.random() * 100 },
  { time: Date.now() + 2000, value: Math.random() * 100 },
];

const recentActivities = [
  { id: 1, activity: 'Node started', time: '2023-07-30 10:00' },
  { id: 2, activity: 'Transaction sent', time: '2023-07-30 10:05' },
  { id: 3, activity: 'Node stopped', time: '2023-07-30 10:10' },
];

const Dashboard: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => [
        ...prevData,
        { time: Date.now(), value: Math.random() * 100 }
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleAddNode = () => {
    console.log('Add Node clicked');
  };

  const handleRefreshData = () => {
    setData(initialData);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardTemplate
        darkMode={darkMode}
        onThemeChange={handleThemeChange}
        onDrawerToggle={handleDrawerToggle}
        drawerOpen={drawerOpen}
      >
        <Container style={{ marginTop: '84px', height: 'calc(100vh - 64px)', overflow: 'auto' }}>
          <Grid container spacing={3} style={{ marginBottom: '1rem' }}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Dashboard Overview
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Here is a quick overview of your node activities and recent transactions.
                  </Typography>
                  <Button variant="contained" color="primary" onClick={handleAddNode} style={{ marginRight: '1rem' }}>
                    Add Node
                  </Button>
                  <Button variant="contained" color="secondary" onClick={handleRefreshData}>
                    Refresh Data
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <ChartContainer data={data} />

          <Grid container spacing={3} style={{ marginTop: '1rem' }}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Recent Activities
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell>Activity</TableCell>
                          <TableCell>Time</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {recentActivities.map(activity => (
                          <TableRow key={activity.id}>
                            <TableCell>{activity.id}</TableCell>
                            <TableCell>{activity.activity}</TableCell>
                            <TableCell>{activity.time}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </DashboardTemplate>
    </ThemeProvider>
  );
};

export default Dashboard;
