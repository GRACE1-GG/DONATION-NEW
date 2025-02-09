import React, { useState } from 'react';

const BookDonationForm = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [condition, setCondition] = useState('');
  const [bookPhoto, setBookPhoto] = useState<File | null>(null);
  const [contactDetails, setContactDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log({ bookTitle, author, gradeLevel, condition, bookPhoto, contactDetails });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Donate a Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="bookTitle" className="block mb-2">Book Title</label>
          <input
            type="text"
            id="bookTitle"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block mb-2">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gradeLevel" className="block mb-2">Grade Level</label>
          <select
            id="gradeLevel"
            value={gradeLevel}
            onChange={(e) => setGradeLevel(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select Grade Level</option>
            <option value="Primary">Primary</option>
            <option value="Secondary">Secondary</option>
            <option value="University">University</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="condition" className="block mb-2">Condition</label>
          <select
            id="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select Condition</option>
            <option value="New">New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="bookPhoto" className="block mb-2">Upload Book Photo</label>
          <input
            type="file"
            id="bookPhoto"
            onChange={(e) => setBookPhoto(e.target.files?.[0] || null)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contactDetails" className="block mb-2">Contact Details</label>
          <input
            type="text"
            id="contactDetails"
            value={contactDetails}
            onChange={(e) => setContactDetails(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Donate Book
        </button>
      </form>
    </div>
  );
};

export default BookDonationForm;
