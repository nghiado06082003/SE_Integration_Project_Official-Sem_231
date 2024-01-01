import React, { useEffect, useState } from "react";
import axios from "axios";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

export default function EventCreation() {
  const [eventData, setEventData] = useState({
    eventTitle: '',
    description: '',
    brief: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setEventData({
      ...eventData,
      image: imageFile,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/post/new", {title: eventData.eventTitle, brief: eventData.brief, content: eventData.description, image_url: eventData.image},{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        if (response.status === 200 && '300' in response.data) {
          //đăng bài thành công
          window.location.href="/admin/event-management";
        }
      })
      .catch((error) => {
        console.error("Error!!!!!!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto m-10 p-6 bg-blue-100 rounded-md shadow-md max-h-[80vh]">
      <h1 className="text-center font-bold mb-4 text-2xl">Tạo sự kiện mới</h1>
      <label htmlFor="eventTitle" className="block text-sm font-semibold text-gray-600">
        Tên sự kiện:
      </label>
      <input
        type="text"
        id="eventTitle"
        name="eventTitle"
        value={eventData.eventTitle}
        onChange={handleInputChange}
        className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      /><br /><br />

      <label htmlFor="description" className="block text-sm font-semibold text-gray-600">
        Tóm tắt sự kiện:
      </label>
      <textarea
        id="brief"
        name="brief"
        value={eventData.brief}
        onChange={handleInputChange}
        rows="2"
        cols="50"
        className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      ></textarea><br /><br />

      <label htmlFor="description" className="block text-sm font-semibold text-gray-600">
        Mô tả:
      </label>
      <textarea
        id="description"
        name="description"
        value={eventData.description}
        onChange={handleInputChange}
        rows="6"
        cols="50"
        className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      ></textarea><br /><br />

      {/* <label htmlFor="image" className="block text-sm font-semibold text-gray-600">
        Hình ảnh:
      </label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      /><br /><br /> */}
      <label
          htmlFor="image"
          className="block text-sm font-semibold text-gray-600"
        >
          Link hình ảnh:
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={eventData.image}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mt-1 mb-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        /><br /><br />


      <button
        type="submit"
        className="w-full px-4 py-2 mt-4 text-sm font-semibold text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500"
      >
        Đăng tải sự kiện
      </button>
    </form>
  );
}
