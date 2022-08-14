import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './core/Menu';

export default function App() {
  return (
    <div>
      <CssBaseline />
      <Router>
        <Menu />
      </Router>
    </div>
  );
}