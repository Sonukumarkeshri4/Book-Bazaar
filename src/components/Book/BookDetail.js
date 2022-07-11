import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const BookDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/books/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.book));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/books/${id}`, {
          name: String(inputs.name),
          author: String(inputs.author),
          description: String(inputs.description),
          price: Number(inputs.price),
          image: String(inputs.image),
          available: Boolean(checked),
        })
        .then((res) => res.data);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/books"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div>
        {inputs && (
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent={"center"}
              maxWidth={700}
              alignContent={"center"}
              alignSelf="center"
              marginLeft={"auto"}
              marginRight="auto"
              marginTop={5}
            >
              <FormLabel style={{
        color: "white", 
    }}>Name</FormLabel>
              <TextField style={{
        backgroundColor: "#FFEE63",
        borderRadius:"5px"
    }}
                value={inputs.name}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="name"
              />

              <FormLabel style={{
        color: "white", 
    }}>Author</FormLabel>
              <TextField style={{
        backgroundColor: "#FFEE63",
        borderRadius:"5px"
    }}
                value={inputs.author}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="author"
              />


              <FormLabel style={{
        color: "white", 
    }}>Description</FormLabel>
              <TextField style={{
        backgroundColor: "#FFEE63",
        borderRadius:"5px"
    }}
                value={inputs.description}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="description"
              />


              <FormLabel style={{
        color: "white", 
    }}>Price</FormLabel>
              <TextField style={{
        backgroundColor: "#FFEE63",
        borderRadius:"5px"
    }}
                value={inputs.price}
                onChange={handleChange}
                type="number"
                margin="normal"
                fullWidth
                variant="outlined"
                name="price"
              />


              <FormLabel style={{
        color: "white", 
    }}>Image</FormLabel>
              <TextField style={{
        backgroundColor: "#FFEE63",
        borderRadius:"5px"
    }}
                value={inputs.image}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="image"
              />
              <FormControlLabel style={{
        color: "white"
    }}
                control={
                  <Checkbox style={{ backgroundColor: "#FFEE63", }}
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label="__Available"
              />
  
              <Button style={{
        borderRadius: 5,
        backgroundColor: "#064635",
        padding: "6px 10px",
        fontSize: "20px",
        marginTop:"20px",
        color: "white"
    }} variant="contained" type="submit">
                Update Book
              </Button>
            </Box>
            <br/>
      <br/>
      <br/>
          </form>
        )}
      </div>
    );
  };
  
  export default BookDetail;