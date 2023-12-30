import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function BookForm() {
  const [user, setUser] = useState(null);
  const isAuthorized = user?.permission === "Thành viên ban chủ nhiệm" || user?.permission === "Thành viên ban hậu cần";
  const [bookData, setBookData] = useState({
    bookTitle: '',
    bookAuthor: '',
    bookPublishYear: '',
    bookPublisher: '',
    description: '',
    bookType: '',
    quantity: 0,
    image: null,
  });
  const cookies = new Cookies();
  
  useEffect(() => {
    const token = cookies.get("TOKEN");
    const info = cookies.get("info");
    if (!token || !info) {
      cookies.remove("TOKEN", { path: "/" });
      cookies.remove("info", { path: "/" });
      return;
    }
    axios
      .post('http://localhost:8080/api/authorization/logistic', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        setUser(info);
      })
      .catch((error) => {
        cookies.remove("TOKEN", { path: "/" });
        cookies.remove("info", { path: "/" });
      });
  }, []);
  
  const handleInputChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setBookData({
      ...bookData,
      image: imageFile,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthorized) {
      return;
    }
    // console.log(bookData);
    const token = cookies.get("TOKEN");
    try {
      const response = await axios.post(`http://localhost:8080/api/documentManagement/add`,
        {
          doc_name: bookData.bookTitle,
          type: bookData.bookType,
          author: bookData.bookAuthor,
          publisher: bookData.bookPublisher,
          publish_year: bookData.bookPublishYear,
          quantity: bookData.quantity,
          description: bookData.description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alert(response.data.message);
      window.location.assign('/admin/library-management');
    }
    catch (error) {
      console.log(error.response);
    }
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/3 mx-auto m-10 p-6 bg-blue-100 rounded-md shadow-md"
    >
      <label
        htmlFor="bookTitle"
        className="block text-sm font-semibold text-gray-600"
      >
        Tên sách:
      </label>
      <input
        type="text"
        id="bookTitle"
        name="bookTitle"
        value={bookData.bookTitle}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mt-1 mb-6 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
      
      <label
        htmlFor="bookAuthor"
        className="block text-sm font-semibold text-gray-600"
      >
        Tác giả:
      </label>
      <input
        type="text"
        id="bookAuthor"
        name="bookAuthor"
        value={bookData.bookAuthor}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mt-1 mb-6 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
      
      <label
        htmlFor="bookPublisher"
        className="block text-sm font-semibold text-gray-600"
      >
        Nhà xuất bản:
      </label>
      <input
        type="text"
        id="bookPublisher"
        name="bookPublisher"
        value={bookData.bookPublisher}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mt-1 mb-6 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
      
      <label
        htmlFor="bookPublishYear"
        className="block text-sm font-semibold text-gray-600"
      >
        Năm xuất bản:
      </label>
      <input
        type="number"
        id="bookPublishYear"
        name="bookPublishYear"
        value={bookData.bookPublishYear}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mt-1 mb-6 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
      
      <label
        htmlFor="bookType"
        className="block text-sm font-semibold text-gray-600"
      >
        Loại sách:
      </label>
      <input
        type="text"
        id="bookType"
        name="bookType"
        value={bookData.bookType}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mt-1 mb-6 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
      
      <label
        htmlFor="description"
        className="block text-sm font-semibold text-gray-600"
      >
        Mô tả:
      </label>
      <textarea
        id="description"
        name="description"
        value={bookData.description}
        onChange={handleInputChange}
        rows="4"
        cols="50"
        className="w-full px-4 py-2 mt-1 mb-6 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      ></textarea>
      
      <label
        htmlFor="quantity"
        className="block text-sm font-semibold text-gray-600"
      >
        Số lượng:
      </label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={bookData.quantity}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mt-1 mb-6 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
      
      <label
        htmlFor="image"
        className="block text-sm font-semibold text-gray-600"
      >
        Hình ảnh:
      </label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full px-4 py-2 mt-1 mb-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 mt-4 text-sm font-semibold text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500"
      >
        Đăng sách
      </button>
    </form>
  );
}