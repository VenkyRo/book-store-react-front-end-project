import React, { useState } from "react";
import { Link } from "react-router-dom";

const PostApi = () => {
  const [book, setBook] = useState({
    bookName: "",
    bookAuthor: "",
    bookPrice: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value }); // Update state based on input name
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch("http://localhost:8080/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json" // Fix typo: it should be "application/json"
        },
        body: JSON.stringify(book) // Send book data as JSON
      });

      if (response.ok) {
        alert("Book added successfully!");
        setBook({ bookName: "", bookAuthor: "", bookPrice: "" }); // Clear form after success
      } else {
        alert("Failed to add book. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the book.");
    }
  };

  return (
    <>
      <div className="form-container">
        <h1 className="form-title">Add a New Book</h1>
        <form onSubmit={handleSubmit} className="book-form">
          <input
            type="text"
            name="bookName" // Name matches the key in the state
            placeholder="Book Title"
            value={book.bookName} // Value from state
            onChange={handleChange} // Update state on change
            className="form-input"
            required
          />
          <input
            type="text"
            name="bookAuthor" // Name matches the key in the state
            placeholder="Author Name"
            value={book.bookAuthor} // Value from state
            onChange={handleChange} // Update state on change
            className="form-input"
            required
          />
          <input
            type="number"
            name="bookPrice" // Name matches the key in the state
            placeholder="Price"
            value={book.bookPrice} // Value from state
            onChange={handleChange} // Update state on change
            className="form-input"
            required
          />
          <button type="submit" className="submit-button">
            Add Book
          </button>
        </form>
      </div>

      <div>
        <Link to='/'>
        <h1>show Books</h1>
        </Link>
      </div>



    </>
  );
};

export default PostApi;
