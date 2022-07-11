
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from "react";
import { Link } from "react-router-dom";
import "./NewArrivals.css";

const Description = () => {
  return (
    <div className='description'>
    <h1>Welcome to Book-Bazaar</h1>
    <p>The portal contains an awesome collections of books for all ages. Reading books gives us immense knowledge about the outside world. When we develop a healthy habit of reading books only then we realize the significant value of books in our life. According to a well-known writer, Stephen king, “Books are a uniquely portable magic”, which can bring joy to our life. </p>
    
    <center>
    <Button style={{margin:"10px",maxWidth: '300px', maxHeight: '80px', minWidth: '300px', minHeight: '70px'}}
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 1,marginBotton:1, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h6">View All products</Typography>
        </Button>

        <Button style={{margin:"10px",maxWidth: '300px', maxHeight: '80px', minWidth: '300px', minHeight: '70px'
        ,backgroundColor:"green"}}
          target="_blank" href="https://github.com/Sonukumarkeshri4/Book-Bazaar"
          sx={{ marginTop: 1,marginBotton:1}}
          variant="contained"
        >
          <Typography variant="h6">Support Us</Typography>
        </Button>
    </center>
    </div>
  )
}

export default Description