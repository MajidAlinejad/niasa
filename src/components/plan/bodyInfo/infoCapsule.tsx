import React from 'react';

import { Box, Card, Typography, CardContent } from '@mui/material';

type Props = {
  tag: string;
  value: string;
  colorMode: 'Green' | 'Gray';
};

const InfoCapsule = ({ tag, value, colorMode }: Props) => {
  const card = (
    <CardContent
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '18px',
      }}
    >
      <Typography sx={{ fontSize: '14px' }} component="div">
        {tag}
      </Typography>
      <Typography sx={{ fontSize: '24px' }} component="div">
        {value}
      </Typography>
    </CardContent>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        sx={{
          boxShadow: 'none',
          backgroundColor: colorMode === 'Gray' ? '#F0F4F7' : '#F4FBE7',
          borderRadius: '32px',
        }}
      >
        {card}
      </Card>
    </Box>
  );
};

export default InfoCapsule;
