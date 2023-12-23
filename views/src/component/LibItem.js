import React from "react";
import Book from "../img/book.png";
import { IoEyeOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import axios from "axios";

function DocItem({ doc, triggerFetch, setTriggerFetch }) {
  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(doc);
    try {
      const response = await axios.get(`http://localhost:8080/api/documentManagement/delete?document_id=${doc.document_id}`)
      alert(response.data.message);
      setTriggerFetch(!triggerFetch);
    }
    catch (error) {
      console.log(error.response);
    }
  }
  
  return (
    <div className="mb-3 rounded overflow-hidden shadow hover:shadow-xl my-4 border border-gray">
      <div key={doc.id} className="flex overflow-hidden">
        <img
          src={Book}
          alt={doc.doc_name}
          className="w-48 aspect-[3/4] object-cover block my-2 mx-2"
        />
        <div className="px-6 py-4 overflow-hidden">
          <h3 className="font-bold text-2xl text-primary-800 mb-2">
            {doc.doc_name}
          </h3>
          <p className="text-bluelight text-base line-clamp-3">{doc.text}</p>
        </div>
      </div>
      <div className="px-4 py-2 pb-4 flex justify-between">
        <div className="flex items-center">
          <span className="inline-block pr-2 text-sm text-gray-500 mr-2 border-r-2">
            {doc.publisher}
          </span>
          <span className="inline-block pr-2 text-sm text-gray-500 mr-2 border-r-2">
            {doc.publish_year}
          </span>
          <span className="inline-block pr-2 text-sm text-gray-500 mr-2">
            {doc.author}
          </span>
        </div>
        <div className="inline-flex items-center rounded-md shadow-sm">
          <button className="text-slate-800 hover:text-primary-700 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
            <span>
              <IoEyeOutline className="w-4 h-4" />
            </span>
            <span>View</span>
          </button>
          <button className="text-slate-800 hover:text-primary-700 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center">
            <span>
              <FiEdit className="w-4 h-4" />
            </span>
            <span>Edit</span>
          </button>
          <button
            className="text-slate-800 hover:text-primary-700 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
            onClick={handleDelete}
          >
            <span>
              <GoTrash className="w-4 h-4" />
            </span>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DocItem;