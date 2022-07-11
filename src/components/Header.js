import React from "react";
import { useState } from "react";
import {AppBar} from "@mui/material"
//import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import {Tab, Tabs} from '@mui/material';

import {NavLink} from 'react-router-dom';  // for running app without loading  // for working of these , we need to wrap root (index.js) in browserRouter

function Header(){
  const [value, setvalue] = useState();
    return <div>
    
        <AppBar sx={{backgroundColor: "rgb(115, 69, 0)"}} position="sticky">
         <Toolbar>
         <NavLink to="/" style={{ color: "white" ,textDecoration: 'none'  }}>
            
            <Typography display="inline-block">
              <h2>Book Bazaar</h2>
            </Typography>
          </NavLink>
          
          <Tabs sx={{ ml: "auto" }} textColor="inherit" indicatorColor="primary" value={value} onChange={(e,val)=>{setvalue(val)}}>

          <Tab LinkComponent={NavLink} to="/" label="Home" />
            <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About us" />
           
          </Tabs>
          </Toolbar>
        </AppBar>
    </div>
}

export default Header;