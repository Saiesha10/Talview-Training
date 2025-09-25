import React from 'react';
import BookItem from './BookItem';

function BookList({ books, deleteBook }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <BookItem key={book.BookID} book={book} deleteBook={deleteBook} />
        ))}
      </tbody>
    </table>
  );
}

export default BookList;
