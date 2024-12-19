import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetApi = () => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const response = await fetch("http://localhost:8080/bookproducts");
    const books = await response.json();
    setData(books);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="addBook">
        <Link to="/addBook">
          <h1>Add Book</h1>
        </Link>
      </div>

      <div className="container">
        <h1>Book List</h1>
        <div className="card-container">
          {data.map((book) => (
            <div className="card" key={book.bookId}>
              <h3>{book.bookName}</h3>
              <p>
                <strong>BookId:</strong> {book.bookId}
              </p>
              <p>
                <strong>Author:</strong> {book.bookAuthor}
              </p>
              <p>
                <strong>Price:</strong> ${book.bookPrice}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GetApi;
