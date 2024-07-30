import React from 'react';
import { Card as MUICard, CardContent, CardProps } from '@mui/material';
import Typography from '../atoms/Typography';

interface CustomCardProps extends CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CustomCardProps> = ({ title, content, ...props }) => {
  return (
    <MUICard {...props}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">
          {content}
        </Typography>
      </CardContent>
    </MUICard>
  );
};

export default Card;
