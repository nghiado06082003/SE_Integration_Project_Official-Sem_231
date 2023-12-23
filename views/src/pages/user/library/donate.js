import { useState } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function BookForm() {
  const [bookData, setBookData] = useState({
    bookTitle: '',
    bookAuthor: '',
    bookPublishYear: null,
    bookPublisher: '',
    description: '',
    bookType: '',
    quantity: 0,
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setBookData({
      ...bookData,
      image: imageFile,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookData);
    setBookData({
      bookTitle: '',
      description: '',
      bookType: '',
      quantity: 0,
      image: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto m-10 p-6 bg-blue-100 rounded-md shadow-md">
      <label htmlFor="bookTitle" className="block text-sm font-semibold text-gray-600">
        Tên sách:
      </label>
      <input
        type="text"
        id="bookTitle"
        name="bookTitle"
        value={bookData.bookTitle}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      /><br /><br />

      <label htmlFor="bookTitle" className="block text-sm font-semibold text-gray-600">
        Tác giả:
      </label>
      <input
        type="text"
        id="bookAuthor"
        name="bookAuthor"
        value={bookData.bookAuthor}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      /><br /><br />

      <label htmlFor="bookTitle" className="block text-sm font-semibold text-gray-600">
        Nhà xuất bản:
      </label>
      <input
        type="text"
        id="bookPublisher"
        name="bookPublisher"
        value={bookData.bookPublishYear}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      /><br /><br />

      <label htmlFor="bookTitle" className="block text-sm font-semibold text-gray-600">
        Năm xuất bản:
      </label>
      <input
        type="number"
        id="bookPublishYear"
        name="bookPublishYear"
        value={bookData.bookPublishYear}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      /><br /><br />

      <label htmlFor="description" className="block text-sm font-semibold text-gray-600">
        Mô tả:
      </label>
      <textarea
        id="description"
        name="description"
        value={bookData.description}
        onChange={handleInputChange}
        rows="4"
        cols="50"
        className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      ></textarea><br /><br />

      <label htmlFor="bookType" className="block text-sm font-semibold text-gray-600">
        Loại sách:
      </label>
      <input
        type="text"
        id="bookType"
        name="bookType"
        value={bookData.bookType}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      /><br /><br />

      <label htmlFor="quantity" className="block text-sm font-semibold text-gray-600">
        Số lượng:
      </label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={bookData.quantity}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      /><br /><br />

      <label htmlFor="image" className="block text-sm font-semibold text-gray-600">
        Hình ảnh:
      </label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      /><br /><br />

      <button
        type="submit"
        className="w-full px-4 py-2 mt-4 text-sm font-semibold text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500"
      >
        Đăng sách
      </button>
    </form>
  );
}
