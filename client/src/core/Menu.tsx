import * as React from 'react';
import {
  AppBar,
  Box,
  Grid
} from '@mui/material';
import LQLogo from '../../assets/logos/lq_logoA4.gif';
import LQTextLogo from '../../assets/ttl_main.png';

export default function Menu() {
  return (
    <Box>
      <AppBar elevation={0}>
        <Grid container
          direction='row'
          padding={1}
        >
          <Grid item component='img'
            sx={{
              height: 52,
              width: 52,
              marginTop: 'auto',
              marginBottom: 'auto'
            }}
            src={LQLogo}
          />
          <Grid item component='img'
            sx={{
              paddingLeft: 2,
              height: 32,
              marginTop: 'auto',
              marginBottom: 'auto'
            }}
            src={LQTextLogo}
          />
        </Grid>
      </AppBar>
    </Box>
  );
}