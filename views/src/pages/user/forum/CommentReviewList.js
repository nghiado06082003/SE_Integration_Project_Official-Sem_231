import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
//import LoadingElement from '../../../component/LoadingElement';

function CommentReviewList({review_id}) {
  const cookies = new Cookies()
  const token = cookies.get("TOKEN");
  const [errorMessage, setErrorMessage] = useState('');
  const [commentList,setCommentList] = useState([]);

  useEffect(()=>{
    axios.post("http://localhost:8080/api/review/getCommentList",{review_id: review_id}, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response)=>{
      setCommentList(response.data.commentList);
    })
    .catch((error)=>{
      if (error.response?.data?.message) setErrorMessage("Bạn phải đăng nhập để xem bình luận!");
      else setErrorMessage("Hệ thống gặp vấn đề. Vui lòng thử lại sau")
    })
  },[review_id])


  return (
    <div className="mb-6">
      {commentList.length > 0 ? commentList.map((comment) => (
        <article
          key={comment.cmt_id}
          className="p-6 text-base bg-white border-t border-gray-200 "
        >
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
                <img
                  className="mr-2 w-6 h-6 rounded-full"
                  src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0OBg8PDw4OEBIQDxAQEA4QDxANDw8QFhYWFxURFRMYHSgiGBolGxMTITEhJSkrLjAuFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADUQAQACAAMFBAkDBAMAAAAAAAABAgMEEQUhMUFREmFxwRMiYoGRobHR4TJScjM0gvFCQ5L/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+kgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9rWZnSImZ6RvkHg6sPZ+Nb/jp4zEN8bJvzvX4TII4SM7JvyvX4TDTibNxo4RFvCfuDkHt6TWdJiYnpMaPAAAAAAAAAAAAAAAAAAAAACOL2sTNoiI1meEJrI5KMOvanfbr07oBy5XZkzvxN3sxx98pTCwq0rpWsR4MwAAAAGOJh1tXS0RMd8ao3NbL54c/4z5SlAFYtWYtMTGkxxiXiezuTriV6WjhbylB4lJreazGkxxgGIAAAAAAAAAAAAAAAAN2TwfSZiteXGfCASGysrpX0lo3z+nujr70k8iNz0AAAAAAAABxbSyvbw+1EetWPjHR2gKuOraOB2MzOnC2+POHKAAAAAAAAAAAAAAAldjYfq2t1mKx9Z+sIpO7Mrpkq9+s/OQdYAAAAAAAAAAAODa+Hrlot+2flO77IZYs5XXKXj2Z+W9XQAAAAAAAAAAAAAAFg2f/AGdP4q+ndl21ycd0zHz/ACDrAAAAAAAAAAABrzH9C38bfRW1hz1tMnefZmPju81eAAAAAAAAAAAAAAASexcXfan+UefkjGzL4s0xq2jlPxjmCyDGlotWJjfExrDIAAAAAAAAACZBHbZxdMKtes6z4QiG/O4/pMxNuXCvhDQAAAAAAAAAAAAAAAACS2Vm9J9HbhP6Z7+iWVdK5DaGsRTEnfyt17pBJgAAAAAAAI3aub0j0deM/qnpHRnn8/FYmtN9uc8q/lDTOs6gAAAAAAAAAAAAAAAAAAM8LBte2lYmfpHjLryezrX331rHTnP2S+FhVpTSsREA05LAvh4elr9rpHKPCXSAAAAADTmsK18LStprPXr3NwCuY+Xvh20tHhPGJ97Us16RaukxExPKd6LzmzJj1sPf7PP3AjQniAAAAAAAAAAAAAA9rWZtERGszuiAK1mbRERrM8IS+R2fFNLX0m3KOMV/LZkcnGHXWd9p4z07odgAAAAAAAAAAAAOPO5GuJGsbrdeU+KFxMO1bzW0aTCzOfN5WuLTfumOFun4BXxni4dqYk1tGkwwAAAAAAAAAAATOzcp2Kdq0etMf+Y6eLk2Vlu1i9uY3V4d9k0AAAAAAAAAAAAAAAADlz+VjEw/ajhPlKBmJidJjSY3THSVoRW1st/2RHdbykEYAAAAAAAARGs6ddw69l4XazcTyr632BMZbBimBFekb++ectoAAAAAAAAAAAAAAAAAMcSkWw5ieExpLIBWcXDmuLNZ5ToxSG2MLTGrb90aT4x+PojwAAAAAAEvsXD0wrW6zp7o/wBohP7Pppk6d8a/HeDpAAAAAAAAAAAAAAAAAAABx7Vw9cpM/tmJ8vNBrJj07WDavWswrYAAAAAACy4VdMKsdIiPkrdI1vHjCzgAAAAAAAAAAAAAAAAAAAAKzi10xbR0tMfNZldzsaZu/wDKQaQAAAAAZYP9av8AKPqswAAAAAAAAAAAAAAAAAAAAAK9n/7y/j5QANAAAAP/2Q=="}
                  alt={"ava of commentor"}
                />
                {comment.student_name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time
                  dateTime={comment.cmt_datetime} // Set dateTime dynamically
                  title={new Date(comment.cmt_datetime).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                >
                  {new Date(comment.cmt_datetime.split('T')[0]).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </p>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            {comment.cmt_content}
          </p>
          <div className="flex items-center mt-4 space-x-4">
            <button
              type="button"
              className="flex items-center text-sm text-gray-500 hover:underline font-medium"
            ></button>
          </div>
        </article>
      ))
      : errorMessage !== '' ?
        <h4 className="text-center text-lg font-semibold">{errorMessage}</h4>
      :
      <h4 className="text-center text-lg font-semibold">Bài viết chưa có bình luận nào</h4>
    }
    </div>
  );
}

export default CommentReviewList;

const comments = [
  {
    id: 1,
    author: "Michael Gough",
    profilePic: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    date: "Feb. 8, 2022",
    content:
      "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
  },
];