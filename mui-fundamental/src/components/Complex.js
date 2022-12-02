import { AppBar, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel, Menu, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import { Button } from 'bootstrap';
import React, { useState } from 'react';

const Complex = () => {
    const [anchorElm, setAnchorElm] = useState(null)
    const [open, setOpen] = useState(false)
    const handleClose = () => {
      setAnchorElm(null)
      setOpen(false)
    }
    const handleClick = (e) => {
      setAnchorElm(e.currentTarget)
      setOpen(true)
    }
    return (
        <div>
            <Button onD color= 'success' size='small' variant="contained" >
        alooo
      </Button>
      <Button onD color= 'success' size='small' variant="contained" >
        alooodsadsads
      </Button>
      {/* <Typography variant="1" >blablabla</Typography> */}
      <Typography variant='h1'>aloo</Typography>
      <FormGroup>
        <FormControlLabel
          disabled
          label="test"
          control={
            <Checkbox
              value=""
              // checked={}
              // onChange={}
              color="error"
            />
          }
        />
      </FormGroup>
   
      <FormControl >
          <InputLabel >Age</InputLabel>
          <Select
              // value={this.state.age}
              // onChange={this.handleChange }
              input={<Input name="age" id="age-helper" />}
          >
              <MenuItem value="">
                  <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
          </Select>
      </FormControl>
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    label="Age"
    // onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
<AppBar position="fixed" color="primary" variant='outlined'>
    <Toolbar>
      <Typography variant="h6">
        dsdsad
      </Typography>
      <Button sx={{"margin-left": "auto"}}variant="contained" color="warning">
        dsauydsabhdsa
      </Button>
    </Toolbar>
  </AppBar>
  <Button color='primary' variant='contained' onClick={handleClick}>open open</Button>
  <Button color='primary' variant='contained' onClick={handleClick}>open open open open open open open open</Button>
  <Menu id="" anchorEl={anchorElm} keepMounted open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>1</MenuItem>
          <MenuItem onClick={handleClose}>2</MenuItem>
          <MenuItem onClick={handleClose}>3</MenuItem>
          <MenuItem onClick={handleClose}>4</MenuItem>
  </Menu>
        </div>
    );
};

export default Complex;