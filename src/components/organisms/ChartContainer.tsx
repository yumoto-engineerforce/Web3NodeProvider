import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import LineChartComponent from './LineChartComponent';
import BarChartComponent from './BarChartComponent';
// import PieChartComponent from './PieChartComponent';

interface ChartContainerProps {
  data: { time: number; value: number }[];
}

const ChartContainer: React.FC<ChartContainerProps> = ({ data }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" component="h3">
              Line Chart
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ marginBottom: '1rem' }}>
              Real-time data over time
            </Typography>
            <LineChartComponent data={data} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" component="h3">
              Bar Chart
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ marginBottom: '1rem' }}>
              Comparison of values
            </Typography>
            <BarChartComponent data={data} />
          </CardContent>
        </Card>
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" component="h3">
              Pie Chart
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ marginBottom: '1rem' }}>
              Distribution of values
            </Typography>
            <PieChartComponent data={data} />
          </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  );
};

export default ChartContainer;
