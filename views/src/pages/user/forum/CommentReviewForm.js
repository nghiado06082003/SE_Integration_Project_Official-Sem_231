import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { FiMessageCircle } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

function CommentReviewForm({ review_id, forceRerender }) {
  const [id, setID] = review_id;
  const [user, setUser] = useState(null);
  const [cmtContent, setCmtContent] = useState("");
  const [authorized, setAuthorized] = false;
  const [errorMessage, setErrorMessage] = useState(null);
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  const info = cookies.get("info");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !info) {
      cookies.remove("TOKEN", { path: "/" });
      cookies.remove("info", { path: "/" });
      setAuthorized(false);
      return;
    }
    axios
      .post('http://localhost:8080/api/authorization/collab', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        setUser(info);
        setAuthorized(true);
        setErrorMessage(null);
      })
      .catch((error) => {
        setAuthorized(false);
      });
  }, [])

  const handleInputChange = (e) => {
    setCmtContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/authorization/collab', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        setErrorMessage(null);
        axios
          .post("http://localhost:8080/api/review/addComment", {
            review_id: id,
            cmt_content: cmtContent
          }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((response) => {
            setCmtContent("");
            setErrorMessage(null);
            forceRerender();
          })
          .catch((error) => {
            alert(error.response.data.message);
            setErrorMessage(error.response.data.message);
          })
      })
      .catch((error) => {
        alert(error.response.data.message);
        setErrorMessage(error.response.data.message);
      });
  }

  return (
    <>
      {authorized && (
        <div className='mb-10'>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-bold text-gray-900">Bình luận</h2>
            <div className="flex items-center h-full text-gray-700 text-sm">
              <FiMessageCircle className="w-4 h-4 mr-1" />
              <span>{10}</span>
            </div>
          </div>
          <form className="mb-6" onSubmit={handleSubmit}>
            <div className="mb-4 rounded-lg border border-gray-200">
              <label htmlFor="comment" className="sr-only">
                Hãy viết bình luận về bài review
              </label>
              <textarea
                id="comment"
                name="cmtContent"
                rows="5"
                className="py-2 px-4 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                placeholder="Viết bình luận"
                value={cmtContent}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 "
            >
              Gửi bình luận
            </button>
            {errorMessage && (
              <h6 className="text-lg font-bold text-red">{errorMessage}</h6>
            )}
          </form>
        </div>
      )}

    </>

  );
}

export default CommentReviewForm;