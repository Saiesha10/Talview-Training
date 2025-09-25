import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';
import BookList from './assets/Components/BookList';
import AddBook from './assets/Components/AddBook';
import React from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [loading,setLoading]=useState([true]);
  const[error,setError]=useState(null);
  const API_URL = "https://68d4d450e29051d1c0ac33f2.mockapi.io/Books";

  useEffect(()=>{
    axios.get(API_URL)
    .then(res=>{
      setBooks(res.data);
      setLoading(false);
    })
    .catch(err=>{
      setError(err.message);
      setLoading(false);
    });
  },[]);

  const addBook=(book)=>{
    axios.post(API_URL,book)
    .then(res=>{
      setBooks(prev=>[...prev,res.data]);
    })
    .catch(err=> console.log(err));
  };

  const deleteBook=(BookID)=>{
    axios.delete(`${API_URL}/${BookID}`)
    .then(()=>{
      setBooks(prev=>prev.filter(book=>book.BookID!=BookID));
    })
    .catch(err => console.log(err));
  };
  if (loading) return <p>loading,please wait....</p>
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>Book Tracker</h1>
      <BookList books={books} deleteBook={deleteBook} />
      <AddBook addBook={addBook}/>
    </div>
  )
}

export default App;
