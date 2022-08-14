import * as React from 'react';
import {
  AppBar,
  Box,
  IconButton
} from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import LQLogo from '../../assets/logos/lq_logoA4.gif';
import LQTextLogo from '../../assets/ttl_main.png';

interface ThemeProps {
  toggleColorMode: () => void
}

export default function Menu(props: ThemeProps) {
  const theme = useTheme();

  return (
    <Box>
      <AppBar position='static' elevation={0} enableColorOnDark>
        <Box sx={{
          display: 'flex',
          padding: 1
        }}>
          <Box component='img'
            sx={{
              height: 52,
              width: 52,
              marginTop: 'auto',
              marginBottom: 'auto'
            }}
            src={LQLogo}
          />
          <Box component='img'
            sx={{
              paddingLeft: 2,
              height: 32,
              marginTop: 'auto',
              marginBottom: 'auto'
            }}
            src={LQTextLogo}
          />
          <Box sx={{
            justifyContent: 'flex-end',
            marginLeft: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            alignContent: 'center'
          }}>
            <IconButton
              size='large'
              color='inherit'
              aria-label='toggledark'
              sx={{ mr: 2 }}
              onClick={() => props.toggleColorMode()}
            >
              {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}