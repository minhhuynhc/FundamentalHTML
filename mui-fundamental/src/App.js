import { Button, Typography, FormControl, FormLabel, FormGroup, FormHelperText, FormControlLabel, Checkbox, InputLabel, Select, Input, MenuItem, AppBar, Toolbar, Menu } from '@mui/material';
import { useState } from 'react';
import AlertDialog from './components/AlertDialog';
import MultiActionAreaCard from './components/MultiActionAreaCard';
import logo from './logo.svg';
function App() {

  return (
      <div>
       <MultiActionAreaCard/>
       <AlertDialog/>
    </div>
  );
  
}

export default App;
