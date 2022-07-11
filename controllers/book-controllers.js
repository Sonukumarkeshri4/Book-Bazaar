
const Book = require("../model/Book");

const getAllBooks = async (req, res, next)=>{

    let books;
    try{
    books = await Book.find();
    }
    catch(err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message : "no products found"});
    }
    else{
        return res.status(200).json({books});
    }

};

const getById = async (req,res)=>{
    const id = req.params.id; // for parameter inserted after route // .id is name of parameter passed
   let book;
   try{
    book = await Book.findById(id);
   }
   catch(err){
    console.log(err);
   }
   if(!book){
        return res.status(404).json({message : "no book with that id found"});
    }
    else{
        return res.status(200).json({book});
    }
};


const updateBook = async(req,res,next)=>{
  let book;
  const id = req.params.id;
  const {name, author, description, price, available, image} = req.body;
  try{
    book = await Book.findByIdAndUpdate(id, {  // mongodb method for finding and updating simultaneously
        name,
        author,
        description,
        price,
        available,
        image
    }); 

    book = await book.save();
  }
  catch(err){
    console.log(err);
  }
  if(!book){
        return res.status(404).json({message:"Unable to update by this ID"})
    }
    else{
        return res.status(201).json({book});
    }
};



const addBook = async (req,res,next)=> {
    let book;
    const {name, author, description, price, available,image} = req.body;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();
    }
    catch(err){
            console.log(err);
    }

    if(!book){
        return res.status(500).json({message:"Unable to add"})
    }
    else{
        return res.status(201).json({book});
    }
};


const deleteBook = async(req,res,next)=>{
    const id = req.params.id;
     let book;
        
    try{
     book = await Book.findByIdAndRemove(id) 
    }
    catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(404).json({message:"Unable to delete by this id"})
    }
    else{
        return res.status(200).json({message:"Book successfully deleted"});
    }
}


exports.getAllBooks = getAllBooks;
exports.getById = getById;
exports.addBook = addBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;