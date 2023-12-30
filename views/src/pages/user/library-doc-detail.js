import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaDownload, FaBook } from "react-icons/fa"; 
//import dummyData from "./dummyData"; 
import Book from "../../img/book.png";

export default function LibDocDetail() {
  const { document_id } = useParams();
  
  const [selectedDoc, setSelectedDoc] = useState({});
  useEffect(() => {
    console.log("axios call dafnaf");
    axios.get('/api/documentManagement/detail', {
      params: {
        document_id: parseInt(document_id)
      }
    })
    .then((response) => {
      if (response.status === 200 && 'docDetail' in response.data) {
        //setSelectedDoc(JSON.parse(response.data.docDetail));
        console.log(response.data.docDetail);
      }
    })
    .catch((error) => {
      console.error("Error!!!!!!", error);
    });
  }, []);
  // const selectedDoc = dummyData.docList.find((doc) => doc.document_id === parseInt(document_id, 10));
  
  if (!selectedDoc) {
    return <div>Document not found</div>;
  }

  const requestLoan = (id) => { 
    console.log(id)
    axios.post("http://localhost:8080/api/loanManagement/customer/request", {params: {book_id: id}}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response)
      if (response.status === 200 && response.data.code === 300) {
        window.location.reload();
      }
    })
    .catch((error) => {
      console.error("Error!!!!!!", error);
    });
  }

  return (
    // <div className="container mt-3">
    //     <div className="flex flex-row mb-3 items-center justify-between">
    //         <div className="w-1/2"></div>
    //         <div className="w-1/2 text-right">
    //         <input type="text" className="w-full px-4 py-2 border rounded-md" placeholder="Search" />
    //         </div>
    //     </div>
    //     <div className="flex flex-col md:flex-row mb-3">
    //         <div className="md:w-1/2">
    //         <img src={Book} className="w-full md:w-3/4 mx-auto" alt={selectedDoc.doc_name} />
    //         </div>
    //         <div className="md:w-1/2">
    //         <h2 className="text-2xl font-bold">{selectedDoc.doc_name}</h2>
    //         <p>Author: {selectedDoc.author}</p>
    //         <p>Type: {selectedDoc.type}</p>
    //         <p>Publisher: {selectedDoc.publisher}</p>
    //         <p>Publish Year: {selectedDoc.publish_year}</p>
    //         <p>Quantity: {selectedDoc.quantity}</p>
    //         <p>{selectedDoc.text}</p>
    //         </div>
    //     </div>
    //     <div className="flex flex-col data">
    //         <br />
    //         <p>{selectedDoc.text}</p>
    //         <p>{selectedDoc.decription}</p>
    //     </div>
    //     <div className="flex flex-row mt-3">
    //         <div className="w-full md:w-1/2 flex justify-center">
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded">
    //             <FaDownload className="mr-2" /> Download
    //         </button>
    //         </div>
    //         <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded">
    //             <FaBook className="mr-2" /> Register Loan
    //         </button>
    //         </div>
    //     </div>
    // </div>
    <div className="container mx-auto mt-6 p-8 rounded max-w-4xl">    
        <div className="flex mx-4">
            <div className="mr-2">
                <button className="flex items-center bg-primary-500 text-white px-4 py-2 rounded">
                    <FaDownload className="mr-2" /> Download
                </button>
            </div>
            <div className="">
                <button className="flex items-center bg-primary-500 text-white px-4 py-2 rounded" onClick={()=>requestLoan(selectedDoc.document_id)}>
                    <FaBook className="mr-2" /> Register Loan
                </button>
            </div>
        </div>
        <div>
            <div className='flex mx-4 my-4'>
                <img src={Book} alt={selectedDoc.doc_name} className="w-72 aspect-[3/4] object-cover block my-2" />
                <div className='flex-grow mx-4 my-2'>
                    <h1 className='font-bold text-4xl text-primary-900'>{selectedDoc.doc_name}</h1>
                    <table className='mt-4'>
                        <tr className='p-4'>
                            <td className='pr-8'>Tên tác giả:</td>
                            <td>{selectedDoc.author}</td>
                        </tr>
                        <tr className='p-2'>
                            <td className='pr-4'>Năm xuất bản:</td>
                            <td>{selectedDoc.publish_year}</td>
                        </tr>
                        <tr className='p-2'>
                            <td className='pr-4'>Nhà xuất bản:</td>
                            <td>{selectedDoc.publisher}</td>
                        </tr>
                        <tr className='p-2'>
                            <td className='pr-4'>Thể loại:</td>
                            <td>{selectedDoc.type}</td>
                        </tr>
                        <tr className='p-2'>
                            <td className='pr-4'>Số lượng:</td>
                            <td>{selectedDoc.quantity}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='mx-4'>
                <p className='text-justify' style={{ whiteSpace: 'pre-line' }}>{selectedDoc.description}</p>
            </div>
        </div>
        
        
    
    </div>
  );
}