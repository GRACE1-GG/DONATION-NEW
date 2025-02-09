import React, { useState, useEffect } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  condition: string;
  available: boolean;
}

const BookExchange = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchBooks = () => {
      const fetchedBooks: Book[] = [
        { id: 1, title: 'JavaScript Basics', author: 'John Doe', condition: 'Good', available: true },
        { id: 2, title: 'React for Beginners', author: 'Jane Smith', condition: 'New', available: true },
        { id: 3, title: 'Advanced Python', author: 'Tom Green', condition: 'Fair', available: true },
      ];
      setBooks(fetchedBooks);
    };
    
    fetchBooks();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Find a Book to Exchange</h2>
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      
      <div>
        {filteredBooks.map((book) => (
          <div key={book.id} className="border p-4 mb-4 rounded">
            <h3 className="text-xl font-semibold">{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Condition: {book.condition}</p>
            <p>Status: {book.available ? 'Available for Exchange' : 'Not Available'}</p>
            {book.available && (
              <button
                className="bg-blue-500 text-white p-2 rounded mt-2"
                onClick={() => alert(`Requesting exchange for ${book.title}`)}
              >
                Request Exchange
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookExchange;
