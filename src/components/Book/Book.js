import React from 'react'
import {Button} from "@mui/material"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";

const Book = (props) => {
  const history = useNavigate();
const {_id, name, author, description, price, available, image} = props.book;

const deleteHandler = async () => {
  await axios
    .delete(`http://localhost:5000/books/${_id}`)
    .then((res) => res.data)
    .then(() => history("/"))
    

};


  return (
    <div className='card'>
   <img className='cardImage' src={image} alt={name}/>
     
    <article>By {author}</article>
    <h2>{name}</h2>
    <p>{description}</p>
    <h3> Rs {price}</h3>
    <Button  style={{
        borderRadius: 5,
        backgroundColor: "#FAEA48",
        padding: "3px 10px",
        fontSize: "15px",
        color: "black"
    }}  LinkComponent={Link} to={`/books/${_id}`} sx={{mt:"5px",mr:"auto"}} >Update</Button>
    <Button style={{
        borderRadius: 5,
        backgroundColor: "#F94C66",
        padding: "3px 10px",
        fontSize: "15px",
        color: "black"
    }} onClick={deleteHandler} sx={{mt:"5px",ml:"20px" ,mr:"auto"}} >Delete</Button>
  
   

</div>
    
  )
}

export default Book