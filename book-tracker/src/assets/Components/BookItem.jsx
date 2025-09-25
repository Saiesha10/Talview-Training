import React from 'react';

function BookItem({ book, deleteBook }) {
  return (
    <tr>
      <td>{book.Title}</td>
      <td>{book.Author}</td>
      <td>
        <button onClick={() => deleteBook(book.BookID)}>Delete</button>
      </td>
    </tr>
  );
}

export default BookItem;
