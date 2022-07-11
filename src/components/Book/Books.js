import React, { useEffect,useState } from 'react'
import Book from "./Book"
import axios from 'axios';

import "./Book.css"
import Footer from '../Footer.js';
//import Loader from '../Loader.js';

const URL = "http://localhost:5000/books";
const fetchHandler = async ()=>{
  return await axios.get(URL).then((res)=>res.data);
}

export const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
   fetchHandler().then((data)=>setBooks(data.books)) // data  only will return object, so data.books
  },[])
  
console.log(books)
  return (
    <div>
    <ul>
      {books && books.map((book,i)=>{
       return <li  key= {i} >
         <Book book = {book}/>
        </li>
      })}
    </ul>
    
    <Footer />
    </div>
  )
}

export default Books;