import React from 'react'
import { useState } from 'react';
import {TextField, FormLabel, Button} from "@mui/material"
//import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'
import {useNavigate} from "react-router-dom"

import Box from "@mui/material/Box";



export const AddBook = () => {

  const history = useNavigate();

const [inputs, setInputs] = useState({
  name:"",
  description:"",
  price:"",
  author:"",
  
  image:"",

});

const [checked, setChecked] = useState(false);

const handleChange = (e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    })) 
  }

  const sendRequest = async ()=>{
      await axios.post("http://localhost:5000/books",{
        name : String(inputs.name),
        author : String(inputs.author),
        description : String(inputs.description),
        price : Number(inputs.price),
        image : String(inputs.image),
        available : Boolean(checked)
      }).then((res)=>res.data);
  }

const handleSubmit = (e)=>{
   e.preventDefault();
   sendRequest().then(()=>history('/books'));
}

  return (
    <form onSubmit={handleSubmit}>

  <Box maxWidth={"700px"} marginLeft={"auto"} marginRight={"auto"}  paddingLeft={"5%"} paddingRight={"5%"} paddingTop={"2%"} display={"flex"} flexDirection={"column"}>

    <FormLabel style={{
        color: "white", 
    }} >Name</FormLabel>

      <TextField style={{
        backgroundColor: "#FFEE63",
        borderRadius:"5px"
    }}  value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant='outlined' name='name'/>

      <FormLabel style={{
        color: "white", 
    }}
    >Author</FormLabel>

      <TextField style={{
        backgroundColor: "#FFEE63",
        borderRadius:"5px"
    }} value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant='outlined' name='author'/>

      <FormLabel style={{
        color: "white", 
    }}
    >Description</FormLabel>
      <TextField style={{
        backgroundColor: "#FFEE63",
        borderRadius:"5px"
    }} value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant='outlined' name='description'/>

      <FormLabel style={{
        color: "white", 
    }}
     >Price</FormLabel>
      <TextField style={{
        backgroundColor: "#FFEE63",
        borderRadius:"5px"
    }} value={inputs.price} onChange={handleChange} type={"number"} margin="normal" fullWidth variant='outlined' name='price'/>

      <FormLabel style={{
        color: "white", 
    }}
     >Image</FormLabel>
      <TextField style={{
        backgroundColor: "#FFEE63",
        borderRadius:"5px"
    }} value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant='outlined' name='image' placeholder="Give Links Only" />

      <FormControlLabel style={{
        color: "white"
    }} control={<Checkbox style={{ backgroundColor: "#FFEE63", }}  checked={checked} onChange={()=>setChecked(!checked)} />} label="__Available" />
  
      <Button style={{
        borderRadius: 5,
        backgroundColor: "#064635",
        padding: "6px 10px",
        fontSize: "20px",
        marginTop:"20px",
        color: "white"
    }} type="submit" variant='contained'>Add Book</Button>
      </Box>
      <br/>
      <br/>
      <br/>
    </form>

    
  )
}

export default AddBook;