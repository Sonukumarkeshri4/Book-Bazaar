
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from "react";
import { Link } from "react-router-dom";
import "./random.css"
import Footer from './Footer.js';

import NewArrivals from './home/NewArrivals';
import Description from './home/Description';

import { Authors
 } from './home/Authors';
const Home = () => {
  return (
    <div>
     <NewArrivals />
     <Authors />
     <Description />
     
     <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 1,marginBotton:1, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h6">View All products</Typography>
        </Button>
      <Footer />
    </div>
  );
};


/*

 <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 1,marginBotton:1, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h6">View All products</Typography>
        </Button>
        
*/

export default Home;