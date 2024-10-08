import React from 'react'
import AppLayout from '../components/Layout/AppLayout'
import { Box, Typography } from '@mui/material';
import { graycolor } from '../constants/color';

const Home = () => {
  return (
    <Box bgcolor={graycolor} height={"100%"}>
      <Typography padding={"2rem"} variant='h5' textAlign={"center"}>
        Select a friend to chat
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
